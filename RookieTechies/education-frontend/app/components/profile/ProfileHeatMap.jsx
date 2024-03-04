import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

export default function ProfileHeatMap() {
    return (
        <CalendarHeatmap
            startDate={new Date('2023-12-31')}
            endDate={new Date('2024-12-31')}
            values={[
                { "date": "2024-01-01", "count": 84 },
                { "date": "2024-01-02", "count": 92 },
                { "date": "2024-01-03", "count": 47 },
                { "date": "2024-01-04", "count": 63 },
                { "date": "2024-01-05", "count": 18 },
                { "date": "2024-01-07", "count": 36 },
                { "date": "2024-01-08", "count": 55 },
                { "date": "2024-01-09", "count": 82 },
                { "date": "2024-01-10", "count": 29 },
                { "date": "2024-01-11", "count": 47 },
                { "date": "2024-01-12", "count": 64 },
                { "date": "2024-01-14", "count": 56 },
                { "date": "2024-01-15", "count": 73 },
                { "date": "2024-01-17", "count": 45 },
                { "date": "2024-01-18", "count": 62 },
                { "date": "2024-01-20", "count": 23 },
                { "date": "2024-01-22", "count": 76 },
                { "date": "2024-01-23", "count": 32 },
                { "date": "2024-01-25", "count": 77 },
                { "date": "2024-01-26", "count": 41 },
                { "date": "2024-01-28", "count": 34 },
                { "date": "2024-01-29", "count": 51 },
                { "date": "2024-01-30", "count": 69 },
                { "date": "2024-02-01", "count": 43 },
                { "date": "2024-02-02", "count": 60 },
                { "date": "2024-02-03", "count": 88 },
                { "date": "2024-02-05", "count": 62 },
                { "date": "2024-02-06", "count": 18 },
                { "date": "2024-02-07", "count": 35 },
                { "date": "2024-02-08", "count": 53 },
                { "date": "2024-02-09", "count": 80 },
                { "date": "2024-02-12", "count": 72 },
                { "date": "2024-02-13", "count": 28 },
                { "date": "2024-02-14", "count": 45 },
                { "date": "2024-02-15", "count": 63 },
                { "date": "2024-02-16", "count": 19 },
                { "date": "2024-02-18", "count": 54 },
                { "date": "2024-02-19", "count": 81 },
                { "date": "2024-02-20", "count": 38 },
                { "date": "2024-02-22", "count": 73 },
                { "date": "2024-02-23", "count": 30 },
                { "date": "2024-02-24", "count": 47 },
                { "date": "2024-02-25", "count": 65 },
                { "date": "2024-02-26", "count": 21 },
                { "date": "2024-02-28", "count": 56 },
                { "date": "2024-02-29", "count": 83 },
                { "date": "2024-03-01", "count": 40 },
                { "date": "2024-03-02", "count": 58 }
            ]
            }
        />
    )
}