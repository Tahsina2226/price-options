import React from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

const PieChartComponent = () => {
    const DataSet01 = [
        { "name": "Item 1", "value": 10, "group": "A", "data1": 15 },
        { "name": "Item 2", "value": 25, "group": "B", "data1": 30 },
        { "name": "Item 3", "value": 40, "group": "A", "data1": 45 },
        { "name": "Item 4", "value": 55, "group": "C", "data1": 60 },
        { "name": "Item 5", "value": 70, "group": "B", "data1": 75 }
    ];

    const DataSet02 = [
        { "name": "Item 1", "value": 12, "group": "A", "data2": 18 },
        { "name": "Item 2", "value": 28, "group": "B", "data2": 35 },
        { "name": "Item 3", "value": 45, "group": "A", "data2": 50 },
        { "name": "Item 4", "value": 58, "group": "C", "data2": 65 },
        { "name": "Item 5", "value": 72, "group": "B", "data2": 80 }
    ];

    return (
        <div>
            <PieChart width={400} height={400}>
                <Pie data={DataSet01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                <Pie data={DataSet02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
            </PieChart>
        </div>
    );
};

export default PieChartComponent;
