import SearchResultContainer from './SearchResultContainer.js';
import SearchFilter from './SearchFilter.js';
import { useFilterContext } from '../../../hooks/useFilterContext.js';
import { S_RecipeContainer } from '../../../styles/RecipeContainer.js';
import styled from 'styled-components';

export default function SearchPage(): JSX.Element {
    const { searchParams } = useFilterContext();

    return (
        <S_RecipeContainer>
            <S_ConditionContainer>
                <SearchFilter />
                {searchParams.isSearching && <SearchResultContainer />}
            </S_ConditionContainer>
        </S_RecipeContainer>
    );
}
const S_ConditionContainer = styled.div`
    padding: 30px;
`;
