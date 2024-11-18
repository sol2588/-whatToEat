export interface RecipeProps {
    recipeId: number;
    recipeName: string;
    recipeAuthor: string;
    recipeLevel: string;
    recipeCookingTime: string;
    recipeThumbnail: string;
    recipeRating: number;
    createdAt?: Date;
    updatedAt?: Date;
    // recipeIngredients?:Record<string, string>[]
    // recipeManuals?: Record<string, string>[]
}

export interface ManualsProps {
    mNum: number;
    mContent: string;
    mPicture: string;
    recipeId: number;
}

export interface IngredientsProps {
    num: number;
    recipeName: string;
    recipeQuantity: string;
    recipeId: number;
}
