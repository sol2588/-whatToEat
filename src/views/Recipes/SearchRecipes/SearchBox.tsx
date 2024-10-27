import { ChangeEvent, KeyboardEvent } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface SearchBoxProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export function SearchBox({ value, onChange, handleKeyDown }: SearchBoxProps) {
    return (
        <Box component="form" sx={{ width: '100%', maxWidth: '100%' }}>
            <TextField
                fullWidth
                id="search"
                label="재료를 띄어쓰기로 입력해주세요 "
                variant="outlined"
                type="search"
                value={value}
                onChange={onChange}
                onKeyDown={handleKeyDown}
            />
        </Box>
    );
}
