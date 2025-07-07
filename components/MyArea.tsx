import { Eye, Trash2, FileText, ChevronRight, ChevronDown, Pencil, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, Plus } from "lucide-react"

import { Icon, IconData } from "./Icon/Icon"
import Link from "next/link"

export default function MyArea() {

    const navItems: { name: string; icon: IconData; href: string; active: boolean }[] = [
        { name: "Presupuestos", icon: IconData.quotes, href: "/presupuestos", active: false },
        { name: "Pedidos", icon: IconData.returns, href: "/pedidos", active: false },
        { name: "Garantías", icon: IconData.warranties, href: "/garantias", active: false },
        { name: "Asistencias", icon: IconData.technicalSupport, href: "/asistencias", active: false },
        { name: "Facturas", icon: IconData.invoices, href: "/facturas", active: false },
        { name: "Albaranes", icon: IconData.deliveryNotes, href: "/albaranes", active: false },
        { name: "Precios", icon: IconData.invoices, href: "/precios", active: false },
        { name: "Consultas", icon: IconData.tickets, href: "/consultas", active: false },
    ];

    const budgets = [
        {
            id: "QAC25-007501",
            reference: "TEST",
            date: "12/6/2025",
            status: "Pendiente",
            total: 1544.46,
            totalGross: 2255.0,
        },
        {
            id: "QAC25-007497",
            reference: "TEST",
            date: "10/6/2025",
            status: "Pendiente",
            total: 1461.23,
            totalGross: 2081.0,
        },
        {
            id: "QAC25-007494",
            reference: "TEST",
            date: "10/6/2025",
            status: "Pendiente",
            total: 1348.56,
            totalGross: 1889.0,
        },
        {
            id: "QAC25-007493",
            reference: "TEST",
            date: "10/6/2025",
            status: "Pendiente",
            total: 2143.13,
            totalGross: 3002.0,
        },
        {
            id: "QAC25-007330",
            reference: "TEST REDIRECT",
            date: "20/5/2025",
            status: "Pendiente",
            total: 126.76,
            totalGross: 164.0,
        },
        {
            id: "12500011",
            reference: "PRUEBA DESCUENTOS",
            date: "5/6/2025",
            status: "Bloqueado",
            total: 203.5,
            totalGross: 463.0,
        },
        {
            id: "QAC25-007489",
            reference: "test",
            date: "4/6/2025",
            status: "Pendiente",
            total: 1987.59,
            totalGross: 2936.0,
        },
        {
            id: "QAC25-007473",
            reference: "test",
            date: "3/6/2025",
            status: "Pendiente",
            total: 327.43,
            totalGross: 440.0,
        },
        {
            id: "QAC25-007346",
            reference: "TEST",
            date: "20/5/2025",
            status: "Enviado al ERP",
            total: 2246.46,
            totalGross: 3198.0,
        },
        {
            id: "QAC25-007470",
            reference: "test",
            date: "3/6/2025",
            status: "Pendiente",
            total: 1020.88,
            totalGross: 1430.0,
        },
    ]

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

    const albaranes = [
        {
            albaran: "1-22316384",
            referencia: "8172",
            creacion: "8/9/2023",
        },
        {
            albaran: "1-22316342",
            referencia: "8160",
            creacion: "7/9/2023",
        },
        {
            albaran: "1-22316180",
            referencia: "8109",
            creacion: "5/9/2023",
        },
        {
            albaran: "1-22315209",
            referencia: "8008",
            creacion: "9/8/2023",
        },
        {
            albaran: "1-22315138",
            referencia: "8004",
            creacion: "8/8/2023",
        },
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
    ];

    const consultas = [
        {
            asunto: "TEST",
            fecha: "31/3/2025",
            categoria: "Soporte comercial",
            respondido: true,
        },
        {
            asunto: "Solicitud de edición de perfil de cliente",
            fecha: "10/3/2025",
            categoria: "Factura / Cambio de datos",
            respondido: true,
        },
        {
            asunto: "test",
            fecha: "5/3/2025",
            categoria: "Soporte Web",
            respondido: true,
        },
        {
            asunto: "TESTEST",
            fecha: "5/3/2025",
            categoria: "Soporte Web",
            respondido: true,
        },
        {
            asunto: "Prueba Enlace",
            fecha: "5/3/2025",
            categoria: "Soporte Web",
            respondido: true,
        },
        {
            asunto: "Prueba Enlace",
            fecha: "5/3/2025",
            categoria: "Soporte Web",
            respondido: false,
        },
    ];

    const cursos = [
        {
            titulo: "RadianT365, la nuova soluzione Airzone per Radiatori",
        },
        {
            titulo: "Dal progetto all’avviamento : ACUAZONE",
        },
        {
            titulo: "Airzone: tutte le soluzioni per il riscaldamento",
        },
        {
            titulo: "Nueva solución: Aidoo Pro Fancoil",
        },
        {
            titulo: "Aprende la configuración avanzada de tu sistema Airzone con el nuevo Webserver",
        },
        {
            titulo: "Del proyecto a la puesta en marcha: Sistema Acuazone",
        },
        {
            titulo: "Aidoo de Airzone: el mejor control para unidades Inverter/VRF",
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
                {/* Hero Banner Section */}
                <div className="relative bg-white rounded-2xl mx-4 mt-4 mb-8 shadow-lg overflow-hidden">
                    <div className="absolute top-4 right-4 z-10">
                        <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white">
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>

                    <div className="flex items-center">
                        {/* Left Arrow */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </Button>

                        <div className="flex w-full">
                            {/* Product Images Section */}
                            <div className="flex-1 p-8 flex items-center justify-center">
                                <div className="relative">
                                    <img src="https://res.cloudinary.com/airzone/image/upload/v1736329358/news-myarea/news-airzone-1.png" alt="" />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="flex-1 p-8">
                                <div className="mb-4">
                                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Lanzamiento Easyzone 25</h1>
                                    <span className="text-sm text-gray-500">12/1/2025</span>
                                </div>

                                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                                    Ya está disponible Easyzone 25, la evolución de Easyzone CAI. Esta solución renovada reúne los últimos
                                    avances de la tecnología Airzone, fruto de los más de 25 años de experiencia de la empresa en el sector
                                    de la climatización. Los últimos avances de la tecnología Airzone reunidos en una solución Descubre hoy
                                    hasta el 31 de marzo de 2025, podrás disfrutar de todas las novedades de Easyzone 25 al mismo precio que
                                    Easyzone CAI. Bajo la referencia AZE25[xxx][yy][zz][aa][b], encontrarás todo lo indispensable para la
                                    instalación de tu sistema: un plenum motorizado, una central, una pasarela de comunicación adaptada a la
                                    unidad interior y un AirQ Sensor. Para completar tu solución Easyzone, solo tendrás que añadir los
                                    termostatos y accesorios...
                                </p>

                                <div className="space-y-3">
                                    <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-800">
                                        Lanzamiento Easyzone 25 →
                                    </Button>
                                    <br />
                                    <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-800">
                                        Todas las noticias →
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Right Arrow */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center pb-4">
                        <div className="flex gap-2">
                            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                        {/* Service Card 1 */}
                        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                            <CardContent className="p-0">
                                <div className="aspect-video bg-gradient-to-br flex items-center justify-center">
                                    <img src="https://res.cloudinary.com/airzone/image/upload/v1710750747/images/my-area/assistance-quote-airzone.png" alt="" />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-900 text-sm">Presupuesto personalizado</h3>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Service Card 2 */}
                        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                            <CardContent className="p-0">
                                <div className="aspect-video bg-gradient-to-br flex items-center justify-center">
                                    <img src="https://res.cloudinary.com/airzone/image/upload/v1710750747/images/my-area/free-quotes-airzone.png" alt="" />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-900 text-sm">Asistente presupuestos Flexa</h3>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Service Card 3 */}
                        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                            <CardContent className="p-0">
                                <div className="aspect-video bg-gradient-to-br flex items-center justify-center">
                                    <img src="https://res.cloudinary.com/airzone/image/upload/v1710750747/images/my-area/warranty-airzone.png" alt="" />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-900 text-sm">Nueva garantía</h3>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Service Card 4 */}
                        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                            <CardContent className="p-0">
                                <div className="aspect-video bg-gradient-to-br flex items-center justify-center">
                                    <img src="https://res.cloudinary.com/airzone/image/upload/v1710750747/images/my-area/orders-airzone.png" alt="" />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-900 text-sm">Nueva devolución</h3>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Service Card 5 */}
                        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                            <CardContent className="p-0">
                                <div className="aspect-video bg-gradient-to-br flex items-center justify-center">
                                    <img src="https://res.cloudinary.com/airzone/image/upload/v1710750747/images/my-area/assistance-airzone.png" alt="" />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-900 text-sm">Nueva consulta</h3>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Service Card 6 */}
                        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                            <CardContent className="p-0">
                                <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                                    <img src="https://res.cloudinary.com/airzone/image/upload/images/my-area/catalog-airzone.webp" alt="" />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-900 text-sm">Catálogo profesional</h3>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Budgets Section */}
                <div className="mb-8 ">
                    <div className="flex items-right justify-between mb-6 border-b">
                        <h2 className="text-2xl md:text-3xl font-normal text-[#007297] mb-2">Presupuestos</h2>
                        <Link href="/presupuestos">
                            <Button variant="link" className="text-sm md:text-base text-[#007297] hover:text-[#005a73] font-normal">
                                Ir a presupuestos
                                <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>

                    {/* Filter Controls */}
                    <div className="flex justify-between mb-6 mt-10">
                        <div className="w-full max-w-md">
                            <Select>
                                <SelectTrigger className="w-full border border-gray-300 rounded">
                                    <SelectValue placeholder="Filtrar por..." />
                                    <ChevronDown className="h-4 w-4 opacity-50" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Todos los presupuestos</SelectItem>
                                    <SelectItem value="pending">Pendientes</SelectItem>
                                    <SelectItem value="blocked">Bloqueados</SelectItem>
                                    <SelectItem value="sent">Enviados al ERP</SelectItem>
                                </SelectContent>
                            </Select>

                        </div>
                        <Button className="bg-[#007297] hover:bg-[#005a73] text-white">Aplicar Filtro</Button>
                    </div>

                    {/* Budgets Table */}
                    <div className="overflow-x-auto">
                        <Table className="rounded-lg overflow-hidden border border-gray-300">
                            <TableHeader className="bg-gray-100">
                                <TableRow>
                                    <TableHead className="font-medium text-gray-700">Presupuesto</TableHead>
                                    <TableHead className="font-medium text-gray-700">Referencia</TableHead>
                                    <TableHead className="font-medium text-gray-700">Fecha</TableHead>
                                    <TableHead className="font-medium text-gray-700">Estado</TableHead>
                                    <TableHead className="font-medium text-gray-700">Total</TableHead>
                                    <TableHead className="font-medium text-gray-700">Total bruto</TableHead>
                                    <TableHead className="w-[100px]"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {budgets.map((budget) => (
                                    <TableRow key={budget.id} className="border-b border-gray-200">
                                        <TableCell className="font-medium">{budget.id}</TableCell>
                                        <TableCell>{budget.reference}</TableCell>
                                        <TableCell>{budget.date}</TableCell>
                                        <TableCell>
                                            <span
                                                className={`px-3 py-1 rounded-full text-sm ${budget.status === "Pendiente"
                                                    ? "bg-blue-100 text-blue-800"
                                                    : budget.status === "Bloqueado"
                                                        ? "bg-yellow-100 text-yellow-800"
                                                        : "bg-green-100 text-green-800"
                                                    }`}
                                            >
                                                {budget.status}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <span className="font-medium">{budget.total.toFixed(2)}</span>
                                            <span className="text-xs text-gray-500 ml-1">EUR</span>
                                        </TableCell>
                                        <TableCell>
                                            <span className="font-medium">{budget.totalGross.toFixed(2)}</span>
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

                {/* Orders Section */}
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

                {/* Albaranes Section */}
                <div className="mb-8">
                    <div className="flex items-right justify-between mb-6 border-b">
                        <h2 className="text-2xl md:text-3xl font-normal text-[#007297] mb-2">Últimos Albaranes</h2>
                        <Link href="/albaranes">
                            <Button variant="link" className="text-sm md:text-base text-[#007297] hover:text-[#005a73] font-normal">
                                Ir a albaranes
                                <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>

                    <div className="overflow-x-auto">
                        <Table className="rounded-lg overflow-hidden border border-gray-300">
                            <TableHeader className="bg-gray-100">
                                <TableRow>
                                    <TableHead className="font-medium text-gray-700">Albarán</TableHead>
                                    <TableHead className="font-medium text-gray-700">Referencia</TableHead>
                                    <TableHead className="font-medium text-gray-700">Fecha</TableHead>
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

                {/* Facturas Section */}
                <div className="mb-8">
                    <div className="flex items-right justify-between mb-6 border-b">
                        <h2 className="text-2xl md:text-3xl font-normal text-[#007297] mb-2">Últimas Facturas</h2>
                        <Link href="/facturas">
                            <Button variant="link" className="text-sm md:text-base text-[#007297] hover:text-[#005a73] font-normal">
                                Ir a facturas
                                <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
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

                {/* Consultas Section */}
                <div className="mb-8">
                    <div className="flex items-right justify-between mb-6 border-b">
                        <h2 className="text-2xl md:text-3xl font-normal text-[#007297] mb-2">Consultas</h2>
                        <Link href="/consultas">
                            <Button variant="link" className="text-sm md:text-base text-[#007297] hover:text-[#005a73] font-normal">
                                Ir a consultas
                                <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>

                    <div className="overflow-x-auto">
                        <Table className="rounded-lg overflow-hidden border border-gray-300">
                            <TableHeader className="bg-gray-100">
                                <TableRow>
                                    <TableHead className="font-medium text-gray-700">Estado</TableHead>
                                    <TableHead className="font-medium text-gray-700">Asunto</TableHead>
                                    <TableHead className="font-medium text-gray-700">Última actualización</TableHead>
                                    <TableHead className="font-medium text-gray-700">Categoría</TableHead>
                                    <TableHead className="font-medium text-gray-700">Respondido</TableHead>
                                    <TableHead className="w-[100px]"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {consultas.map((consulta, index) => (
                                    <TableRow key={index} className="border-b border-gray-200">
                                        <TableCell>
                                            <span className={`px-3 py-1 rounded-full text-sm ${consulta.respondido
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                {consulta.respondido ? "Respondido" : "Pendiente"}
                                            </span>
                                        </TableCell>
                                        <TableCell className="font-medium">{consulta.asunto}</TableCell>
                                        <TableCell>{consulta.fecha}</TableCell>
                                        <TableCell>{consulta.categoria}</TableCell>
                                        <TableCell>{consulta.respondido ? "Sí" : "No"}</TableCell>
                                        <TableCell>
                                            <div className="flex space-x-2 justify-end">
                                                <Button variant="ghost" size="icon" className="h-8 w-8 text-[#007297]">
                                                    <Pencil className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>

                {/* Cursos Section */}
                <div className="mb-8">
                    <div className="flex items-right justify-between mb-6 border-b">
                        <h2 className="text-2xl md:text-3xl font-normal text-[#007297] mb-2">Cursos</h2>
                        <Button variant="link" className="text-sm md:text-base text-[#007297] hover:text-[#005a73] font-normal">
                            Ir a Academy
                            <ChevronRight className="w-4 h-4" />
                        </Button>
                    </div>

                    <div className="overflow-x-auto">
                        <Table className="rounded-lg overflow-hidden border border-gray-300">
                            <TableHeader className="bg-gray-100">
                                <TableRow>
                                    <TableHead className="font-medium text-gray-700">Título del curso</TableHead>
                                    <TableHead className="w-[100px]"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {cursos.map((curso, index) => (
                                    <TableRow key={index} className="border-b border-gray-200">
                                        <TableCell className="font-medium">{curso.titulo}</TableCell>
                                        <TableCell>
                                            <div className="flex space-x-2 justify-end">
                                                <Button variant="ghost" size="icon" className="h-8 w-8 text-[#007297]">
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

