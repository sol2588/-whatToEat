import RecipeList from '../../../components/Recipe/RecipeList';
import useObserver from '../../../hooks/useObserver.js';
import Loading from '../../../components/Loading/Loading.js';
import NoData from '../../../components/Loading/NoData.js';
import { RecipeProps } from '../../../types/recipe.js';

interface SearchResultProps {
    recipes: RecipeProps[];
    isFetching: boolean;
    fetchNextPage: () => void;
    hasNextPage: boolean;
}

export function SearchResult({ recipes, isFetching, hasNextPage, fetchNextPage }: SearchResultProps): JSX.Element {
    const handleObserver = async (entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting && !isFetching && hasNextPage) {
            await fetchNextPage();
        }
    };
    const target = useObserver(handleObserver);

    return (
        <>
            <RecipeList recipes={recipes} />
            {/* 검색전일때 Loading 표시 렌더되지 않게 처리 */}
            {recipes.length > 0 && hasNextPage ? (
                <div ref={target}>
                    <Loading />
                </div>
            ) : (
                // 다음페이지가 없을때 NoData 렌더
                !hasNextPage && <NoData />
            )}
        </>
    );
}
