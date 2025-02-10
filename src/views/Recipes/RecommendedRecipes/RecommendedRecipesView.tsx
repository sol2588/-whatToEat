import { Suspense } from 'react';
import RecommendedRecipes from './RecommendedRecipes';
import CardSkeleton from '../../../components/Skeleton/CardSkeleton';

export default function RecommendedRecipesView() {
    return (
        <Suspense fallback={<CardSkeleton />}>
            <RecommendedRecipes />
        </Suspense>
    );
}
