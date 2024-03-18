import { useState, useEffect } from "react";
import axios from "axios";

const fetchHotelById = (id) => {
    const [hotel, setHotel] = useState([]);
    const [coordinates, setCoordinates ] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)


    const fetchData = async ()=> {
        setIsLoading(true)

        try {
            const response = await axios.get(`http://192.168.0.151:5003/api/hotels/${id}`);

            setHotel(response.data)
            const newData = response.data.coordinates
            const coordinate = {
                id: response.data._id,
                name: response.data.title,
                latitude: newData.latitude,
                longitude: newData.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
              }
              setCoordinates(coordinate)
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


    return {hotel, coordinates, isLoading, error, refetch}
}

export default fetchHotelById