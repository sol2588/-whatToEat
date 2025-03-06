import { Suspense } from 'react';
import RecommendedRecipesPage from './RecommendedRecipesPage';
import CardSkeleton from '../../../components/Skeleton/CardSkeleton';

export default function RecommendedRecipesContainer() {
    return (
        <Suspense fallback={<CardSkeleton limit={3} />}>
            <RecommendedRecipesPage />
        </Suspense>
    );
}
