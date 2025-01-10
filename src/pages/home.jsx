import { AppSidebar } from "@/components/app-sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { FacultadSearchBar } from "@/components/facultad-searchbar"
import { CarreraSearchBar } from "@/components/carrera-searchbar"
import { useState } from "react"
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogAction
}
    from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import  MallaCurricular  from "./malla"



export function Home() {
    const [selectedFacultad, setSelectedFacultad] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);



    const handleCarreraSearchBarClick = () => {
        if (selectedFacultad === null) {
            setIsDialogOpen(true);
        }
    }

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    }

    return (
        <div>
            {isDialogOpen && (
                <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <AlertDialogTrigger asChild>
                        <Button variant="outline">Selecciona una facultad</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Por favor selecciona una facultad</AlertDialogTitle>
                            <AlertDialogDescription>
                                Debes seleccionar una facultad antes de proceder a elegir una carrera.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogAction onClick={handleCloseDialog}>Entendido</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            )}


            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                        <div className="flex items-center gap-2 px-4">
                            <SidebarTrigger className="-ml-1" />
                            <Separator orientation="vertical" className="mr-2 h-4" />
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem className="hidden md:block">
                                        <FacultadSearchBar onSelectFacultad={setSelectedFacultad} />
                                    </BreadcrumbItem>
                                    <Separator orientation="vertical" className="mr-2 h-4" />
                                    <BreadcrumbItem>
                                        <div onClick={handleCarreraSearchBarClick}>
                                            {/* Deshabilitar clic si no hay facultad seleccionada */}
                                            <div
                                                style={{ pointerEvents: selectedFacultad ? 'auto' : 'none' }}
                                            >
                                                <CarreraSearchBar facultad={selectedFacultad} />
                                            </div>
                                        </div>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </header>
                    <MallaCurricular />
                    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                            <div className="aspect-video rounded-xl bg-muted/50" />
                            <div className="aspect-video rounded-xl bg-muted/50" />
                            <div className="aspect-video rounded-xl bg-muted/50" />
                        </div>
                        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
                    </div>
                </SidebarInset>
            </SidebarProvider>

        </div>
    )
}
