import { useEffect, ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import CommentRating from './CommentRating';
import CommentsContent from './CommentsContent';
import CommentEditBtn from './CommentEditBtn';
import styled from 'styled-components';

interface UpdateProps {
    commentId: number;
    comment: string;
    rating: number;
}
interface CommentDataProps {
    commentAuthor: string;
    commentContent: string;
    commentId: number;
    rating: number;
    createdAt: string;
    updatedAt: string;
}
interface CommentsListProps {
    isEditing: boolean;
    handleClickEdit: ({ comments, commentId, commentRate }: { comments: string; commentId: number; commentRate: number }) => void;
    commentId?: number;
    updateRate?: number;
    updateComment: string;
    commentDataList: CommentDataProps[];
    fetchCommentHandler: (id: string) => Promise<void>;
    updateCommentHandler: ({ commentId, comment, rating }: UpdateProps, recipeId: string) => Promise<void>;
    deleteCommentHandler: (commentId: number, recipeId: string) => Promise<void>;
    handleUpdateComment: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    handleUpdateRate: (rate: number) => void;
}
// ! commentId! 강제로 넣어놓은 부분 데이터 연동 후 확인 & 다른 방식으로 구현할것
export default function CommentList({
    isEditing,
    handleClickEdit,
    commentId,
    updateRate,
    updateComment,
    commentDataList,
    fetchCommentHandler,
    updateCommentHandler,
    deleteCommentHandler,
    handleUpdateComment,
    handleUpdateRate,
}: CommentsListProps): JSX.Element {
    const { id } = useParams<{ id: string }>();

    // fetchCommentsList : recipeId 기준 코멘트 조회 & recipeId가 바뀔때마다 fetchCommentHandler 호출
    useEffect(() => {
        console.log('commentList : ', commentDataList);
        if (id) {
            fetchCommentHandler(id);
        }
    }, []);

    return (
        <>
            <S_CommentsContainer>
                <h4>Comments</h4>
                {commentDataList.map((comment) => (
                    <S_CommentsWrapper>
                        <S_ReviewerFigure>
                            <img src="" alt="유저이미지" />
                            <S_ReviewerFigcaption date={false}>{comment.commentAuthor}</S_ReviewerFigcaption>
                            <S_ReviewerFigcaption date={true}>{comment.createdAt.split('T')[0]}</S_ReviewerFigcaption>
                        </S_ReviewerFigure>
                        <S_CommentsDataWrapper>
                            <CommentsContent
                                isEditing={isEditing}
                                reviewId={comment.commentId}
                                commentId={commentId}
                                content={comment.commentContent}
                                updateComment={updateComment}
                                handleUpdateComment={handleUpdateComment}
                            />
                            <S_CommentsSelectWrapper>
                                <CommentRating
                                    isEditing={isEditing}
                                    commentId={commentId}
                                    reviewId={comment.commentId}
                                    rating={comment.rating}
                                    updateRate={updateRate ?? 0}
                                    handleUpdateRate={handleUpdateRate}
                                />
                                <CommentEditBtn
                                    isEditing={isEditing}
                                    commentId={commentId}
                                    updateRate={updateRate ?? 0}
                                    updateComment={updateComment}
                                    handleClickEdit={handleClickEdit}
                                    updateCommentHandler={updateCommentHandler}
                                    deleteCommentHandler={deleteCommentHandler}
                                    review={comment}
                                    recipeId={id}
                                />
                            </S_CommentsSelectWrapper>
                        </S_CommentsDataWrapper>
                    </S_CommentsWrapper>
                ))}
            </S_CommentsContainer>
        </>
    );
}
const S_CommentsContainer = styled.section`
    margin-top: 36px;
    h4 {
        font-size: 24px;
        font-weight: 500;
    }
`;
const S_CommentsWrapper = styled.div`
    padding: 16px;
    height: auto;
`;
const S_ReviewerFigure = styled.figure`
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;

    img {
        display: inline-block;
        width: 50px;
        height: 50px;
        border: 2px solid;
        border-radius: 50%;
    }
`;
const S_ReviewerFigcaption = styled.figcaption<{ date: boolean }>`
    margin: 16px 0 0px;
    color: ${(props) => (props.date ? '#575757' : '#000')};
`;
const S_CommentsDataWrapper = styled.div`
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const S_CommentsSelectWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
