import { useFetchAnalytics } from '../../hooks/useFetchAnalytics';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import colors from '../../styles/colors';
import { Container, Box, Typography, Card, CardContent } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface SummaryCardProps {
    title: string;
    value: number;
    color: string;
}

export default function Visited(): JSX.Element {
    const { visitedInfo } = useFetchAnalytics();

    const data = {
        labels: ['일별', '월별'],
        datasets: [
            {
                label: '방문자 수',
                data: [visitedInfo.Today, visitedInfo.Monthly],
                backgroundColor: [`${colors[200]}`, `${colors[300]}`],
                borderColor: `${colors[100]}`,
                borderWitdth: 1,
            },
        ],
    };

    const options: ChartOptions<'bar'> = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: {
                    color: colors[400],
                },
            },
            title: {
                display: true,
                text: 'Activity',
                color: colors[400],
                font: {
                    size: 18,
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: (value: string | number) => {
                        if (typeof value === 'number') {
                            return `$${value}k`;
                        }
                        return value;
                    },
                },
            },
        },
    };

    return (
        <Container maxWidth="md">
            {/* 상단 요약 카드 */}
            <Box display="flex" justifyContent="space-between" mb={4}>
                <SummaryCard title="오늘 방문자" value={visitedInfo.Today} color={colors[200]} />
                <SummaryCard title="월간 방문자" value={visitedInfo.Monthly} color={colors[300]} />
            </Box>

            {/* 차트 */}
            <Box>
                <Typography variant="h5" gutterBottom color={colors[400]}>
                    Activity
                </Typography>
                <Box p={3} bgcolor="#f5f5f5" borderRadius="8px">
                    <Bar data={data} options={options} />
                </Box>
            </Box>
        </Container>
    );
}

// 상단 요약 카드 컴포넌트
function SummaryCard({ title, value, color }: SummaryCardProps): JSX.Element {
    return (
        <Card sx={{ minWidth: 120, backgroundColor: color, color: '#fff', textAlign: 'center' }}>
            <CardContent>
                <Typography variant="h6">{value.toLocaleString()}</Typography>
                <Typography variant="body2">{title}</Typography>
            </CardContent>
        </Card>
    );
}
