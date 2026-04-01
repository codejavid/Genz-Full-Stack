
import {useState, useEffect} from "react";
import { options } from "../utils/Options";


const useFetch = (apiPath, queryTerm) => {

    const [data, setData] = useState([]);

    useEffect(() => {

        async function fetchMovies() {
            try{

                const response = await fetch(`https://api.themoviedb.org/3/${apiPath}?query=${queryTerm}`, options);

                const data = await response.json();

                setData(data.results ? data.results : null);

            }catch(error){
                console.error("Error in fetching Data...");
            }
        }

        fetchMovies();

    },[apiPath, queryTerm]);

    return{
        data
    }

}


export default useFetch;