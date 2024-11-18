import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { CommentsType, CommentUpdateType } from '../../types/comment';
import styled from 'styled-components';

interface EditBtnProps {
    recipeId?: number;
    review: CommentsType;
    isEditing: boolean;
    commentId?: number;
    updateRate: number;
    updateComment: string;
    handleClickEdit: ({ comments, commentId, commentRate }: { comments: string; commentId: number; commentRate: number }) => void;
    updateCommentHandler: ({ commentId, comment, rating }: CommentUpdateType, recipeId: number) => Promise<void>;
    deleteCommentHandler: (commentId: number, recipeId: number) => Promise<void>;
}

export default function CommentEditBtn({
    recipeId,
    review,
    isEditing,
    commentId,
    updateRate,
    updateComment,
    handleClickEdit,
    updateCommentHandler,
    deleteCommentHandler,
}: EditBtnProps) {
    const nickname = useSelector((state: RootState) => state.user.value.nickname);

    return (
        <>
            {isEditing
                ? commentId == review.commentId && (
                      <>
                          {commentId !== undefined && updateRate != undefined && recipeId !== undefined && (
                              <S_EditDoneBtn
                                  onClick={() =>
                                      updateCommentHandler(
                                          {
                                              commentId: commentId,
                                              comment: updateComment,
                                              rating: updateRate,
                                          },
                                          recipeId,
                                      )
                                  }
                              >
                                  완료
                              </S_EditDoneBtn>
                          )}
                      </>
                  )
                : nickname == review.commentAuthor && (
                      <S_ButtonWrapper>
                          <S_EditBtn
                              onClick={() => {
                                  handleClickEdit({
                                      comments: review.commentContent,
                                      commentId: review.commentId,
                                      commentRate: review.rating,
                                  });
                              }}
                          >
                              수정
                          </S_EditBtn>
                          {recipeId !== undefined && (
                              <S_DeleteBtn
                                  onClick={() => {
                                      deleteCommentHandler(review.commentId, recipeId);
                                  }}
                              >
                                  삭제
                              </S_DeleteBtn>
                          )}
                      </S_ButtonWrapper>
                  )}
        </>
    );
}

const S_EditBtn = styled.button`
    margin-right: 8px;
    font-size: 12px;
    width: 40px;
    height: 25px;
    border: none;
    border-radius: 8px;
    color: #fff;
    background-color: #0173f6;
    cursor: pointer;
`;
const S_ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
`;
const S_DeleteBtn = styled.button`
    font-size: 12px;
    width: 40px;
    height: 25px;
    border: none;
    border-radius: 8px;
    color: #fff;
    background-color: #ff6b6b;
    cursor: pointer;
`;
const S_EditDoneBtn = styled.button`
    font-size: 12px;
    width: 40px;
    height: 25px;
    border: none;
    border-radius: 8px;
    color: #fff;
    background-color: #0173f6;
    cursor: pointer;
`;
