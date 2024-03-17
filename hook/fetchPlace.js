import { useState, useEffect } from "react";
import axios from "axios";

const fetchPlace = (id) => {
    const [place, setPlace] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)


    const fetchData = async ()=> {
        setIsLoading(true)

        try {
            const response = await axios.get(`http://192.168.0.151:5003/api/places/${id}`);

            setPlace(response.data.place)
            setIsLoading(false)
        } catch (error) {
           setError(error) 
        } finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const refetch =() => {
        setIsLoading(true)
        fetchData();
    }


    return {place, isLoading, error, refetch}
}

export default fetchPlace