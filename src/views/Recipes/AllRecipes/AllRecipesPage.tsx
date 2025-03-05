import RecipeList from '../../../components/Recipe/RecipeList.js';
import useObserver from '../../../hooks/useObserver.js';
import { RecipeProps } from '../../../types/recipe.js';
import Loading from '../../../components/Loading/Loading.js';
import NoData from '../../../components/Loading/NoData.js';

interface RecipeLimitProps {
    limit?: number;
    recipes: RecipeProps[];
    fetchNextPage: () => void;
    isFetching: boolean;
    hasNextPage: boolean;
}

export default function AllRecipesPage({ limit, recipes, fetchNextPage, hasNextPage, isFetching }: RecipeLimitProps): JSX.Element {
    const handleObserver = async (entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting && !isFetching && hasNextPage) {
            await fetchNextPage();
        }
    };

    const target = useObserver(handleObserver);

    if (limit) {
        return <></>;
    }

    return (
        <>
            <RecipeList recipes={recipes} limit={limit} />
            {hasNextPage ? (
                <div ref={target}>
                    <Loading />
                </div>
            ) : (
                recipes.length > 0 && <NoData />
            )}
        </>
    );
}
