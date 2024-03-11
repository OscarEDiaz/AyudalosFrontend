import { useEffect, useState } from "react"

import axios from 'axios';

export const useGet = (url) => {
    const [data, setData] = useState([]);
    const [dataIsLoading, setDataIsLoading] = useState(true);
    const [error, setError] = useState('');

    const getData = async () => {
        try {
            setError('');
            setDataIsLoading(true);
            
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}${url}`);
            const data = response.data;

            console.log(data)

            setDataIsLoading(false);
            setData(data);
        } catch (error) {
            setError('Problem loading initiatives')
            setDataIsLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, [])


    return {
        dataIsLoading,
        data,
        error,
    }
}