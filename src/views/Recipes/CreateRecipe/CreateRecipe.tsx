import styled from 'styled-components';
import { useRecipeCreate } from '../../../hooks/useRecipeCreate';
import DefaultImg from '../../../assets/img/defaultImg.jpeg';
import CustomSelect from '../../../ui/Select/CustomSelect';
import { timeOption } from '../../../common/options';
import withAuth from '../../../hooks/withAuth';
import colors from '../../../styles/colors';

const CreateRecipe: React.FC = () => {
    const {
        recipeName,
        setRecipeName,
        recipeLevel,
        setRecipeLevel,
        recipeCookingTime,
        setRecipeCookingTime,
        ingredients,
        setIngredients,
        handleAddIngredient,
        handleAddStep,
        handleSubmit,
        steps,
        setSteps,
        handleDeleteIngredient,
        handleDeleteStep,
        handleImageChange,
        imagePreviews,
        handleThumbnailChange,
        thumbnailPreview,
    } = useRecipeCreate();

    return (
        <RecipeWriteContainer>
            <RecipeNameInput value={recipeName} onChange={(e) => setRecipeName(e.target.value)} placeholder="레시피 이름을 입력하세요." />
            <RecipeContainer>
                <LeftContainer>
                    <TextLabel>조리단계</TextLabel>
                    <RecipeSteps>
                        {steps.map((step, index) => (
                            <RecipeStep key={index}>
                                <RecipeStepImage src={imagePreviews[index] || DefaultImg} alt={`Step ${index + 1}`} />
                                <RecipeStepContent>
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
                                </RecipeStepContent>
                            </RecipeStep>
                        ))}
                        <AddButton onClick={handleAddStep}>단계 추가</AddButton>
                    </RecipeSteps>
                </LeftContainer>

                <RightContainer>
                    <ThumbnailUploadBox>
                        <TextLabel>썸네일 이미지 업로드</TextLabel>
                        <ThumbnailPreviewContainer>
                            <ThumbnailPreview src={thumbnailPreview} alt="Thumbnail Preview" />
                            <ThumbnailFileInput type="file" onChange={(e) => handleThumbnailChange(e)} />
                        </ThumbnailPreviewContainer>
                    </ThumbnailUploadBox>

                    <RecipeSidebar>
                        <RecipeDetails>
                            <TextLabel>레시피 난이도</TextLabel>
                            <RecipeSelect value={recipeLevel} onChange={(e) => setRecipeLevel(e.target.value)}>
                                <option value="LOW">LOW</option>
                                <option value="MEDIUM">MEDIUM</option>
                                <option value="HIGH">HIGH</option>
                            </RecipeSelect>

                            <TextLabel>요리 시간 (분)</TextLabel>
                            <CustomStyledSelect>
                                <StyledCustomSelect
                                    id="recipeTime"
                                    options={timeOption}
                                    value={recipeCookingTime}
                                    label=""
                                    handleChange={(e) => setRecipeCookingTime(e.target.value)}
                                />
                            </CustomStyledSelect>
                        </RecipeDetails>

                        <RecipeIngredients>
                            <TextLabel>재료</TextLabel>
                            {ingredients.map((ingredient, index) => (
                                <Ingredient key={index}>
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
                                </Ingredient>
                            ))}
                            <AddButton onClick={handleAddIngredient}>재료 추가</AddButton>
                        </RecipeIngredients>

                        <SubmitButton onClick={(e) => handleSubmit(e)}>레시피 등록</SubmitButton>
                    </RecipeSidebar>
                </RightContainer>
            </RecipeContainer>
        </RecipeWriteContainer>
    );
};

const RecipeWriteContainer = styled.section`
    display: grid;
    grid-template-rows: 0.5fr 3fr;
    gap: 50px;
    padding: 50px;
    width: 80vw;
    margin: 0 auto;
`;

const RecipeContainer = styled.section`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 100px;
`;

//헤더부분
const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    width: 100%;
`;

const RecipeNameInput = styled.input`
    margin: 0 auto;
    font-size: 1.5rem;
    width: 70%;
    height: 60px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-family: 'SUITE-Regular';
`;

//컨텐츠부분
const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
`;

const TextLabel = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #333;
    margin-top: 30px;
    font-family: 'SUITE-Regular';
`;

const RecipeSteps = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const RecipeStep = styled.div`
    display: flex;
    flex-direction: column;
    width: 48%;
`;

const RecipeStepImage = styled.img`
    width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: center;
    border: 1px solid #ccc;
`;

const RecipeStepContent = styled.div`
    margin-top: 10px;
`;

const StepInput = styled.textarea`
    font-size: 1rem;
    width: 100%;
    height: 100px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 10px;
`;

const StepFileInput = styled.input`
    padding: 20px 0;
`;

const RecipeSidebar = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: sticky;
    top: 50px;
    flex-shrink: 0;
    margin-top: 50px;
`;

const RecipeDetails = styled.div`
    background: #fff;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const RecipeSelect = styled.select`
    width: 100%;
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 20px;
    font-size: 1rem;
`;

const RecipeInput = styled.input`
    font-size: 1rem;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 20px;
`;

const RecipeIngredients = styled.div`
    background: #fff;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const Ingredient = styled.div`
    margin-bottom: 10px;
`;

const AddButton = styled.button`
    padding: 10px 20px;
    background-color: lightgray;
    color: black;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    height: 50px;
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
    margin-top: 10px;
    font-size: 1.1rem;
    font-family: 'SUITE-Regular';
    &:hover {
        background-color: #c0392b;
    }
`;

const SubmitButton = styled.button`
    padding: 15px;
    font-size: 16px;
    background-color: lightgray;
    border: none;
    color: black;
    border-radius: 8px;
    font-family: 'SUITE-Regular';
    cursor: pointer;
    &:hover {
        background-color: ${colors[400]};
    }
`;

const CustomStyledSelect = styled.div`
    width: 100%;
    height: 50px;
    padding: 0;
    border: none;
    border-radius: 8px;
    margin-bottom: 20px;
    font-size: 1rem;
    select {
        width: 100%;
        height: 100%;
        border: none;
        background-color: white;
        border-radius: 8px;
        outline: none;
        font-family: 'SUITE-Regular';
        font-size: 1rem;
    }
`;

const ThumbnailUploadBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    padding: 40px;
`;

const ThumbnailPreviewContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ThumbnailPreview = styled.img`
    width: 100%;
    height: 200px;
    object-fit: contain;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    border-radius: 8px;
`;

const ThumbnailFileInput = styled.input`
    width: 50%;
    margin-top: 20px;
`;

const StyledCustomSelect = styled(CustomSelect)`
    height: 50px;
    font-size: 1rem;
`;

const CreateRecipeWithAuth = withAuth(CreateRecipe);
export default CreateRecipeWithAuth;
