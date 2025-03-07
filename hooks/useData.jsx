'use client';

import { useState, useEffect } from 'react';
import getCityInfo from '@/actions/getCityData';

function useDataDash() {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const cityData = await getCityInfo('pune');
            setData(cityData);
        };
        fetchData();
    }, []);

    if(data){
        return data
    }
    const storedData = localStorage.getItem("aqiData");
    return storedData ? JSON.parse(storedData) : null;
}

export default useDataDash;
