import { getMateriasByCarrera } from "@/api/materia.api";
import React, { useEffect, useState } from "react";
import ReactFlow, { Background, Controls, MarkerType } from "reactflow";
import "reactflow/dist/style.css";




const MallaCurricular = () => {
    const [subjects, setSubjects] = useState([]); // Estado para almacenar las materias

    useEffect(() => {
        // Función para obtener los datos de la API
        const fetchSubjects = async () => {
            try {
                const response = await getMateriasByCarrera(1); // Obtener las materias de la carrera con `id` 1
                console.log("Subjects:", response.data);
                setSubjects(response.data); // Actualizar el estado con las materias
            } catch (error) {
                console.error("Error fetching subjects:", error);
            }
        };

        fetchSubjects();
    }, []); // Se ejecuta una vez al montar el componente

    // Función para convertir materias en nodos

    const generateNodes = () => {

        let counter = 0;
        return subjects.map((subject) => {

            // Contar cuántas materias tiene cada semestre
            const materiasEnSemestre = subjects.filter(
                s => s.semestre === subject.semestre
            ).length;

            // Usar contador para posición dentro del semestre
            const position = counter;

            counter = (counter + 1) % materiasEnSemestre; // Reinicia a 0 cuando llega al final del semestre
            return {
                id: subject.id.toString(),
                data: { label: subject.nombre },
                position: { x: subject.semestre * 200, y: position * 100 }, // Usando `index` para crear una fila
                style: {
                    backgroundColor: "#DFF6FF",
                    border: "1px solid #0077B6",
                    borderRadius: "8px",
                    padding: "10px",
                },
            };
        })
    };

    // Función para convertir prerequisitos en aristas (edges)
    const generateEdges = () =>
        subjects.flatMap((subject) =>
            subject.dependencias?.map((dependencia) => ({

                id: `e-${dependencia}-${subject.id}`,
                source: dependencia.toString(),
                target: subject.id.toString(),
                animated: false,
                markerEnd: {
                    type: MarkerType.ArrowClosed,
                },
                style: { stroke: "black" },
                focusable: true,

            })) || []
        );

    // Generar los nodos y aristas solo cuando los datos estén disponibles
    const nodes = generateNodes();
    const edges = generateEdges();

    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                fitView
                attributionPosition="bottom-right"
            >
                <Background color="#aaa" gap={20} />
                <Controls />
            </ReactFlow>
        </div>
    );
};

export default MallaCurricular;
