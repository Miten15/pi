import { useState, useEffect } from "react";
import axios from "axios";

const fetchHotels = (places) => {
    const [hotels, setHotels] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)


    const fetchData = async () => {
        setIsLoading(true)

        try {
            if (places === 1) {
                const response = await axios.get('http://192.168.0.151:5003/api/hotels?limit=3');
                setHotels(response.data.hotels)
            } else {
                const response = await axios.get('http://192.168.0.151:5003/api/hotels');
                setHotels(response.data.hotels)
            }

            setIsLoading(false)
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const refetch = () => {
        setIsLoading(true)
        fetchData();
    }


    return { hotels, isLoading, error, refetch }
}

export default fetchHotels