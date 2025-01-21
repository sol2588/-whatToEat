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

    if (recipes.length == 0) {
        return <></>;
    }
    console.log(recipes);

    return (
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
    );
}
