"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Trash2 } from 'lucide-react'
import { type UISystem, type UIZone } from "../../types/system-config"

type Props = {
  containerRef?: React.Ref<HTMLDivElement>
  disabled?: boolean
  currentSystem: UISystem
  addZone: () => void
  removeZone: (zoneId: number) => void
  updateZone: (zoneId: number, field: keyof UIZone, value: any) => void
  updateSystem: (field: keyof UISystem, value: any) => void
  onProceed: () => void
}

export function SystemDetailSection({
  containerRef,
  disabled = false,
  currentSystem,
  addZone,
  removeZone,
  updateZone,
  updateSystem,
  onProceed,
}: Props) {
  return (
    <Card className={disabled ? "opacity-50 pointer-events-none" : ""} ref={containerRef}>
      <CardHeader>
        <CardTitle className="text-[#007297]">Sistema de Configuración</CardTitle>
        <CardDescription>Datos del sistema y de las zonas que contempla el sistema</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-sm text-gray-600">
          Para configurar el sistema, necesitará al menos un termostato Blueface o un termostato Think.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="text-blue-600">Nombre del sistema</Label>
            <Input
              value={currentSystem.name}
              onChange={(e) => updateSystem("name", e.target.value)}
              className="bg-gray-50"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-blue-600">Tipo de conducto</Label>
            <Select
              value={currentSystem.duct_type_iso}
              onValueChange={(value) => updateSystem("duct_type_iso", value as UISystem["duct_type_iso"])}
              disabled
            >
              <SelectTrigger className="bg-gray-50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="CT_FX">Flexible</SelectItem>
                <SelectItem value="CT_RI">Rígido</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-[#007297]">Zonas del Sistema (Mínimo 2 zonas)</h3>
          </div>

          {currentSystem.zones.map((zone) => (
            <Card key={zone.id} className="border-l-4 border-l-blue-500">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-[#007297] text-lg">{zone.name}</CardTitle>
                  {currentSystem.zones.length > 2 && (
                    <Button
                      onClick={() => removeZone(zone.id)}
                      variant="outline"
                      size="sm"
                      className="text-red-600 hover:text-red-700"
                      title="Mínimo 2 zonas requeridas"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label className="text-blue-600">Nombre</Label>
                    <Input
                      value={zone.name}
                      onChange={(e) => updateZone(zone.id, "name", e.target.value)}
                      className="bg-gray-50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-blue-600">Altura (m)</Label>
                    <Input
                      value={zone.height}
                      onChange={(e) => updateZone(zone.id, "height", Number(e.target.value))}
                      className="bg-gray-50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-blue-600">Superficie (m2)</Label>
                    <Input
                      value={zone.area}
                      onChange={(e) => updateZone(zone.id, "area", Number(e.target.value))}
                      className="bg-gray-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <Label className="text-blue-600">Tipo de climatización</Label>
                    <RadioGroup
                      value={zone.climatisation_type_iso}
                      onValueChange={(value) => updateZone(zone.id, "climatisation_type_iso", value)}
                      className="flex gap-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="CLT_A" id={`aire-${zone.id}`} disabled />
                        <Label htmlFor={`aire-${zone.id}`}>Aire</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="CLT_R" id={`radiante-${zone.id}`} disabled />
                        <Label htmlFor={`radiante-${zone.id}`}>Radiante</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="CLT_RA" id={`aire-radiante-${zone.id}`} disabled />
                        <Label htmlFor={`aire-radiante-${zone.id}`}>Aire y Radiante</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-blue-600">Unidades zonificadas</Label>
                    <RadioGroup
                      value={String(zone.zonified)}
                      onValueChange={(value) => updateZone(zone.id, "zonified", Number(value) as 0 | 1)}
                      className="flex gap-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1" id={`si-${zone.id}`} disabled />
                        <Label htmlFor={`si-${zone.id}`}>Sí</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="0" id={`no-${zone.id}`} disabled />
                        <Label htmlFor={`no-${zone.id}`}>No</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label className="text-blue-600">Termostato</Label>
                    <Select
                      value={zone.interface_iso}
                      onValueChange={(value) => updateZone(zone.id, "interface_iso", value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="TTO_TYPE_BLUEFACE">Blueface</SelectItem>
                        <SelectItem value="TTO_TYPE_THINK">Think</SelectItem>
                        <SelectItem value="TTO_TYPE_LITE">Lite</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-blue-600">Color</Label>
                    <Select
                      value={zone.color_iso}
                      onValueChange={(value) => updateZone(zone.id, "color_iso", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar color" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="TTO_COLOR_WHITE">Blanco</SelectItem>
                        <SelectItem value="TTO_COLOR_BLACK">Negro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-blue-600">Conexión</Label>
                    <Select
                      value={zone.connection_iso}
                      onValueChange={(value) => updateZone(zone.id, "connection_iso", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar conexión" />
                      </SelectTrigger>
                      <SelectContent>
                        {(zone.interface_iso === "TTO_TYPE_BLUEFACE" || zone.interface_iso === "TTO_TYPE_LITE") && (
                          <SelectItem value="CONNETION_TYPE_C">Cable</SelectItem>
                        )}
                        {(zone.interface_iso === "TTO_TYPE_THINK" || zone.interface_iso === "TTO_TYPE_LITE") && (
                          <SelectItem value="CONNETION_TYPE_R">Radio</SelectItem>
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label className="text-blue-600">Tipo de equipo</Label>
                    <Select disabled defaultValue="canalizable">
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar tipo de equipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="canalizable">Unidad de conducto</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-blue-600">Tipo de difusión</Label>
                    <Select
                      value={zone.diffusion_type_iso}
                      onValueChange={(value) => updateZone(zone.id, "diffusion_type_iso", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="DT_CG">Compuerta circular monotorizada</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-blue-600">Número de elementos de difusión</Label>
                    <Select
                      value={String(zone.quote_diffusion_elements_quantity)}
                      onValueChange={(value) => updateZone(zone.id, "quote_diffusion_elements_quantity", Number(value))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar numero" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-end">
          <Button onClick={addZone} variant="outline" className="flex items-center gap-2 px-8 mr-4">
            <Plus className="h-4 w-4" />
            Añadir Zona
          </Button>

          <Button
            className="bg-[#007297] hover:bg-[#005a73] px-8"
            onClick={onProceed}
            disabled={currentSystem.zones.length < 2}
          >
            PROCEDER
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
