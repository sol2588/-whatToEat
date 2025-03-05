import { useContext } from 'react';
import { FilterContext } from '../views/Recipes/SearchRecipes/SearchProvider';

export const useFilterContext = () => {
    const context = useContext(FilterContext);

    if (!context) {
        throw new Error('useFilterContext must be used in FilterContext Provider');
    }
    return context;
};
