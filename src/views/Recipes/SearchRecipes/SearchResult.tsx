import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useFilterContext } from '../../../hooks/useFilterContext.js';
import { useGetRecipes } from '../../../hooks/useGetRecipes.js';
import useObserver from '../../../hooks/useObserver.js';
import { showModal } from '../../../redux/reducer/modalSlice.js';
import { convertLevel, convertTime } from '../../../common/convertFunc.js';
import { RecipeProps } from '../../../types/recipe.js';
import RecipeList from '../../../components/Recipe/RecipeList.js';
import Loading from '../../../components/Loading/Loading.js';
import NoData from '../../../components/Loading/NoData.js';

export default function SearchResult(): JSX.Element {
    const dispatch = useDispatch();
    const { searchParams, recipes, setRecipes } = useFilterContext();
    const { refetch, data, isFetching, hasNextPage, fetchNextPage } = useGetRecipes(
        'search',
        searchParams.ingredientsList,
        searchParams.time,
        searchParams.level,
    );

    useEffect(() => {
        if (searchParams.canFetchData) {
            const getRecipes = async () => await refetch();
            getRecipes();
            if (!data?.pages[0].totalRecipes) {
                dispatch(showModal({ isOpen: true, content: '일치하는 레시피가 없습니다. 다른 조건으로 검색해주세요.', onConfirm: null }));
            }
            setRecipes(
                data?.pages.flatMap((page) =>
                    page.recipes.map((recipe: RecipeProps) => ({
                        ...recipe,
                        recipeLevel: convertLevel(recipe.recipeLevel),
                        recipeCookingTime: convertTime(recipe.recipeCookingTime),
                    })),
                ) || [],
            );
        }
    }, [data, refetch, searchParams]);

    const handleObserver = async (entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting && !isFetching && hasNextPage) {
            await fetchNextPage();
        }
    };
    const target = useObserver(handleObserver);

    if (recipes.length == 0) {
        return <></>;
    }

    return (
        <>
            {searchParams.isSearching && (
                <>
                    <RecipeList recipes={recipes} />
                    {hasNextPage ? (
                        <div ref={target}>
                            <Loading />
                        </div>
                    ) : (
                        <NoData />
                    )}
                </>
            )}
        </>
    );
}
