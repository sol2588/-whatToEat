import RecipeList from '../../../components/Recipe/RecipeList.js';
import useObserver from '../../../hooks/useObserver.js';
import Loading from '../../../components/Loading/Loading.js';
import { RecipeProps } from '../../../types/recipe.js';
import NoData from '../../../components/Loading/NoData.js';

interface RecipeLimitProps {
    recipes: RecipeProps[];
    fetchNextPage: () => void;
    isFetching: boolean;
    hasNextPage: boolean;
}

export default function PopularRecipesPage({ hasNextPage, recipes, fetchNextPage, isFetching }: RecipeLimitProps): JSX.Element {
    const handleObserver = async (entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting && !isFetching && hasNextPage) {
            await fetchNextPage();
        }
    };

    const target = useObserver(handleObserver);

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
