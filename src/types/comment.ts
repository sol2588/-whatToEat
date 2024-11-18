export interface CommentsType {
    recipeId?: number;
    commentId: number;
    commentAuthor: string;
    commentContent: string;
    rating: number;
    createdAt: Date;
    updatedAt?: Date;
}

export interface CommentCreateType {
    recipeId: number;
    comment: string;
    rating: number;
}

export interface CommentUpdateType {
    commentId: number;
    comment: string;
    rating: number;
}

export interface EditingType {
    commentId: number;
    comments: string;
    commentRate: number;
}

export interface CommentDataType {
    recipeId: number;
    comment: string;
    rating: number;
    nickname: string;
}
