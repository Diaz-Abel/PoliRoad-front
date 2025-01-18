import axios from 'axios'

export const getAllCarreras = () => {
    const res = axios.get("https://poliroadapi.onrender.com/api/carreras/")
    return res
}
export const getCarrerasByFacultad = (facultadId) => {
    const res = axios.get(`https://poliroadapi.onrender.com/api/carreras/?facultad=${facultadId}`);    
    return res
}  