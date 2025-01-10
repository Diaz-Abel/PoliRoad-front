import { useEffect, useState } from "react"
import { getallMaterias } from '../api/materia.api';


export function MateriaList() {

    const [materias, setMaterias] = useState([]);

    useEffect(() => {

        async function loadMaterias() {
            const res = await getallMaterias();
            setMaterias(res.data)
        }
        loadMaterias();
    }, [])

    return (

        <div>
            {materias.map(materia => (
                <div key={materia.id}>
                    <h1>{materia.nombre}</h1>
                    <h2>{materia.plan_estudio}</h2>
                    <h3>{materia.dependencias}</h3>
                </div>
            ))}
        </div>
    )
}
