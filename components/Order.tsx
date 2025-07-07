
import { Eye, Trash2, FileText, ChevronRight, ChevronDown, Pencil, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { Icon, IconData } from "./Icon/Icon"
import Link from "next/link"

export default function Budget() {

    const navItems: { name: string; icon: IconData; href: string; active: boolean }[] = [
        { name: "Presupuestos", icon: IconData.quotes, href: "/presupuestos", active: false },
        { name: "Pedidos", icon: IconData.returns, href: "/pedidos", active: true },
        { name: "Garantías", icon: IconData.warranties, href: "/garantias", active: false },
        { name: "Asistencias", icon: IconData.technicalSupport, href: "/asistencias", active: false },
        { name: "Facturas", icon: IconData.invoices, href: "/facturas", active: false },
        { name: "Albaranes", icon: IconData.deliveryNotes, href: "/albaranes", active: false },
        { name: "Precios", icon: IconData.invoices, href: "/precios", active: false },
        { name: "Consultas", icon: IconData.tickets, href: "/consultas", active: false },
    ];

    const pedidos = [
        {
            pedido: "1-22316364",
            referencia: "8172",
            fecha: "6/9/2023",
            estado: "Enviado",
            total: "4331.00",
            base: "2545.37",
        },
        {
            pedido: "1-22316303",
            referencia: "8160",
            fecha: "5/9/2023",
            estado: "Enviado",
            total: "1218.00",
            base: "718.62",
        },
        {
            pedido: "1-22316158",
            referencia: "8109",
            fecha: "1/9/2023",
            estado: "Enviado",
            total: "871.00",
            base: "448.09",
        },
        {
            pedido: "1-22315193",
            referencia: "8008",
            fecha: "4/8/2023",
            estado: "Enviado",
            total: "1098.00",
            base: "647.82",
        },
        {
            pedido: "1-22315124",
            referencia: "8004",
            fecha: "3/8/2023",
            estado: "Enviado",
            total: "1702.00",
            base: "1004.18",
        },
        {
            pedido: "1-22314812",
            referencia: "7967",
            fecha: "31/7/2023",
            estado: "Enviado",
            total: "728.00",
            base: "418.88",
        },
        {
            pedido: "1-22314703",
            referencia: "7959 (PLAN RENOVE REV202315195)",
            fecha: "28/7/2023",
            estado: "Enviado",
            total: "1920.00",
            base: "1022.47",
        },
        {
            pedido: "1-22314747",
            referencia: "7960",
            fecha: "28/7/2023",
            estado: "Enviado",
            total: "920.00",
            base: "506.26",
        },
        {
            pedido: "1-22314175",
            referencia: "7924",
            fecha: "21/7/2023",
            estado: "Enviado",
            total: "933.00",
            base: "555.25",
        },
        {
            pedido: "1-22313905",
            referencia: "7892 (PLAN RENOVE REV202315175)",
            fecha: "19/7/2023",
            estado: "Enviado",
            total: "1935.00",
            base: "1031.32",
        },
        {
            pedido: "1-22313906",
            referencia: "7891 (PLAN RENOVE REV202315174)",
            fecha: "19/7/2023",
            estado: "Enviado",
            total: "1920.00",
            base: "1022.47",
        },
        {
            pedido: "1-22313705",
            referencia: "7844",
            fecha: "17/7/2023",
            estado: "Enviado",
            total: "2674.00",
            base: "1577.66",
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
                        <h2 className="text-2xl md:text-3xl font-normal text-[#007297] mb-2">Pedidos</h2>
                        <Link href="/pedidos">
                            <Button variant="link" className="text-sm md:text-base text-[#007297] hover:text-[#005a73] font-normal">
                                Ir a pedidos
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
                                    <SelectItem value="all">Todos los pedidos</SelectItem>
                                    <SelectItem value="pending">Pendientes</SelectItem>
                                    <SelectItem value="shipped">Enviados</SelectItem>
                                    <SelectItem value="delivered">Entregados</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button className="bg-[#007297] hover:bg-[#005a73] text-white">Aplicar Filtro</Button>
                    </div>

                    <div className="overflow-x-auto">
                        <Table className="rounded-lg overflow-hidden border border-gray-300">
                            <TableHeader className="bg-gray-100">
                                <TableRow>
                                    <TableHead className="font-medium text-gray-700">Pedido</TableHead>
                                    <TableHead className="font-medium text-gray-700">Referencia</TableHead>
                                    <TableHead className="font-medium text-gray-700">Fecha</TableHead>
                                    <TableHead className="font-medium text-gray-700">Estado</TableHead>
                                    <TableHead className="font-medium text-gray-700">Total</TableHead>
                                    <TableHead className="font-medium text-gray-700">Base imponible</TableHead>
                                    <TableHead className="w-[100px]"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {pedidos.map((pedido, index) => (
                                    <TableRow key={index} className="border-b border-gray-200">
                                        <TableCell className="font-medium">{pedido.pedido}</TableCell>
                                        <TableCell>{pedido.referencia}</TableCell>
                                        <TableCell>{pedido.fecha}</TableCell>
                                        <TableCell>
                                            <span className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
                                                {pedido.estado}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <span className="font-medium">{Number(pedido.total).toFixed(2)}</span>
                                            <span className="text-xs text-gray-500 ml-1">EUR</span>
                                        </TableCell>
                                        <TableCell>
                                            <span className="font-medium">{Number(pedido.base).toFixed(2)}</span>
                                            <span className="text-xs text-gray-500 ml-1">EUR</span>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex space-x-2 justify-end">
                                                <Button variant="ghost" size="icon" className="h-8 w-8 text-[#007297]">
                                                    <Pencil className="h-4 w-4" />
                                                </Button>
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

        </div>
    )
}

