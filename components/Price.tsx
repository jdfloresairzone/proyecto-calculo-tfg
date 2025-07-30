import { ChevronRight, ChevronDown, Pencil, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { Icon, IconData } from "./Icon/Icon"
import Link from "next/link"

export default function Price() {

    const navItems: { name: string; icon: IconData; href: string; active: boolean }[] = [
        { name: "Presupuestos", icon: IconData.quotes, href: "/presupuestos", active: false },
        { name: "Pedidos", icon: IconData.returns, href: "/pedidos", active: false },
        { name: "Garantías", icon: IconData.warranties, href: "/garantias", active: false },
        { name: "Asistencias", icon: IconData.technicalSupport, href: "/asistencias", active: false },
        { name: "Facturas", icon: IconData.invoices, href: "/facturas", active: false },
        { name: "Albaranes", icon: IconData.deliveryNotes, href: "/albaranes", active: false },
        { name: "Precios", icon: IconData.invoices, href: "/precios", active: true },
        { name: "Consultas", icon: IconData.tickets, href: "/consultas", active: false },
    ];


    const precios = [
        {
            codigo: "AZXCSMASTERSB",
            nombre: "",
            precioUnitario: "188.00",
            precioNeto: "150.40",
        },
        {
            codigo: "AZEZ8GM0BS02XS3",
            nombre: "AirzoneEasyzone CAI Medium IB8 GM0 3x200 02XS",
            precioUnitario: "1095.00",
            precioNeto: "646.05",
        },
        {
            codigo: "AZSTPREMIUM",
            nombre: "5 años de garantía + visita preinstalación + puesta en marcha + asociación Webserver y APP",
            precioUnitario: "440.00",
            precioNeto: "352.00",
        },
        {
            codigo: "AZPV0ACCVAL",
            nombre: "Adaptador para cabezal termostático Airzone",
            precioUnitario: "10.00",
            precioNeto: "5.90",
        },
        {
            codigo: "AZPV6ADPTHTB",
            nombre: "Adaptador para termostatos AZ6",
            precioUnitario: "70.00",
            precioNeto: "41.30",
        },
        {
            codigo: "AZAI6KNX2BA1",
            nombre: "Aidoo KNX v2.0 Baxi R32",
            precioUnitario: "163.00",
            precioNeto: "101.06",
        },
        {
            codigo: "AZAI6KNX2BAX",
            nombre: "Aidoo KNX v2.0 Baxi R410a",
            precioUnitario: "163.00",
            precioNeto: "101.06",
        },
        {
            codigo: "AZAI6KNX2DA2",
            nombre: "Aidoo KNX v2.0 Daikin Altherma 3",
            precioUnitario: "201.00",
            precioNeto: "124.62",
        },
        {
            codigo: "AZAI6KNX2DA0",
            nombre: "Aidoo KNX v2.0 Daikin Residential",
            precioUnitario: "163.00",
            precioNeto: "101.06",
        },
        {
            codigo: "AZAI6KNX2DA1",
            nombre: "Aidoo KNX v2.0 Daikin Sky Air / VRV",
            precioUnitario: "163.00",
            precioNeto: "101.06",
        },
        {
            codigo: "AZAI6KNX2FUJ",
            nombre: "Aidoo KNX v2.0 Fujitsu 3 Wires",
            precioUnitario: "163.00",
            precioNeto: "101.06",
        },
        {
            codigo: "AZAI6KNX2FU2",
            nombre: "Aidoo KNX v2.0 Fujitsu GEN2",
            precioUnitario: "163.00",
            precioNeto: "101.06",
        },
        {
            codigo: "AZAI6KNX2GG1",
            nombre: "Aidoo KNX v2.0 GG1",
            precioUnitario: "163.00",
            precioNeto: "101.06",
        },
        {
            codigo: "AZAI6KNX2GG2",
            nombre: "Aidoo KNX v2.0 GG2",
            precioUnitario: "163.00",
            precioNeto: "101.06",
        },
        {
            codigo: "AZAI6KNX2GG3",
            nombre: "Aidoo KNX v2.0 GG3",
            precioUnitario: "163.00",
            precioNeto: "101.06",
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
                        <h2 className="text-2xl md:text-3xl font-normal text-[#007297] mb-2">Listado de precios</h2>
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
                                    <TableHead className="font-medium text-gray-700">Código</TableHead>
                                    <TableHead className="font-medium text-gray-700">Nombre</TableHead>
                                    <TableHead className="font-medium text-gray-700">Precio unitario</TableHead>
                                    <TableHead className="font-medium text-gray-700">Precio neto</TableHead>
                                    <TableHead className="w-[100px]"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {precios.map((precio, index) => (
                                    <TableRow key={index} className="border-b border-gray-200">
                                        <TableCell className="font-medium">{precio.codigo}</TableCell>
                                        <TableCell>{precio.nombre}</TableCell>
                                        <TableCell>
                                            <span className="font-medium">{Number(precio.precioNeto).toFixed(2)}</span>
                                            <span className="text-xs text-gray-500 ml-1">EUR</span>
                                        </TableCell>
                                        <TableCell>
                                            <span className="font-medium">{Number(precio.precioUnitario).toFixed(2)}</span>
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