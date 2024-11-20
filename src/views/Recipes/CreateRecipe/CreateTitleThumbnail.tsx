import styled from 'styled-components';
import { useRecipeCreate } from '../../../hooks/useRecipeCreate';
import { TextLabel } from '../../../styles/CreateTitle';

export default function CreateTitleThumbnail(): JSX.Element {
    const { thumbnailPreview, recipeName, setRecipeName, handleThumbnailChange } = useRecipeCreate();

    return (
        <>
            <RecipeWriteTitle>
                <TextLabel>레시피 제목</TextLabel>
                <RecipeNameInput value={recipeName} onChange={(e) => setRecipeName(e.target.value)} placeholder="레시피 이름을 입력하세요." />
            </RecipeWriteTitle>

            <ThumbnailWrapper>
                <TextLabel>썸네일 이미지</TextLabel>
                <img src={thumbnailPreview} alt="Thumbnail Preview" />
                <input type="file" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleThumbnailChange(e)} />
            </ThumbnailWrapper>
        </>
    );
}

const RecipeWriteTitle = styled.div`
    width: 100%;
    padding: 20px 40px;
    border-bottom: 20px solid #f9f9f9;
`;
const RecipeNameInput = styled.input`
    width: 100%;
    height: 50px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-family: 'SUITE-Regular';
`;

const ThumbnailWrapper = styled.div`
    width: 100%;
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    border-bottom: 20px solid #f9f9f9;

    img {
        width: 100%;
        height: 200px;
        object-fit: contain;
        border: 1px solid #ccc;
        margin-bottom: 10px;
        border-radius: 8px;
    }

    input {
        width: 50%;
        margin-top: 20px;
    }
`;
