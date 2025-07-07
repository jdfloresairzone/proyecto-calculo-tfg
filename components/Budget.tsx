
import { Eye, Trash2, FileText, ChevronRight, ChevronDown, Pencil, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { Icon, IconData } from "./Icon/Icon"
import Link from "next/link"

export default function Budget() {
  const templates = [
    {
      id: 1,
      title: "PLANTILLA",
      subtitle: "Presupuesto personalizado",
      type: "personalizado",
    },
    {
      id: 2,
      title: "Easyzone de 4 zonas Daikin",
      subtitle: "Easyzone",
      type: "easyzone",
    },
    {
      id: 3,
      title: "ESTE TEXTO DE EJEMPLO PARA MI PLANTILLA FAVORITA NO CREO QUE LO USE NUNCA MÁSSSSSSSSSSSSSS",
      subtitle: "Presupuesto personalizado",
      type: "personalizado",
    },
    {
      id: 4,
      title: "Test Alfonso con un nombre largo a ver si ocupa dos líneas",
      subtitle: "Presupuesto personalizado",
      type: "personalizado",
    },
  ]

  const navItems: { name: string; icon: IconData; href: string; active: boolean }[] = [
    { name: "Presupuestos", icon: IconData.quotes, href: "/presupuestos", active: true },
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
        {/* Templates Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-normal text-[#007297] mb-6">Plantillas de presupuestos</h2>

          {/* Template Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {templates.map((template) => (
              <Card key={template.id} className="hover:shadow-lg transition-shadow flex flex-col h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base md:text-lg font-normal text-[#007297] line-clamp-3 leading-tight">
                    {template.title}
                  </CardTitle>
                  <p className="text-sm md:text-base text-gray-500 mt-2 font-normal">{template.subtitle}</p>
                </CardHeader>
                <CardContent className="pt-0 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <Button variant="ghost" size="sm" className="text-sm md:text-base text-gray-600 hover:text-gray-800 font-normal">
                      <Eye className="w-4 h-4 mr-1" />
                      Ver plantilla
                    </Button>
                    <Button variant="ghost" size="sm" className="text-sm md:text-base text-gray-600 hover:text-gray-800 font-normal">
                      <Trash2 className="w-4 h-4 mr-1" />
                      Borrar
                    </Button>
                  </div>
                  <div className="mt-auto">
                    <Button className="w-full bg-[#007297] hover:bg-[#005a73] text-white text-sm md:text-base font-normal">
                      <FileText className="w-4 h-4 mr-2" />
                      Usar para presupuesto
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center space-x-4">
            <Button variant="ghost" className="text-sm md:text-base text-[#007297] border-b-2 border-[#007297] rounded-none font-normal">
              1
            </Button>
            <Button variant="ghost" className="text-sm md:text-base text-gray-500 hover:text-gray-700 font-normal">
              2
            </Button>
            <Button variant="ghost" className="text-sm md:text-base text-gray-500 hover:text-gray-700 font-normal">
              Siguiente
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>

        {/* Budgets Section */}
        <div className="mb-8 ">
          <div className="flex items-right justify-between mb-6 border-b">
            <h2 className="text-2xl md:text-3xl font-normal text-[#007297] mb-2">Presupuestos</h2>
            <Link href="/herramienta-de-presupuestos">
              <Button variant="link" className="text-sm md:text-base text-[#007297] hover:text-[#005a73] font-normal">
                Nuevo presupuesto
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
      </div>
    </div>
  )
}

