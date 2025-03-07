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
    }, []); // Empty dependency array ensures this runs only once on mount

    return data;
}

export default useDataDash;
