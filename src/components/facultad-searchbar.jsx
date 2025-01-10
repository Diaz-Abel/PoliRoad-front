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

import { getAllFacultades } from "@/api/facultad.api"
import { useState, useEffect } from "react"




export function FacultadSearchBar({ onSelectFacultad }) {
    const [facultades, setFacultades] = useState([]);
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    // Cargar las carreras al montar el componente
    useEffect(() => {
        async function loadFacultades() {
            try {
                const res = await getAllFacultades();
                setFacultades(res.data);
            } catch (error) {
                console.error("Error al cargar las facultades:", error);
            }
        }
        loadFacultades();
    }, []);

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
                        ? facultades.find((facultad) => facultad.nombre === value)?.nombre
                        : "Selecciona tu facultad..."}
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Buscar facultad..." className="h-9" />
                    <CommandList>
                        <CommandEmpty>Sin resultados</CommandEmpty>
                        <CommandGroup>
                            {facultades.map((facultad) => (
                                <CommandItem
                                    key={facultad.id}
                                    value={facultad.nombre}
                                    onSelect={(currentValue) => {
                                        if (currentValue === value) {
                                            // Si la facultad seleccionada es la misma que la actual, deselecciona
                                            setValue(""); // Vaciar el valor
                                            onSelectFacultad(null); // Pasar `null` o un valor vacío al componente padre
                                        } else {
                                            setValue(currentValue); // Establecer la nueva facultad seleccionada
                                            onSelectFacultad(facultad.id); // Pasar el `id` de la facultad seleccionada al componente padre
                                        }
                                        setOpen(false)
                                    }}
                                >
                                    {facultad.nombre}
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            value === facultad.nombre ? "opacity-100" : "opacity-0"
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
