import { ChevronRight, ChevronDown, Pencil, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { Icon, IconData } from "./Icon/Icon"
import Link from "next/link"

export default function Invoice() {

    const navItems: { name: string; icon: IconData; href: string; active: boolean }[] = [
        { name: "Presupuestos", icon: IconData.quotes, href: "/presupuestos", active: false },
        { name: "Pedidos", icon: IconData.returns, href: "/pedidos", active: false },
        { name: "Garantías", icon: IconData.warranties, href: "/garantias", active: false },
        { name: "Asistencias", icon: IconData.technicalSupport, href: "/asistencias", active: false },
        { name: "Facturas", icon: IconData.invoices, href: "/facturas", active: true },
        { name: "Albaranes", icon: IconData.deliveryNotes, href: "/albaranes", active: false },
        { name: "Precios", icon: IconData.invoices, href: "/precios", active: false },
        { name: "Consultas", icon: IconData.tickets, href: "/consultas", active: false },
    ];

    
    const facturas = [
        {
            factura: "1-12510439",
            referencia: "13400",
            fecha: "20/5/2025",
            base: "1467.00",
            total: "1775.47",
        },
        {
            factura: "1-12510440",
            referencia: "13395",
            fecha: "20/5/2025",
            base: "1349.00",
            total: "1633.44",
        },
        {
            factura: "1-12509969",
            referencia: "13336",
            fecha: "14/5/2025",
            base: "686.00",
            total: "830.98",
        },
        {
            factura: "1-12509200",
            referencia: "13225",
            fecha: "6/5/2025",
            base: "557.00",
            total: "674.08",
        },
        {
            factura: "1-12508756",
            referencia: "13196",
            fecha: "28/4/2025",
            base: "1650.00",
            total: "1996.78",
        },
        {
            factura: "1-12508196",
            referencia: "13096",
            fecha: "16/4/2025",
            base: "3960.00",
            total: "4791.60",
        },
        {
            factura: "1-12507959",
            referencia: "13095",
            fecha: "14/4/2025",
            base: "372.00",
            total: "450.97",
        },
        {
            factura: "1-12507731",
            referencia: "13005",
            fecha: "10/4/2025",
            base: "10855.00",
            total: "13135.07",
        },
        {
            factura: "1-12507583",
            referencia: "13031",
            fecha: "9/4/2025",
            base: "5153.00",
            total: "6235.77",
        },
        {
            factura: "1-12507172",
            referencia: "13011",
            fecha: "4/4/2025",
            base: "1291.00",
            total: "1562.73",
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
                        <h2 className="text-2xl md:text-3xl font-normal text-[#007297] mb-2">Facturas</h2>
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
                                    <TableHead className="font-medium text-gray-700">Factura</TableHead>
                                    <TableHead className="font-medium text-gray-700">Referencia</TableHead>
                                    <TableHead className="font-medium text-gray-700">Fecha</TableHead>
                                    <TableHead className="font-medium text-gray-700">Base imponible</TableHead>
                                    <TableHead className="font-medium text-gray-700">Total</TableHead>
                                    <TableHead className="w-[100px]"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {facturas.map((factura, index) => (
                                    <TableRow key={index} className="border-b border-gray-200">
                                        <TableCell className="font-medium">{factura.factura}</TableCell>
                                        <TableCell>{factura.referencia}</TableCell>
                                        <TableCell>{factura.fecha}</TableCell>
                                        <TableCell>
                                            <span className="font-medium">{Number(factura.base).toFixed(2)}</span>
                                            <span className="text-xs text-gray-500 ml-1">EUR</span>
                                        </TableCell>
                                        <TableCell>
                                            <span className="font-medium">{Number(factura.total).toFixed(2)}</span>
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