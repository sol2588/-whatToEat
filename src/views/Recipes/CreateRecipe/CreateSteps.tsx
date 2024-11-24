import { useRecipeCreate } from '../../../hooks/useRecipeCreate';
import { TextLabel } from '../../../styles/CreateTitle';
import DefaultImg from '../../../assets/img/uploadImg.png';
import colors from '../../../styles/colors';
import styled from 'styled-components';

export default function CreateSteps(): JSX.Element {
    const { handleAddStep, steps, setSteps, handleDeleteStep, handleImageChange, imagePreviews } = useRecipeCreate();

    return (
        <RecipeStepContainer>
            <TextLabel>조리단계</TextLabel>
            <RecipeStepsWrapper>
                {steps.map((step, index) => (
                    <RecipeStep key={index}>
                        <RecipeStepImage src={imagePreviews[index] || DefaultImg} alt={`Step ${index + 1}`} />

                        <StepInput
                            value={step.content}
                            onChange={(e) => {
                                const newSteps = [...steps];
                                newSteps[index].content = e.target.value;
                                setSteps(newSteps);
                            }}
                            placeholder={`Step ${index + 1}`}
                        />
                        <StepFileInput type="file" onChange={(e) => handleImageChange(e, index)} />
                        <DeleteButton onClick={() => handleDeleteStep(index)}>단계 삭제</DeleteButton>
                    </RecipeStep>
                ))}
                <AddButton onClick={handleAddStep}>단계 추가</AddButton>
            </RecipeStepsWrapper>
        </RecipeStepContainer>
    );
}

const RecipeStepContainer = styled.div`
    padding: 20px 40px;
    border-bottom: 20px solid #f9f9f9;
`;
const RecipeStepsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    gap: 16px;
`;

const RecipeStep = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
`;

const RecipeStepImage = styled.img`
    margin-bottom: 10px;
    height: 200px;
    object-fit: scale-down;
    object-position: center;
    border: 1px solid #ccc;
    border-radius: 8px;
`;

const StepInput = styled.textarea`
    font-size: 1rem;
    width: 100%;
    height: 40px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 10px;
`;

const StepFileInput = styled.input`
    padding: 20px 0;
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
    width: 100%;
    height: 40px;
    margin-top: 10px;
    font-size: 1.1rem;
    font-family: 'SUITE-Regular';
    &:hover {
        background-color: #c0392b;
    }
`;
