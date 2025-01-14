import { http, HttpResponse } from 'msw';
import { recipes } from './data/recipes.js';
import { recipeManuals } from './data/recipeManual.js';
import { recipeIngredients } from './data/recipeIngredients.js';
import { RecipeProps, ManualsProps, IngredientsProps } from '../types/recipe.js';

const PAGE_SIZE = 15;

// 전체레시피 조회
export const recipeHandlers = [
    http.get(`${import.meta.env.VITE_BASE_URL}/recipes`, ({ request }) => {
        const url = new URL(request.url);
        const page = Number(url.searchParams.get('page')) || 0;

        const allData = recipes.slice(page * PAGE_SIZE, Math.min((page + 1) * PAGE_SIZE, recipes.length));

        return HttpResponse.json({
            code: 'OK',
            message: '전체 레시피',
            data: {
                recipes: allData,
                totalRecipes: 376,
            },
        });
    }),

    // 인기레시피 조회
    http.get(`${import.meta.env.VITE_BASE_URL}/recipes/popular`, ({ request }) => {
        const url = new URL(request.url);
        const page = Number(url.searchParams.get('page')) || 0;
        const popular = [...recipes]
            .sort((a, b) => b.recipeRating - a.recipeRating)
            .slice(page * PAGE_SIZE, Math.min((page + 1) * PAGE_SIZE, recipes.length));

        return HttpResponse.json({
            code: 'OK',
            message: '인기 레시피',
            data: {
                recipes: popular,
                totalRecipes: 376,
            },
        });
    }),

    // 추천레시피 조회
    http.get(`${import.meta.env.VITE_BASE_URL}/recipes/recommended`, () => {
        // randomId를 배열로 생성
        const getRandomId = () => {
            const idArray: number[] = [];
            while (idArray.length < 3) {
                let id = Math.floor(Math.random() * 376);
                if (idArray.includes(id)) continue;
                idArray.push(id);
            }
            return idArray;
        };
        // randomId를 기준으로 randomRecipes를 새로 생성
        const randomRecipes = getRandomId().reduce((acc: RecipeProps[], cur) => {
            const result: RecipeProps[] = recipes.filter((recipe) => recipe.recipeId == cur);
            acc.push(...result);
            return acc;
        }, []);

        return HttpResponse.json({
            code: 'OK',
            message: '인기레시피',
            data: {
                recipes: randomRecipes,
            },
        });
    }),

    // 검색레시피 조회
    http.get(`${import.meta.env.VITE_BASE_URL}/recipes/search`, ({ request }) => {
        // 검색어 / 난이도 / 소요시간에 따른 레시피 조회
        try {
            const url = new URL(request.url);
            const page = Number(url.searchParams.get('page')) || 0;

            const filtersList = {
                ingredient: url.searchParams.getAll('ingredientName'),
                time: url.searchParams.get('recipeCookingTime'),
                level: url.searchParams.get('recipeLevel'),
            };

            const filterByIngredients =
                filtersList.ingredient.length == 0
                    ? null
                    : recipeIngredients.filter((recipeIng) => filtersList.ingredient.some((ing) => recipeIng.recipeName.includes(ing)));

            const findRecipes = recipes.filter((recipe) => {
                const filterIngre = filtersList.ingredient.length == 0 || filterByIngredients?.some((ingre) => ingre.recipeId == recipe.recipeId);
                const filterTime = !filtersList.time || recipe.recipeCookingTime == filtersList.time;
                const filterLevel = !filtersList.level || recipe.recipeLevel == filtersList.level;

                return filterIngre && filterTime && filterLevel;
            });

            const searched = findRecipes?.slice(page * PAGE_SIZE, Math.min((page + 1) * PAGE_SIZE, findRecipes.length));

            return HttpResponse.json({
                code: 'OK',
                message: '검색한 레시피 조회',
                data: {
                    recipes: searched,
                    totalRecipes: findRecipes.length,
                },
            });
        } catch (err) {
            return HttpResponse.json({
                message: '일치하는 레시피가 없습니다. 다른 조건으로 검색해주시기 바랍니다.',
            });
        }
    }),

    // 특정레시피 조회
    http.get(`${import.meta.env.VITE_BASE_URL}/recipes/:recipeId`, ({ params }) => {
        const { recipeId } = params;
        const combineRecipeData = (id: number, recipes: RecipeProps[], manuals: ManualsProps[], ingredients: IngredientsProps[]) => {
            const targetRecipe = recipes.find((recipe) => recipe.recipeId == id);
            const recipesManuals = manuals
                .filter((manual) => manual.recipeId == id)
                .map(({ mContent, mPicture }) => ({ recipeOrderContent: mContent, recipeOrderImage: mPicture }));
            const recipeIngredients = ingredients
                .filter((ingre) => ingre.recipeId == id)
                .map(({ recipeName, recipeQuantity }) => ({ ingredientName: recipeName, ingredientQuantity: recipeQuantity }));
            return { ...targetRecipe, recipesManuals, recipeIngredients };
        };

        return HttpResponse.json({
            code: 'OK',
            message: '레시피 상세 페이지',
            data: combineRecipeData(Number(recipeId), recipes, recipeManuals, recipeIngredients),
        });
    }),
];
