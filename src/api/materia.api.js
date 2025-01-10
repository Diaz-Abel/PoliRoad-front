import axios from 'axios'

export const getallMaterias = () => {
    const res = axios.get("http://localhost:8000/api/materias/")
    return res
}

export const getMateriasByCarrera = (carreraId) => {
    const res = axios.get(`http://localhost:8000/api/materias/?carrera=${carreraId}`);
    return res
}