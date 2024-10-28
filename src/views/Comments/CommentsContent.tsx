import { ChangeEvent } from 'react';
import styled from 'styled-components';

interface CommentsTextProps {
    isEditing: boolean;
    commentId?: number;
    reviewId: number;
    content: string;
    updateComment: string;

    handleUpdateComment: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function CommentsContent({ isEditing, commentId, reviewId, content, updateComment, handleUpdateComment }: CommentsTextProps) {
    return (
        <>
            {/* commentId는 수정하기 버튼을 눌렀을때 설정, commentId와 commentDataList-commentId가 일치하는 경우 */}
            {isEditing && commentId == reviewId ? (
                <S_CommentsTextarea value={updateComment} onChange={handleUpdateComment}></S_CommentsTextarea>
            ) : (
                <S_CommentsText>{content}</S_CommentsText>
            )}
        </>
    );
}

const S_CommentsText = styled.p`
    margin: 16px 0px;
    padding: 16px;
    width: 100%;
    height: 70%;
    color: #181818;
    background-color: #f2f2f2;
    border-radius: 16px;
`;
const S_CommentsTextarea = styled.textarea`
    margin: 16px 0px;
    padding: 16px;
    width: 100%;
    height: 70%;
    border-radius: 16px;
`;
