import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const Phones = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phonesWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                console.log(phonesWithFakeData);
                setPhones(phonesWithFakeData);
                setLoading(false);
            });

    }, [])














        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(res => res.json())
        //     .then(data => setPhones(data.data))
        //     .catch(err => console.error("Error fetching data: ", err)); 

    
    return (
        <div className='mb-10'>
            <h2 className='text-5xl'>Phones:{phones.length} </h2>
            <BarChart width={1200} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
            
        </div>
    );
};

export default Phones;

