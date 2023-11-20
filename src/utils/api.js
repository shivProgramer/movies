import axios from "axios";
import { VITE_APP_TMDB_TOKEN } from "../../config";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = VITE_APP_TMDB_TOKEN

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params)=>{
    try {

        console.log("Token",TMDB_TOKEN);
        const { data } = await axios.get(BASE_URL + url, {
         headers,
         params
        })
        return data;
    } catch (error) {
        console.log(error); 
        return error;
    }
}
 