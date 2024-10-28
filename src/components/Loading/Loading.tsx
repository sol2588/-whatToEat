import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loading() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: '30px' }}>잠시만 기다려주세요</span>
            <br />
            <CircularProgress />
        </Box>
    );
}
