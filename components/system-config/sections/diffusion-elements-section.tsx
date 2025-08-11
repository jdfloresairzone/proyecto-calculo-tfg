"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { type UISystem } from "../../types/system-config"

type Props = {
  containerRef?: React.Ref<HTMLDivElement>
  disabled?: boolean
  currentSystem: UISystem
  setCurrentSystem: React.Dispatch<React.SetStateAction<UISystem>>
  updateZoneDiffusionImpulsion: (
    zoneId: number,
    field: keyof UISystem["zones"][number]["diffusion_configuration"]["impulsion"],
    value: any
  ) => void
  updateZoneDiffusion: (
    zoneId: number,
    field: keyof UISystem["zones"][number]["diffusion_configuration"],
    value: any
  ) => void
  commonReturnType: string
  setCommonReturnType: (v: string) => void
  commonReturnHeight: string
  setCommonReturnHeight: (v: string) => void
  commonReturnDimensions: string
  setCommonReturnDimensions: (v: string) => void
}

export function DiffusionElementsSection({
  containerRef,
  disabled = false,
  currentSystem,
  setCurrentSystem,
  updateZoneDiffusionImpulsion,
  updateZoneDiffusion,
  commonReturnType,
  setCommonReturnType,
  commonReturnHeight,
  setCommonReturnHeight,
  commonReturnDimensions,
  setCommonReturnDimensions,
}: Props) {
  return (
    <Card className={disabled ? "opacity-50 pointer-events-none" : ""} ref={containerRef}>
      <CardHeader>
        <CardTitle className="text-[#007297]">Selección elemento de difusión</CardTitle>
        <CardDescription>Dimensionamiento de rejillas o difusores AIRZONE</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <h3 className="text-lg font-medium text-[#007297]">Sistema 1</h3>

        <div className="space-y-4">
          <Label className="text-blue-600">Incluir Largueros</Label>
          <div className="flex gap-6">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="stringers-si"
                checked={currentSystem.include_largueros}
                onCheckedChange={(checked: boolean) =>
                  setCurrentSystem((prev) => ({ ...prev, include_largueros: checked }))
                }
                disabled={disabled}
              />
              <Label htmlFor="stringers-si">Sí</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="stringers-no"
                checked={!currentSystem.include_largueros}
                onCheckedChange={(checked: boolean) =>
                  setCurrentSystem((prev) => ({ ...prev, include_largueros: !checked }))
                }
                disabled={disabled}
              />
              <Label htmlFor="stringers-no">No</Label>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-7 gap-4 font-medium text-blue-600 text-sm">
            <div>Zona</div>
            <div>Impulsión</div>
            <div>Retorno</div>
            <div>Altura Max (mm)</div>
            <div>Dimensiones (mm)</div>
            <div>Caudal (m3/h)</div>
            <div>Velocidad de salida (m/s)</div>
          </div>

          {currentSystem.zones.slice(0, 2).map((zone) => (
            <div key={zone.id} className="grid grid-cols-7 gap-4 items-start">
              <div className="bg-gray-100 p-2 rounded text-sm font-medium">{zone.name}</div>

              <div className="flex flex-col gap-1">
                <Select
                  value={zone.diffusion_configuration.impulsion.product_iso}
                  onValueChange={(value) => updateZoneDiffusionImpulsion(zone.id, "product_iso", value)}
                >
                  <SelectTrigger className="bg-gray-50 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="RDHV">RDHV</SelectItem>
                    <SelectItem value="RTHV">RTHV</SelectItem>
                    <SelectItem value="RLOO">RLOO</SelectItem>
                    <SelectItem value="RLOV">RLOV</SelectItem>
                    <SelectItem value="RLQI">RLQI</SelectItem>
                    <SelectItem value="RLQ2">RLQ2</SelectItem>
                    <SelectItem value="RLQV">RLQV</SelectItem>
                  </SelectContent>
                </Select>
                <div className="text-xs text-gray-500">
                  <p>Color: Blanco</p>
                  <p>Fijación: Clip</p>
                  <p>Regulación: Sin regulación</p>
                  <p>Con plenum aislado</p>
                  <button className="text-blue-500 hover:text-blue-700">Editar</button>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <Select
                  value={currentSystem.return_configuration.return.product_iso}
                  onValueChange={(value) =>
                    setCurrentSystem((prev) => ({
                      ...prev,
                      return_configuration: {
                        ...prev.return_configuration,
                        return: {
                          ...prev.return_configuration.return,
                          product_iso: value,
                        },
                      },
                    }))
                  }
                >
                  <SelectTrigger className="bg-gray-50 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="RSDR">RSDR</SelectItem>
                    <SelectItem value="RSQU">RSQU</SelectItem>
                    <SelectItem value="RSAL">RSAL</SelectItem>
                  </SelectContent>
                </Select>
                <div className="text-xs text-gray-500">
                  <p>Color: Blanco</p>
                  <p>Fijación: Clip</p>
                  <p>Regulación: Sin regulación</p>
                  <p>Con plenum aislado</p>
                  <button className="text-blue-500 hover:text-blue-700">Editar</button>
                </div>
              </div>

              <div>
                <Select
                  value={String(zone.diffusion_configuration.max_height)}
                  onValueChange={(value) => updateZoneDiffusion(zone.id, "max_height", parseInt(value))}
                >
                  <SelectTrigger className="bg-gray-50 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[100, 150, 200, 250, 300, 350, 400].map((val) => (
                      <SelectItem key={val} value={String(val)}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <Select defaultValue="200x150" disabled={disabled}>
                  <SelectTrigger className="bg-gray-50 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="200x150">
                      {zone.diffusion_configuration.quantity_return} x {zone.diffusion_configuration.real_width} x {zone.diffusion_configuration.real_height}
                    </SelectItem>
                  </SelectContent>
                </Select>
                <div className="w-6 h-6 bg-blue-500 rounded-sm flex items-center justify-center">
                  <span className="text-white text-xs font-bold">S</span>
                </div>
              </div>

              <div className="bg-gray-100 p-2 rounded text-sm">
                {zone.diffusion_configuration.flow}
              </div>

              <div className="flex items-center gap-2">
                <Input
                  value={String(zone.diffusion_configuration.output_speed)}
                  className="bg-gray-50 text-sm"
                  disabled={disabled}
                  readOnly={disabled}
                />
                <div className="w-6 h-6 bg-yellow-400 rounded-sm flex items-center justify-center">
                  <span className="text-white text-xs font-bold">!</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4 border-t pt-6">
          <div className="grid grid-cols-6 gap-4 font-medium text-blue-600 text-sm">
            <div>Retorno común</div>
            <div>Altura Max (mm)</div>
            <div>Dimensiones (mm)</div>
            <div>Caudal (m3/h)</div>
            <div>Velocidad de salida (m/s)</div>
            <div></div>
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-6 gap-4 items-center">
              <div>
                <Select value={commonReturnType} onValueChange={setCommonReturnType} disabled={disabled}>
                  <SelectTrigger className="bg-gray-50 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="RRFR">RRFR</SelectItem>
                    <SelectItem value="RRFL">RRFL</SelectItem>
                    <SelectItem value="RRFC">RRFC</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select value={commonReturnHeight} onValueChange={setCommonReturnHeight} disabled={disabled}>
                  <SelectTrigger className="bg-gray-50 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="300">300</SelectItem>
                    <SelectItem value="400">400</SelectItem>
                    <SelectItem value="500">500</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <Select value={commonReturnDimensions} onValueChange={setCommonReturnDimensions} disabled={disabled}>
                  <SelectTrigger className="bg-gray-50 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="400x400">1x 400 x 400</SelectItem>
                    <SelectItem value="500x400">1x 500 x 400</SelectItem>
                    <SelectItem value="600x400">1x 600 x 400</SelectItem>
                  </SelectContent>
                </Select>
                <div className="w-6 h-6 bg-blue-500 rounded-sm flex items-center justify-center">
                  <span className="text-white text-xs font-bold">S</span>
                </div>
              </div>
              <div className="bg-gray-100 p-2 rounded text-sm">150</div>
              <div>
                <Input value="0.4" className="bg-gray-50 text-sm" disabled={disabled} readOnly />
              </div>
              <div></div>
            </div>
            <div className="text-xs text-gray-500 ml-4">
              <p>Color: Blanco</p>
              <p>Fijación: Tornillo</p>
              <p>Regulación: Sin regulación</p>
              <p>Sin plenum aislado</p>
              <button className="text-blue-500 hover:text-blue-700">Editar</button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
