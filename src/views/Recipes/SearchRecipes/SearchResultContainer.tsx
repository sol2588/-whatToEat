import { Suspense } from 'react';
import CardSkeleton from '../../../components/Skeleton/CardSkeleton';
import SearchResult from './SearchResult';

export default function SearchResultContainer() {
    return (
        <Suspense fallback={<CardSkeleton />}>
            <SearchResult />
        </Suspense>
    );
}
