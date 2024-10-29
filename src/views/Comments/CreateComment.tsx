import { FormEvent, ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import { MdStar, MdStarBorder } from 'react-icons/md';
import styled from 'styled-components';
import colors from '../../styles/colors';

interface CreateHandlerProps {
    recipeId: number;
    comment: string;
    rating: number;
}
interface CreateProps {
    createdRate: number;
    createdComment: string;
    createCommentHandler: (e: FormEvent<HTMLFormElement>, { recipeId, comment, rating }: CreateHandlerProps) => Promise<void>;
    handleCreateComment: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    handleCreateRate: (rate: number) => void;
}

export default function CreateComment({
    createdRate,
    createdComment,
    createCommentHandler,
    handleCreateComment,
    handleCreateRate,
}: CreateProps): JSX.Element {
    const { id } = useParams();

    return (
        <S_ReviewContainer>
            <h4>Add comment</h4>
            <S_ReviewForm
                method="post"
                onSubmit={(e) => createCommentHandler(e, { recipeId: Number(id), comment: createdComment, rating: createdRate })}
            >
                <textarea name="comments" rows={3} value={createdComment} onChange={handleCreateComment} placeholder="Add comment...."></textarea>
                <S_ReviewSubmit>
                    <S_ReviewRateOption>
                        <span>평점 선택</span>
                        <ReviewRating>
                            {Array(5)
                                .fill(0)
                                .map((_, idx) => {
                                    return createdRate >= idx + 1 ? (
                                        <MdStar key={idx} onClick={() => handleCreateRate(idx + 1)} />
                                    ) : (
                                        <MdStarBorder key={idx} onClick={() => handleCreateRate(idx + 1)} />
                                    );
                                })}
                        </ReviewRating>
                    </S_ReviewRateOption>
                    <S_SubmitBtn type="submit">등록하기</S_SubmitBtn>
                </S_ReviewSubmit>
            </S_ReviewForm>
        </S_ReviewContainer>
    );
}

const S_ReviewContainer = styled.section`
    margin: 44px 0px;

    h4 {
        font-size: 24px;
        font-weight: 500;
    }
`;

const S_ReviewForm = styled.form`
    margin: 16px 0px;
    padding: 16px;
    height: 70%;
    background-color: #f2f2f2;
    border-radius: 8px;
    textarea {
        padding: 10px;
        width: 100%;
        background-color: transparent;
        border: 1px solid #656565;
        border-radius: 8px;
        outline: none;
    }
`;
const S_ReviewSubmit = styled.div`
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const S_ReviewRateOption = styled.div`
    margin-top: 8px;

    span {
        margin-right: 8px;
    }
`;
const ReviewRating = styled.span`
    cursor: pointer;
    color: #ff9900;
`;
const S_SubmitBtn = styled.button`
    padding: 8px 20px;
    border-radius: 20px;
    border: none;
    outline: none;
    color: #fff;
    background-color: ${colors[300]};
    cursor: pointer;
`;
