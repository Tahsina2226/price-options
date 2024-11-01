import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { Audio } from 'react-loader-spinner';

const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phonesWithFakeData = phoneData.map(phone => {
                    const price = parseInt(phone.slug.split('-')[1]) || 0; // মূল্য বের করা
                    return {
                        name: phone.phone_name,
                        price: price
                    };
                });
                console.log(phonesWithFakeData);
                setPhones(phonesWithFakeData);
                setLoading(false); 
            })
            .catch(err => {
                console.error("Error fetching data: ", err);
                setLoading(false); 
            });
    }, []);

  
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="green"
                    ariaLabel="three-dots-loading"
                    wrapperStyle
                    wrapperClass
                />
            </div>
        );
    }

    return (
        <div className='mb-10'>
            <h2 className='text-5xl'>Phones: {phones.length}</h2>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={phones}>
                    <Bar dataKey="price" fill="#8884d8" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Phones;
