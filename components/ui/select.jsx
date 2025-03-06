import { CITY } from '@/libs/utils';
import React from 'react';

export const Select = ({ value, onChange, options, className }) => {
    return (
        <select
            value={value}
            onChange={onChange}
            className={`p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${className}`}
        >
            {
                CITY.forEach(element => {
                    <h2>{element}</h2>
                })
            }
        </select>
    );
};
