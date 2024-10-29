import { useFetchAnalytics } from '../../hooks/useFetchAnalytics';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Box, Card, CardContent } from '@mui/material';
import colors from '../../styles/colors';
import styled from 'styled-components';

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
                    font: { family: 'SUITE-Regular' },
                },
            },
            title: {
                display: true,
                text: '방문자',
                color: colors[400],
                font: {
                    size: 18,
                    family: 'SUITE-Regular',
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
        <S_Container>
            <S_SummaryWrapper>
                <SummaryCard title="Today" value={visitedInfo.Today} color={colors[200]} />
                <SummaryCard title="Month" value={visitedInfo.Monthly} color={colors[300]} />
            </S_SummaryWrapper>
            <S_ChartWrapper>
                <Box p={3} bgcolor="#f5f5f5" borderRadius="8px">
                    <Bar data={data} options={options} />
                </Box>
            </S_ChartWrapper>
        </S_Container>
    );
}

function SummaryCard({ title, value, color }: SummaryCardProps): JSX.Element {
    return (
        <Card sx={{ minWidth: 120, maxWidth: 140, minHeight: 40, maxHeight: 75, backgroundColor: color, color: '#fff', textAlign: 'center' }}>
            <CardContent sx={{ textAlign: 'center' }}>
                <S_TitleText>{value.toLocaleString()}</S_TitleText>
                <S_SubtitleText>{title}</S_SubtitleText>
            </CardContent>
        </Card>
    );
}

const S_Container = styled.div`
    max-width: 400px;
`;

const S_SummaryWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
`;
const S_ChartWrapper = styled.div`
    background-color: #f5f5f5;
    border-radius: 8px;
`;

const S_TitleText = styled.h6`
    font-family: 'SUITE-Regular';
`;

const S_SubtitleText = styled.p`
    font-size: 1rem;
    font-family: 'SUITE-Regular';
`;
