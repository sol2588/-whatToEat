import { useState, FormEvent, ChangeEvent } from 'react';
import instance from '../utils/api/instance';
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from '../redux/reducer/modalSlice';
import useAuthToken from './useAuthToken';
import { RootState } from '../redux/store/store';
import { CommentsType, CommentCreateType, CommentUpdateType, EditingType } from '../types/comment';

export default function useComments() {
    const [editing, setEditing] = useState<boolean>(false); // 수정 중인지 check
    const [commentDataList, setCommentDataList] = useState<CommentsType[]>([]);
    const [recipeId, setRecipeId] = useState<number>();
    const [commentId, setCommentId] = useState<number>();
    const [createComment, setCreateComment] = useState<string>('');
    const [updateComment, setUpdateComment] = useState<string>('');
    const [currentRate, setCurrentRate] = useState<number>(0);
    const [updateRate, setupdateRate] = useState<number>(0);

    const token = useAuthToken();
    const dispatch = useDispatch();
    const nickname = useSelector((state: RootState) => state.user.value.nickname); // msw로 nickname 전달
    // get : recipeId
    const fetchCommentHandler = async (recipeId: number) => {
        try {
            const response: any = await instance.get(`/comments/${recipeId}`);
            if (response.data.code === 'OK') {
                setCommentDataList(response.data.data.comments);
            }
        } catch (err) {
            console.log(err);
            dispatch(showModal({ isOpen: true, content: '댓글을 가져오는데 실패했습니다.', onConfirm: null }));
        }
    };

    // create : recipeId, comment, rating
    const createCommentHandler = async (e: FormEvent<HTMLFormElement>, { recipeId, comment, rating }: CommentCreateType) => {
        e.preventDefault();
        setRecipeId(recipeId);
        setCurrentRate(rating);

        try {
            const response = await instance.post('/comments', {
                recipeId: recipeId,
                comment: comment,
                rating: rating,
                nickname: nickname,
            });

            if (response.data.code == 'CREATED') {
                dispatch(showModal({ isOpen: true, content: '댓글이 작성되었습니다.', onConfirm: await fetchCommentHandler(recipeId) }));
                // 초기화
                setCreateComment('');
                setCurrentRate(0);
            }
        } catch (err: any) {
            console.log('댓글작성 error: ', err);
            if (!token) {
                dispatch(showModal({ isOpen: true, content: '로그인 후 이용하시기 바랍니다.', onConfirm: null }));
            } else if (createComment == '') {
                dispatch(showModal({ isOpen: true, content: '코멘트는 1글자 이상 300글자 이하로 작성해주세요.', onConfirm: null }));
            } else if (currentRate == 0) {
                dispatch(showModal({ isOpen: true, content: '평점은 1.0이상 입력해주세요', onConfirm: null }));
            }
        }
    };

    // update : commentId, comment, rating
    const updateCommentHandler = async ({ commentId, comment, rating }: CommentUpdateType, recipeId: number) => {
        setEditing(false); // 수정완료 시 false로 상태변경
        try {
            const response: any = await instance.put('/comments', {
                commentId: commentId,
                comment: comment,
                rating: rating,
            });

            if (response.data.code === 'OK') {
                setUpdateComment('');
                setCommentId(0);
                dispatch(showModal({ isOpen: true, content: '댓글이 수정되었습니다.', onConfirm: await fetchCommentHandler(recipeId) }));
            }
        } catch (err) {
            console.log('댓글 수정 error: ', err);
            dispatch(showModal({ isOpen: true, content: '코멘트 수정시에는 1글자 이상 300글자 이하로 작성해주세요.', onConfirm: null }));
        }
    };

    // 코멘트, 평점 update / create 핸들러
    const handleCreateComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setCreateComment(e.target.value);
    };
    const handleUpdateComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setUpdateComment(e.target.value);
    };
    const handleMakeRate = (rate: number) => {
        setCurrentRate(rate);
    };
    const handleUpdateRate = (rate: number) => {
        setupdateRate(rate);
    };

    // 코멘트 수정 버튼과 연결
    const handleClickEdit = ({ comments, commentId, commentRate }: EditingType) => {
        setEditing(true);
        setCommentId(commentId); // 수정버튼 누른 commentId값 저장 => commentsDataList에서 같은 commentid값을 가진 코멘트 filter하기 위함
        setUpdateComment(comments);
        setupdateRate(commentRate);
    };

    const deleteCommentHandler = async (commentId: number, recipeId: number) => {
        try {
            const response: any = await instance.delete('/comments', {
                data: {
                    commentId: commentId,
                },
            });

            if (response.data.code == 'OK') {
                console.log(response);
                dispatch(showModal({ isOpen: true, content: '댓글이 삭제되었습니다.', onConfirm: await fetchCommentHandler(recipeId) }));
            }
        } catch (err) {
            console.log(err);
            dispatch(showModal({ isOpen: true, content: '댓글 삭제에 실패하였습니다.', onConfirm: null }));
        }
    };

    return {
        editing,
        handleClickEdit,
        recipeId,
        commentId,
        currentRate,
        updateRate,
        createComment,
        updateComment,
        commentDataList,
        fetchCommentHandler,
        createCommentHandler,
        updateCommentHandler,
        deleteCommentHandler,
        handleCreateComment,
        handleUpdateComment,
        handleMakeRate,
        handleUpdateRate,
    };
}
