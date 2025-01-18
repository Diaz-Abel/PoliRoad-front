import axios from 'axios'

export const getAllFacultades = () => {
    const res = axios.get("https://poliroadapi.onrender.com/api/facultades/")
    return res
}  

