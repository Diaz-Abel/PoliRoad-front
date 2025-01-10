import axios from 'axios'

export const getAllCarreras = () => {
    const res = axios.get("http://localhost:8000/api/carreras/")
    return res
}
export const getCarrerasByFacultad = (facultadId) => {
    const res = axios.get(`http://localhost:8000/api/carreras/?facultad=${facultadId}`);    
    return res
}  