import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const MathMarksChart = () => {
    const SubjectMarksData = [
        {"student": "Student 1", "math_marks": 85, "physics_marks": 90, "chemistry_marks": 88},
        {"student": "Student 2", "math_marks": 78, "physics_marks": 84, "chemistry_marks": 80},
        {"student": "Student 3", "math_marks": 92, "physics_marks": 95, "chemistry_marks": 91},
        {"student": "Student 4", "math_marks": 88, "physics_marks": 89, "chemistry_marks": 87},
        {"student": "Student 5", "math_marks": 76, "physics_marks": 70, "chemistry_marks": 75},
        {"student": "Student 6", "math_marks": 95, "physics_marks": 94, "chemistry_marks": 90},
        {"student": "Student 7", "math_marks": 81, "physics_marks": 83, "chemistry_marks": 82},
        {"student": "Student 8", "math_marks": 90, "physics_marks": 92, "chemistry_marks": 89},
        {"student": "Student 9", "math_marks": 73, "physics_marks": 75, "chemistry_marks": 78},
        {"student": "Student 10", "math_marks": 87, "physics_marks": 88, "chemistry_marks": 85}
    ];
    
    return (
        <div>
            <LineChart width={800} height={400} data={SubjectMarksData}>
               <XAxis></XAxis>
               <YAxis></YAxis>
                <Line dataKey="math_marks" stroke='pink'></Line>
                <Line dataKey="physics_marks"stroke='green'></Line>
                <Line dataKey="chemistry_marks"stroke='brown'></Line>
            </LineChart>
        </div>
    );
};

export default MathMarksChart;
