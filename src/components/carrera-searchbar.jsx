"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { getCarrerasByFacultad } from "@/api/carrera.api"
import { useState, useEffect } from "react"




export function CarreraSearchBar({ facultad }) {
    const [carreras, setCarreras] = useState([]);
    

    // Cargar las carreras al montar el componente
    useEffect(() => {
        // Solo hacer la consulta si se ha seleccionado una facultad
        if (facultad) {
            const fetchCarreras = async () => {
                try {
                    const response = await getCarrerasByFacultad(facultad);
                    setCarreras(response.data);
                } catch (error) {
                    console.error("Error al cargar las carreras:", error);
                } 
            };

            fetchCarreras();
        } else {
            setCarreras([]); // Si no hay facultad seleccionada, limpiar las carreras
        }
    }, [facultad]); // Este efecto solo se ejecutará cuando cambie el valor de facultad


    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? carreras.find((carrera) => carrera.nombre === value)?.nombre
                        : "Selecciona tu carrera..."}
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Buscar carrera..." className="h-9" />
                    <CommandList>
                        <CommandEmpty>Sin resultados</CommandEmpty>
                        <CommandGroup>
                            {carreras.map((carrera) => (
                                <CommandItem
                                    key={carrera.id}
                                    value={carrera.nombre}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    {carrera.nombre}
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            value === carrera.nombre ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
