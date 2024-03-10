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
            const { dummy } = response.data;
            
            setDataIsLoading(false);
            setData(dummy);
        } catch (error) {
            setError('Problem loading initiatives')
            setDataIsLoading(false);
        }
    }

    useEffect(() => {
        console.log(import.meta.env.VITE_BACKEND_URL);
    }, [])


    return {
        dataIsLoading,
        data,
        error,
    }
}