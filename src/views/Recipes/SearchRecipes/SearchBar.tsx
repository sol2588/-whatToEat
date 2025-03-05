import { ChangeEvent, KeyboardEvent } from 'react';
import { useFilterContext } from '../../../hooks/useFilterContext';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface SearchBoxProps {
    handleSubmit: (e: KeyboardEvent<HTMLInputElement> | KeyboardEvent<HTMLDivElement>) => void;
}

export default function SearchBar({ handleSubmit }: SearchBoxProps) {
    const { searchParams, actions } = useFilterContext();
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        actions.updateSearchParams('searchTerm', e.target.value);
        actions.updateSearchParams('canFetchData', false);
    };

    return (
        <Box sx={{ width: '100%', maxWidth: '100%', bgcolor: '#fff' }}>
            <TextField
                fullWidth
                id="search"
                label="재료를 띄어쓰기로 입력해주세요 "
                variant="outlined"
                type="search"
                value={searchParams.searchTerm}
                onChange={handleInput}
                onKeyDown={(e) => e.key == 'Enter' && handleSubmit(e)}
            />
        </Box>
    );
}
