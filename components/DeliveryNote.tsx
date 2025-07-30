import { ChevronRight, ChevronDown, Pencil, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { Icon, IconData } from "./Icon/Icon"
import Link from "next/link"

export default function DeliveryNote() {

    const navItems: { name: string; icon: IconData; href: string; active: boolean }[] = [
        { name: "Presupuestos", icon: IconData.quotes, href: "/presupuestos", active: false },
        { name: "Pedidos", icon: IconData.returns, href: "/pedidos", active: false },
        { name: "Garantías", icon: IconData.warranties, href: "/garantias", active: false },
        { name: "Asistencias", icon: IconData.technicalSupport, href: "/asistencias", active: false },
        { name: "Facturas", icon: IconData.invoices, href: "/facturas", active: false },
        { name: "Albaranes", icon: IconData.deliveryNotes, href: "/albaranes", active: true },
        { name: "Precios", icon: IconData.invoices, href: "/precios", active: false },
        { name: "Consultas", icon: IconData.tickets, href: "/consultas", active: false },
    ];


    const albaranes = [
        {
            albaran: "1-22316384",
            referencia: "8172",
            creacion: "8/9/2023",
            estado: "Servido",
            base: "2545.00",
            total: "3079.90",
        },
        {
            albaran: "1-22316342",
            referencia: "8160",
            creacion: "7/9/2023",
            estado: "Servido",
            base: "718.00",
            total: "869.53",
        },
        {
            albaran: "1-22316180",
            referencia: "8109",
            creacion: "5/9/2023",
            estado: "Servido",
            base: "448.00",
            total: "542.19",
        },
        {
            albaran: "1-22315209",
            referencia: "8008",
            creacion: "9/8/2023",
            estado: "Servido",
            base: "647.00",
            total: "783.86",
        },
        {
            albaran: "1-22315138",
            referencia: "8004",
            creacion: "8/8/2023",
            estado: "Servido",
            base: "1004.00",
            total: "1215.06",
        },
        {
            albaran: "1-22314898",
            referencia: "7960",
            creacion: "3/8/2023",
            estado: "Servido",
            base: "506.00",
            total: "612.57",
        },
        {
            albaran: "1-22314899",
            referencia: "7967",
            creacion: "3/8/2023",
            estado: "Servido",
            base: "418.00",
            total: "506.84",
        },
        {
            albaran: "1-22314753",
            referencia: "7959 (PLAN RENOVE REV202315195)",
            creacion: "2/8/2023",
            estado: "Servido",
            base: "1022.00",
            total: "1237.19",
        },
        {
            albaran: "1-22314267",
            referencia: "7924",
            creacion: "26/7/2023",
            estado: "Servido",
            base: "555.00",
            total: "671.85",
        },
        {
            albaran: "1-22313926",
            referencia: "7892 (PLAN RENOVE REV202315175)",
            creacion: "21/7/2023",
            estado: "Servido",
            base: "1031.00",
            total: "1247.90",
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
                        <h2 className="text-2xl md:text-3xl font-normal text-[#007297] mb-2">Albaranes</h2>
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
                                    <TableHead className="font-medium text-gray-700">Albarán</TableHead>
                                    <TableHead className="font-medium text-gray-700">Referencia</TableHead>
                                    <TableHead className="font-medium text-gray-700">Creación</TableHead>
                                    <TableHead className="font-medium text-gray-700">Estado</TableHead>
                                    <TableHead className="font-medium text-gray-700">Base</TableHead>
                                    <TableHead className="font-medium text-gray-700">Total</TableHead>
                                    <TableHead className="w-[100px]"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {albaranes.map((albaran, index) => (
                                    <TableRow key={index} className="border-b border-gray-200">
                                        <TableCell className="font-medium">{albaran.albaran}</TableCell>
                                        <TableCell>{albaran.referencia}</TableCell>
                                        <TableCell>{albaran.creacion}</TableCell>
                                        <TableCell>
                                            <span className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
                                                {albaran.estado}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <span className="font-medium">{Number(albaran.base).toFixed(2)}</span>
                                            <span className="text-xs text-gray-500 ml-1">EUR</span>
                                        </TableCell>
                                        <TableCell>
                                            <span className="font-medium">{Number(albaran.total).toFixed(2)}</span>
                                            <span className="text-xs text-gray-500 ml-1">EUR</span>
                                        </TableCell>
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