import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store/store.ts';
import { worker } from './mocks/worker.ts';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { showModal } from './redux/reducer/modalSlice.ts';
import Globalmodal from './components/Modal/Globalmodal.tsx';
import App from './App.tsx';
import './styles/App.css';

const queryClient = new QueryClient({
    queryCache: new QueryCache({
        onError: (error: any) => {
            store.dispatch(
                showModal({
                    isOpen: true,
                    content: error?.data?.message ?? '알 수 없는 에러가 발생했습니다. 잠시후 다시 시도하여주시기 바랍니다.',
                    onConfirm: null,
                }),
            );
        },
    }),
});

worker.start({ onUnhandledRequest: 'bypass' });

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Globalmodal />
                    <App />
                </PersistGate>
            </Provider>
        </QueryClientProvider>
    </StrictMode>,
);
