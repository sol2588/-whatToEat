import { Suspense } from 'react';
import PopularRecipeData from './PopularRecipeData.js';
import CardSkeleton from '../../../components/Skeleton/CardSkeleton.js';

export default function PopularRecipesConatiner(): JSX.Element {
    return (
        <Suspense fallback={<CardSkeleton />}>
            <PopularRecipeData />
        </Suspense>
    );
}
