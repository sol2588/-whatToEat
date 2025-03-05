import { Suspense } from 'react';
import AllRecipesData from './AllRecipesData';
import CardSkeleton from '../../../components/Skeleton/CardSkeleton';

export interface RecipeLimitProps {
    limit?: number;
}

export default function AllRecipesConatiner({ limit }: RecipeLimitProps) {
    return (
        <Suspense fallback={<CardSkeleton />}>
            <AllRecipesData limit={limit} />;
        </Suspense>
    );
}
