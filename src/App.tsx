import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './views/Login/Login.tsx';
import Signup from './views/Signup/Signup.tsx';
import Mypage from './views/Mypage/Mypage.tsx';
import HeaderView from './components/Header/HeaderView.tsx';
import Home from './views/Home/Home.tsx';
import AllRecipesView from './views/Recipes/AllRecipes/AllRecipesView.tsx';
import PopularRecipesView from './views/Recipes/PopularRecipes/PopularRecipesView.tsx';
import RecommendedRecipesView from './views/Recipes/RecommendedRecipes/RecommendedRecipesView.tsx';
import DetailRecipe from './views/Recipes/DetailRecipe/DetailRecipe.tsx';
import AuthKaKao from './components/AuthKaKao.tsx';
import SearchCondition from './views/Recipes/SearchRecipes/SearchCondition.tsx';
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
                    <Route path="/recipes/all" element={<AllRecipesView />} />
                    <Route path="/recipes/popular" element={<PopularRecipesView />} />
                    <Route path="/recipes/search" element={<SearchCondition />} />
                    <Route path="/recipes/recommended" element={<RecommendedRecipesView />} />
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
