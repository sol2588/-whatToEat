import { useEffect, ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import CommentRating from './CommentRating';
import CommentsContent from './CommentsContent';
import CommentEditBtn from './CommentEditBtn';
import { CommentsType, CommentUpdateType } from '../../types/comment';
import styled from 'styled-components';
import chef from '../../assets/img/chef-hat.png';

interface CommentsListProps {
    isEditing: boolean;
    handleClickEdit: ({ comments, commentId, commentRate }: { comments: string; commentId: number; commentRate: number }) => void;
    commentId?: number;
    updateRate?: number;
    updateComment: string;
    commentDataList: CommentsType[];
    fetchCommentHandler: (id: number) => Promise<void>;
    updateCommentHandler: ({ commentId, comment, rating }: CommentUpdateType, recipeId: number) => Promise<void>;
    deleteCommentHandler: (commentId: number, recipeId: number) => Promise<void>;
    handleUpdateComment: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    handleUpdateRate: (rate: number) => void;
}

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
    const { id } = useParams();
    const numId = Number(id);

    // fetchCommentsList : recipeId 기준 코멘트 조회 & recipeId가 바뀔때마다 fetchCommentHandler 호출
    useEffect(() => {
        if (numId) {
            fetchCommentHandler(numId);
        }
    }, []);

    return (
        <>
            <S_CommentsContainer>
                <h4>Comments</h4>
                {commentDataList.length > 0 ? (
                    commentDataList.map((comment) => (
                        <S_CommentsWrapper>
                            <S_CommentsSelectWrapper>
                                <S_ReviewerFigure>
                                    <img src={chef} alt="워터마크" />
                                    <S_ReviewerFigcaption date={false}>{comment.commentAuthor}</S_ReviewerFigcaption>
                                    <S_ReviewerFigcaption date={true}>{comment.createdAt.toString().split('T')[0]}</S_ReviewerFigcaption>
                                    <CommentRating
                                        isEditing={isEditing}
                                        commentId={commentId}
                                        reviewId={comment.commentId}
                                        rating={comment.rating}
                                        updateRate={updateRate ?? 0}
                                        handleUpdateRate={handleUpdateRate}
                                    />
                                </S_ReviewerFigure>
                                <CommentEditBtn
                                    isEditing={isEditing}
                                    commentId={commentId}
                                    updateRate={updateRate ?? 0}
                                    updateComment={updateComment}
                                    handleClickEdit={handleClickEdit}
                                    updateCommentHandler={updateCommentHandler}
                                    deleteCommentHandler={deleteCommentHandler}
                                    review={comment}
                                    recipeId={numId}
                                />
                            </S_CommentsSelectWrapper>
                            <S_CommentsDataWrapper>
                                <CommentsContent
                                    isEditing={isEditing}
                                    reviewId={comment.commentId}
                                    commentId={commentId}
                                    content={comment.commentContent}
                                    updateComment={updateComment}
                                    handleUpdateComment={handleUpdateComment}
                                />
                            </S_CommentsDataWrapper>
                        </S_CommentsWrapper>
                    ))
                ) : (
                    <S_CommentsEmpty>아직 남겨진 Comments가 없습니다. 첫번째로 Comment를 달아주세요!</S_CommentsEmpty>
                )}
            </S_CommentsContainer>
        </>
    );
}
const S_CommentsContainer = styled.section`
    padding: 0 0 36px;

    h4 {
        font-size: 24px;
        font-weight: 500;
    }
`;
const S_CommentsWrapper = styled.div`
    height: auto;
    margin-top: 16px;
`;
const S_ReviewerFigure = styled.figure`
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: flex-start;

    img {
        display: inline-block;
        width: 50px;
        height: 50px;
        border: 1px solid lightgray;
        border-radius: 50%;
    }
`;
const S_ReviewerFigcaption = styled.figcaption<{ date: boolean }>`
    margin: 0;
    color: ${(props) => (props.date ? '#575757' : '#000')};
`;
const S_CommentsDataWrapper = styled.div`
    margin-left: 56px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const S_CommentsSelectWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
const S_CommentsEmpty = styled.div`
    font-size: 18px;
    margin: 16px 0;
`;
