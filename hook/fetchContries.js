import { useState, useEffect } from "react";
import axios from 'axios';

const fetchCountries = () => {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.get('http://192.168.0.151:5003/api/countries?limit=5');
            if (response.status === 200) {
                setCountries(response.data.countries);
                console.log("API call success:", response.status);
            } else {
                console.error("API call unsuccessful:", response.status);
            }
        } catch (error) {
            setError(error);
            console.error("API call unsuccessful:  ", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    return { countries, isLoading, error, refetch };
};

export default fetchCountries;

