import { useRecipeCreate } from '../../../hooks/useRecipeCreate';
import CreateTitleThumbnail from './CreateTitleThumbnail';
import CreateLevelTime from './CreateLevelTime';
import CreateIngredient from './CreateIngredient';
import CreateSteps from './CreateSteps';
import withAuth from '../../../hooks/withAuth';
import colors from '../../../styles/colors';
import styled from 'styled-components';

function CreateRecipe(): JSX.Element {
    const { handleSubmit } = useRecipeCreate();

    return (
        <RecipeWriteContainer>
            <RecipeWriteWrapper>
                <CreateTitleThumbnail />
                <CreateLevelTime />
                <CreateIngredient />
                <CreateSteps />
                <SubmitButton onClick={(e) => handleSubmit(e)}>레시피 등록</SubmitButton>
            </RecipeWriteWrapper>
        </RecipeWriteContainer>
    );
}

const RecipeWriteContainer = styled.section`
    width: 100vw;
    height: 100%;
    background-color: #f9f9f9;
    padding-bottom: 60px;
`;
const RecipeWriteWrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
    background-color: #fff;
`;

const SubmitButton = styled.button`
    width: 100%;
    padding: 15px;
    font-size: 16px;
    font-family: 'SUITE-Regular';
    color: black;
    background-color: lightgray;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
        background-color: ${colors[400]};
        color: #fff;
    }
`;

export default withAuth(CreateRecipe);
