import { http, HttpResponse } from 'msw';
import { CommentsType, CommentUpdateType, CommentDataType } from '../types/comment';

let comments: CommentsType[] = [
    {
        recipeId: 1,
        commentId: 1,
        commentAuthor: 'Admin',
        commentContent: '맛있어요',
        rating: 5,
        createdAt: new Date('2024-11-14T12:00:00Z'),
    },
    {
        recipeId: 2,
        commentId: 2,
        commentAuthor: 'Admin',
        commentContent: '굳',
        rating: 4,
        createdAt: new Date('2024-11-17T12:00:00Z'),
    },
];

let COMMENT_ID = 2;

export const commentHandler = [
    // 코멘트 조회
    http.get(`${import.meta.env.VITE_BASE_URL}/comments/:recipeId`, ({ params }) => {
        const { recipeId } = params;
        const recipeComment = comments.filter((comment) => comment.recipeId == Number(recipeId));

        return HttpResponse.json({
            code: 'OK',
            message: 'comments 조회',
            data: {
                comments: recipeComment,
            },
        });
    }),

    // 코멘트 작성
    http.post(`${import.meta.env.VITE_BASE_URL}/comments`, async ({ request }) => {
        const commentData = (await request.json()) as CommentDataType;

        if (!commentData.comment || !commentData.rating) {
            return HttpResponse.json(
                {
                    code: 'BAD_REQUEST',
                    message: '모든 필드를 채워주세요.',
                },
                {
                    status: 400,
                },
            );
        }
        COMMENT_ID += 1;

        comments.push({
            recipeId: commentData?.recipeId,
            commentId: COMMENT_ID,
            commentContent: commentData?.comment,
            rating: commentData?.rating,
            commentAuthor: commentData?.nickname,
            createdAt: new Date(),
        });

        return HttpResponse.json({
            code: 'CREATED',
            message: '댓글 작성 완료',
        });
    }),

    // 코멘트 수정
    http.put(`${import.meta.env.VITE_BASE_URL}/comments`, async ({ request }) => {
        const updateComment = (await request.json()) as CommentUpdateType;
        const target = comments.find((comment) => comment.commentId == updateComment.commentId);

        if (!target) {
            return HttpResponse.json(
                {
                    code: 'Bad Request',
                    message: '댓글을 수정할 수 없습니다.',
                },
                { status: 400 },
            );
        }

        target.commentContent = updateComment.comment;
        target.rating = updateComment.rating;

        return HttpResponse.json({
            code: 'OK',
            message: '댓글이 수정되었습니다.',
        });
    }),

    // 코멘트 삭제
    http.delete(`${import.meta.env.VITE_BASE_URL}/comments`, async ({ request }) => {
        const deleteId = (await request.json()) as { commentId: number };
        const targetId = deleteId?.commentId;

        if (!targetId) {
            return HttpResponse.json(
                {
                    code: 'Bad Request',
                    message: '댓글을 삭제할 수 없습니다.',
                },
                { status: 400 },
            );
        }
        comments = comments.filter((comment) => comment.commentId != targetId);
        console.log(comments);

        return HttpResponse.json({
            code: 'OK',
            message: '댓글이 삭제되었습니다.',
        });
    }),
];
