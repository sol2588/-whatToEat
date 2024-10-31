import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import styled from 'styled-components';

interface Props {
    commentAuthor: string;
    commentContent: string;
    commentId: number;
    rating: number;
    createdAt: string;
    updatedAt: string;
}
interface UpdateProps {
    commentId: number;
    comment: string;
    rating: number;
}
interface EditBtnProps {
    recipeId?: string;
    review: Props;
    isEditing: boolean;
    commentId?: number;
    updateRate: number;
    updateComment: string;
    handleClickEdit: ({ comments, commentId, commentRate }: { comments: string; commentId: number; commentRate: number }) => void;
    updateCommentHandler: ({ commentId, comment, rating }: UpdateProps, recipeId: string) => Promise<void>;
    deleteCommentHandler: (commentId: number, recipeId: string) => Promise<void>;
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
    font-size: 16px;
    width: 50px;
    height: 30px;
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
