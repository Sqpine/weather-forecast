import React, {useEffect, useState} from "react";
import {HourWeatherType} from "../API/API-Weather";
import {getDayName} from "../utils/utils";
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import {Line} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


type PropsType = {
    hour: HourWeatherType[]
    date: string
}
export const DetailInfo = React.memo((props: PropsType) => {
    const [data, setData] = useState<any>(null)

    useEffect(() => {
        setData({
            labels: [...hoursOfDay],
            datasets: [
                {
                    fill: true,
                    data: [...props.hour.map(e => e.temp_c)],
                    borderColor: '#6123fc',
                }
            ],
        })
    }, [props.hour])

    return (
        <div style={{width: '40%', padding: '20px'}}>
            <h1>
                {getDayName(props.date, 'en-US')}
            </h1>
            {data && <div>
                <Line options={options} data={data}/>
            </div>}
        </div>
    )
})

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
            display: false,
        },
        title: {
            display: true,
            text: 'Temperature during the day',
        },
    },
};
const hoursOfDay = ['01:00', '02:00', '03:00', '04:00',
    '05:00', '06:00', '07:00', '08:00',
    '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00',
    '17:00', '18:00', '19:00', '20:00',
    '21:00', '22:00', '23:00', '24:00',]



