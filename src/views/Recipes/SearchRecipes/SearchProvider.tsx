import React, { useState, useMemo, createContext, ReactNode } from 'react';
import { RecipeProps } from '../../../types/recipe';

interface FilterType {
    isSearching: boolean;
    canFetchData: boolean;
    level: string;
    time: string;
    searchTerm: string;
    ingredientsList: string[] | [];
}

interface FilterContextType {
    recipes: RecipeProps[] | [];
    setRecipes: React.Dispatch<React.SetStateAction<RecipeProps[]>>;
    searchParams: FilterType;
    actions: {
        updateSearchParams: <K extends keyof FilterType>(key: K, value: FilterType[K]) => void;
        // changeSearching: (option: boolean) => void;
        // changeFetching: (option: boolean) => void;
        // changeLevel: (lv: string) => void;
        // changeTime: (tick: string) => void;
        // changeTerm: (text: string) => void;
        // changeIngredientsList: (arr: string[] | []) => void;
        handleInit: () => void;
    };
}

const INITIAL_FILTER_STATE: FilterType = {
    isSearching: false,
    canFetchData: false,
    level: '',
    time: '',
    searchTerm: '',
    ingredientsList: [],
};
const FilterContext = createContext<FilterContextType | null>(null);

function SearchProvider({ children }: { children: ReactNode }) {
    const [recipes, setRecipes] = useState<RecipeProps[]>([]);
    const [searchParams, setSearchParams] = useState<FilterType>(INITIAL_FILTER_STATE);
    const actions: FilterContextType['actions'] = useMemo(
        () => ({
            updateSearchParams(key, value) {
                setSearchParams((prev) => ({ ...prev, [key]: value }));
            },
            // changeSearching(option) {
            //     setSearchParams((prev) => ({ ...prev, isSearching: option }));
            // },
            // changeFetching(option) {
            //     setSearchParams((prev) => ({ ...prev, canFetchData: option }));
            // },
            // changeLevel(lv) {
            //     setSearchParams((prev) => ({ ...prev, level: lv }));
            // },
            // changeTime(tick) {
            //     setSearchParams((prev) => ({ ...prev, time: tick }));
            // },
            // changeTerm(text) {
            //     setSearchParams((prev) => ({ ...prev, searchTerm: text }));
            // },
            // changeIngredientsList(arr) {
            //     setSearchParams((prev) => ({ ...prev, ingredientsList: arr }));
            // },
            handleInit() {
                setRecipes([]);
                setSearchParams(INITIAL_FILTER_STATE);
            },
        }),
        [setSearchParams, setRecipes],
    );

    return <FilterContext.Provider value={{ searchParams, actions, recipes, setRecipes }}>{children}</FilterContext.Provider>;
}

export { FilterContext, SearchProvider };
