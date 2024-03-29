import axios from "axios";
import { useEffect, useState } from "react";
import { getUsername } from '../components/common/Helper/helper'

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;


/** custom hook */
export default function useFetch(query){
    const [getData, setData] = useState({ isLoading : false, apiData: undefined, status: null, serverError: null })

    useEffect(() => {

        const fetchData = async () => {
            try {
                setData(prev => ({ ...prev, isLoading: true}));

                const { username, user_type } = !query ? await getUsername() : '';
                console.log(username,user_type);
                
                const { data, status } = !query ? await axios.get(`/api/user`, { params : { username,user_type}}) : await axios.get(`/api/${query}`);
console.log(data)
                if(status === 201){
                    setData(prev => ({ ...prev, isLoading: false}));
                    setData(prev => ({ ...prev, apiData : data, status: status }));
                }

                setData(prev => ({ ...prev, isLoading: false}));
            } catch (error) {
                setData(prev => ({ ...prev, isLoading: false, serverError: error }))
            }
        };
        fetchData()

    }, [query]);

    return [getData, setData];
}