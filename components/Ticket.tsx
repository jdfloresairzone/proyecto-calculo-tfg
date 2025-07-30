import { ChevronRight, ChevronDown, Pencil, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { Icon, IconData } from "./Icon/Icon"
import Link from "next/link"

export default function Ticket() {

    const navItems: { name: string; icon: IconData; href: string; active: boolean }[] = [
        { name: "Presupuestos", icon: IconData.quotes, href: "/presupuestos", active: false },
        { name: "Pedidos", icon: IconData.returns, href: "/pedidos", active: false },
        { name: "Garantías", icon: IconData.warranties, href: "/garantias", active: false },
        { name: "Asistencias", icon: IconData.technicalSupport, href: "/asistencias", active: false },
        { name: "Facturas", icon: IconData.invoices, href: "/facturas", active: false },
        { name: "Albaranes", icon: IconData.deliveryNotes, href: "/albaranes", active: false },
        { name: "Precios", icon: IconData.invoices, href: "/precios", active: false },
        { name: "Consultas", icon: IconData.tickets, href: "/consultas", active: true },
    ];


    const consultas = [
        {
            estado: "Respondido",
            asunto: "TEST",
            ultimaActualizacion: "31/3/2025",
            tipoConsulta: "Soporte comercial",
        },
        {
            estado: "Respondido",
            asunto: "Solicitud de edición de perfil de cliente",
            ultimaActualizacion: "10/3/2025",
            tipoConsulta: "Factura / Cambio de datos",
        },
        {
            estado: "Respondido",
            asunto: "test",
            ultimaActualizacion: "5/3/2025",
            tipoConsulta: "Soporte Web",
        },
        {
            estado: "Respondido",
            asunto: "TESTEST",
            ultimaActualizacion: "5/3/2025",
            tipoConsulta: "Soporte Web",
        },
        {
            estado: "Respondido",
            asunto: "Prueba Enlace",
            ultimaActualizacion: "5/3/2025",
            tipoConsulta: "Soporte Web",
        },
        {
            estado: "Respondido",
            asunto: "Prueba Enlace",
            ultimaActualizacion: "5/3/2025",
            tipoConsulta: "Soporte Web",
        },
        {
            estado: "Respondido",
            asunto: "Prueba Enlace",
            ultimaActualizacion: "5/3/2025",
            tipoConsulta: "Soporte Web",
        },
        {
            estado: "Respondido",
            asunto: "TEST Consulta",
            ultimaActualizacion: "24/2/2025",
            tipoConsulta: "Soporte Web",
        },
        {
            estado: "Respondido",
            asunto: "asdadasdasdasdasd",
            ultimaActualizacion: "24/2/2025",
            tipoConsulta: "Soporte comercial",
        },
        {
            estado: "Respondido",
            asunto: "asdasdssa",
            ultimaActualizacion: "24/2/2025",
            tipoConsulta: "Soporte comercial",
        },
    ];




    return (
        <div className="min-h-screen w-full mx-auto p-8">
            {/* Header with Navigation */}
            <div className="bg-white border-b">
                <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center h-16 space-x-8">
                        <Link href="/">
                            <h1 className="text-2xl md:text-3xl font-medium text-[#007297] pr-18 cursor-pointer">Mi área</h1>
                        </Link>
                        <div className="flex space-x-5 overflow-x-auto items-center">
                            {navItems.map((item, index) => (
                                <Link href={item.href} key={index}>
                                    <div
                                        className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-normal text-base md:text-lg whitespace-nowrap cursor-pointer ${item.active
                                            ? "border-[#007297] text-[#007297]"
                                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                            }`}
                                    >
                                        <Icon name={item.icon} size={25} />
                                        <span>{item.name}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <div className="flex items-right justify-between mb-6 border-b">
                        <h2 className="text-2xl md:text-3xl font-normal text-[#007297] mb-2">Consultas</h2>
                        <Link href="/consultas">
                            <Button variant="link" className="text-sm md:text-base text-[#007297] hover:text-[#005a73] font-normal">
                                Nueva consulta
                                <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>


                    <div className="flex justify-between mb-6 mt-10">
                        <div className="w-full max-w-md">
                            <Select>
                                <SelectTrigger className="w-full border border-gray-300 rounded">
                                    <SelectValue placeholder="Filtrar por..." />
                                    <ChevronDown className="h-4 w-4 opacity-50" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Todos las solicitudes</SelectItem>
                                    <SelectItem value="pending">Hecho</SelectItem>
                                    <SelectItem value="shipped">Solicitado</SelectItem>
                                    <SelectItem value="delivered">En progreso</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button className="bg-[#007297] hover:bg-[#005a73] text-white">Aplicar Filtro</Button>
                    </div>

                    <div className="overflow-x-auto">
                        <Table className="rounded-lg overflow-hidden border border-gray-300">
                            <TableHeader className="bg-gray-100">
                                <TableRow>
                                    <TableHead className="font-medium text-gray-700">Estado</TableHead>
                                    <TableHead className="font-medium text-gray-700">Asunto</TableHead>
                                    <TableHead className="font-medium text-gray-700">Última actualización</TableHead>
                                    <TableHead className="font-medium text-gray-700">Tipo de consulta</TableHead>
                                    <TableHead className="w-[100px]"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {consultas.map((consulta, index) => (
                                    <TableRow key={index} className="border-b border-gray-200">
                                        <TableCell>
                                            <span className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
                                                {consulta.estado}
                                            </span>
                                        </TableCell>
                                        <TableCell className="font-medium">{consulta.asunto}</TableCell>
                                        <TableCell>{consulta.ultimaActualizacion}</TableCell>
                                        <TableCell>{consulta.tipoConsulta}</TableCell>

                                        <TableCell>
                                            <div className="flex space-x-2 justify-end">
                                                <Button variant="ghost" size="icon" className="h-8 w-8 text-[#007297]">
                                                    <Printer className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>

        </div>)
}