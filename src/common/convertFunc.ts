function convertTime(time: string) {
    switch (time) {
        case 'FIVE_MINUTES':
            return '5분 이내';
        case 'TEN_MINUTES':
            return '10분 이내';
        case 'FIFTEEN_MINUTES':
            return '15분 이내';
        case 'TWENTY_MINUTES':
            return '20분 이내';
        case 'THIRTY_MINUTES':
            return '30분 이내';
        case 'ONE_HOUR':
            return '1시간 이내';
        default:
            return '1시간 이상';
    }
}

function convertLevel(level: string) {
    switch (level) {
        case 'LOW':
            return '하';
        case 'MIDDLE':
            return '중';
        case 'HIGH':
            return '상';
        default:
            return level;
    }
}

export { convertTime, convertLevel };
