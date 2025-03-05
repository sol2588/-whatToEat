import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './views/Login/Login.tsx';
import Signup from './views/Signup/Signup.tsx';
import Mypage from './views/Mypage/Mypage.tsx';
import HeaderView from './components/Header/HeaderView.tsx';
import Home from './views/Home/Home.tsx';
import AllRecipesConatiner from './views/Recipes/AllRecipes/AllRecipesConatiner.tsx';
import PopularRecipesContainer from './views/Recipes/PopularRecipes/PopularRecipesContainer.tsx';
import RecommendedRecipesContainer from './views/Recipes/RecommendedRecipes/RecommendedRecipesContainer.tsx';
import DetailRecipe from './views/Recipes/DetailRecipe/DetailRecipe.tsx';
import AuthKaKao from './components/AuthKaKao.tsx';
import SearchPage from './views/Recipes/SearchRecipes/SearchPage.tsx';
import { SearchProvider } from './views/Recipes/SearchRecipes/SearchProvider.tsx';
import CreateRecipe from './views/Recipes/CreateRecipe/CreateRecipe.tsx';
import UpdateRecipe from './views/Recipes/UpdateRecipe/UpdateRecipe.tsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<HeaderView />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/users/login/auth/kakao" element={<AuthKaKao />} />
                    <Route path="/mypage" element={<Mypage />} />
                    <Route path="/recipes/all" element={<AllRecipesConatiner />} />
                    <Route path="/recipes/popular" element={<PopularRecipesContainer />} />
                    <Route
                        path="/recipes/search"
                        element={
                            <SearchProvider>
                                <SearchPage />
                            </SearchProvider>
                        }
                    />
                    <Route path="/recipes/recommended" element={<RecommendedRecipesContainer />} />
                    <Route path="/recipes/:id" element={<DetailRecipe />} />
                    <Route path="/recipes/create" element={<CreateRecipe />} />
                    <Route path="/recipes/update/:id" element={<UpdateRecipe />} />
                </Route>
            </Routes>
            <ReactQueryDevtools initialIsOpen={false} position="bottom" />
        </BrowserRouter>
    );
}

export default App;
