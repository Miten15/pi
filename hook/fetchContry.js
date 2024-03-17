import { useState, useEffect } from "react";
import axios from 'axios';

const fetchCountry = (id) => {
    const [country, setCountry] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.get(`http://192.168.0.151:5003/api/countries/${id}`);
            if (response.status === 200) {
                setCountry(response.data);
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

    return { country, isLoading, error, refetch };
};

export default fetchCountry;

