import axios from 'axios'

export const getAllFacultades = () => {
    const res = axios.get("http://localhost:8000/api/facultades/")
    return res
}  

