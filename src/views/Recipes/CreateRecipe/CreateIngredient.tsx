import { useRecipeCreate } from '../../../hooks/useRecipeCreate';
import { TextLabel } from '../../../styles/CreateTitle';
import colors from '../../../styles/colors';
import styled from 'styled-components';

export default function CreateIngredient(): JSX.Element {
    const { ingredients, setIngredients, handleAddIngredient, handleDeleteIngredient } = useRecipeCreate();

    return (
        <RecipeIngredientsWrapper>
            <TextLabel>재료</TextLabel>
            <IngredientList>
                {ingredients.map((ingredient, index) => (
                    <IngredientItem key={index}>
                        <RecipeInput
                            value={ingredient.ingredientName}
                            onChange={(e) => {
                                const newIngredients = [...ingredients];
                                newIngredients[index].ingredientName = e.target.value;
                                setIngredients(newIngredients);
                            }}
                            placeholder="재료 이름"
                        />
                        <RecipeInput
                            value={ingredient.ingredientQuantity}
                            onChange={(e) => {
                                const newIngredients = [...ingredients];
                                newIngredients[index].ingredientQuantity = e.target.value;
                                setIngredients(newIngredients);
                            }}
                            placeholder="재료 양"
                        />
                        <DeleteButton onClick={() => handleDeleteIngredient(index)}>재료 삭제</DeleteButton>
                    </IngredientItem>
                ))}
            </IngredientList>
            <AddButton onClick={handleAddIngredient}>재료 추가</AddButton>
        </RecipeIngredientsWrapper>
    );
}

const RecipeIngredientsWrapper = styled.div`
    background: #fff;
    padding: 20px 40px;
    border-radius: 8px;
    border-bottom: 20px solid #f9f9f9;
`;
const IngredientList = styled.div`
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;
const IngredientItem = styled.div`
    display: flex;
    flex-direction: column;
`;
const RecipeInput = styled.input`
    font-size: 1rem;
    width: 100px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 8px;
`;
const AddButton = styled.button`
    padding: 10px 20px;
    background-color: lightgray;
    color: black;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    height: 40px;
    font-size: 1.1rem;
    font-family: 'SUITE-Regular';
    &:hover {
        background-color: ${colors[400]};
    }
`;

const DeleteButton = styled.button`
    padding: 8px 16px;
    background-color: #e74c3c;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    width: 100px;
    height: 40px;
    margin-top: 10px;
    font-size: 1.1rem;
    font-family: 'SUITE-Regular';
    &:hover {
        background-color: #c0392b;
    }
`;
