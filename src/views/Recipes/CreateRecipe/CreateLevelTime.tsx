import { useRecipeCreate } from '../../../hooks/useRecipeCreate';
import { timeOption } from '../../../common/options';
import { TextLabel } from '../../../styles/CreateTitle';
import CustomSelect from '../../../ui/Select/CustomSelect';
import styled from 'styled-components';

export default function CreateLevelTime(): JSX.Element {
    const { recipeLevel, setRecipeLevel, recipeCookingTime, setRecipeCookingTime } = useRecipeCreate();

    return (
        <RecipeDetails>
            <div>
                <TextLabel>레시피 난이도</TextLabel>
                <RecipeSelect value={recipeLevel} onChange={(e) => setRecipeLevel(e.target.value)}>
                    <option value="LOW">하</option>
                    <option value="MEDIUM">중</option>
                    <option value="HIGH">상</option>
                </RecipeSelect>
            </div>
            <div>
                <TextLabel>요리 시간 (분)</TextLabel>
                <CustomSelect
                    id="recipeTime"
                    options={timeOption}
                    value={recipeCookingTime}
                    label=""
                    handleChange={(e) => setRecipeCookingTime(e.target.value)}
                />
            </div>
        </RecipeDetails>
    );
}

const RecipeDetails = styled.div`
    width: 100%;
    background: #fff;
    padding: 20px 40px;
    border-radius: 8px;
    border-bottom: 20px solid #f9f9f9;
    display: flex;
    gap: 16px;
    justify-content: space-between;
`;

const RecipeSelect = styled.select`
    min-width: 200px;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 20px;
    font-size: 1rem;

    @media screen and (max-width: 768px) {
        min-width: 130px;
    }
`;
