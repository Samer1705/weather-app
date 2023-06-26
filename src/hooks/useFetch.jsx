import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetch = (endpoint, query) => {
    const options = {
        method: 'GET',
        url: `https://weatherapi-com.p.rapidapi.com/${endpoint}.json`,
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_X_RAPIDAPI_KEY,
            'X-RapidAPI-Host': import.meta.env.VITE_X_RAPIDAPI_HOST
        },
        params: { q: query },
    }

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch();
    }, []);
    
    const fetch = async () => {
        try {
            let res = await axios.request(options);
            console.log(res.data);
            setData(res.data);
        } catch (error) {
            console.log(error);
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }
    return { data, isLoading, error };
}

export default useFetch