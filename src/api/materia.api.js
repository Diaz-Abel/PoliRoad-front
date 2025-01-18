import axios from 'axios'

export const getallMaterias = () => {
    const res = axios.get("https://poliroadapi.onrender.com/api/materias/")
    return res
}

export const getMateriasByCarrera = (carreraId) => {
    const res = axios.get(`https://poliroadapi.onrender.com/api/materias/?carrera=${carreraId}`);
    return res
}