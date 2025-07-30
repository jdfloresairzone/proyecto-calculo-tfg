import { Search, User, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"


export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-4 lg:px-2 h-16 flex items-center justify-between">

        {/* Logo a la izquierda */}
        <div className="flex items-center">
          <figure className="flex items-center justify-center p-5 lg:flex-none">
            <Link href="/">
              <img
                src="https://res.cloudinary.com/airzone/image/upload/v1707306077/images/airzone.svg"
                alt="Airzone logo"
                width={200}
                height={50}
              />
            </Link>
          </figure>
        </div>

        {/* Navigation Menu */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 text-sm font-medium">
              <span>SOLUCIONES DE CONTROL</span>
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Conectividad e integración AIDOO</DropdownMenuItem>
              <DropdownMenuItem>Control de climatización y calefacción</DropdownMenuItem>
              <DropdownMenuItem>Quality air zone - AIRQ</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 text-sm font-medium">
              <span>PROYECTOS</span>
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Software de cálculo</DropdownMenuItem>
              <DropdownMenuItem>Recursos</DropdownMenuItem>
              <DropdownMenuItem>Soporte de proyectos</DropdownMenuItem>
              <DropdownMenuItem>Herramientas web</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
            SOPORTE
          </a>

          <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
            ACADEMY
          </a>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 text-sm font-medium">
              <span>COMPRAR</span>
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Presupuestos para particulares</DropdownMenuItem>
              <DropdownMenuItem>Herramienta para presupuestos</DropdownMenuItem>
              <DropdownMenuItem>Plan renove</DropdownMenuItem>
              <DropdownMenuItem>Plazos de entrega</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 text-sm font-medium">
              <span>CONTACTO</span>
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Red de colaboradores</DropdownMenuItem>
              <DropdownMenuItem>Trabaja con nosotros</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="p-2">
            <Search className="w-5 h-5 text-gray-600" />
          </Button>

          <Button variant="ghost" size="sm" className="p-2">
            <User className="w-5 h-5 text-gray-600" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="text-sm font-medium border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            INICIAR SESIÓN
          </Button>
        </div>
      </div>
    </header>
  )
}
