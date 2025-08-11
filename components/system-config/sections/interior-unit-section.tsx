"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { type UISystem } from "../../types/system-config"
import React from "react";

type Props = {
  containerRef?: React.Ref<HTMLDivElement>
  disabled?: boolean
  brands: { id: number; name: string; iso_brand: string }[]
  currentSystem: UISystem
  updateIumodel: (field: keyof UISystem["iumodel"], value: any) => void
  onProceed: () => void
}

export function InteriorUnitSection({
  containerRef,
  disabled = false,
  brands,
  currentSystem,
  updateIumodel,
  onProceed,
}: Props) {
  return (
    <Card className={disabled ? "opacity-50 pointer-events-none" : ""} ref={containerRef}>
      <CardHeader>
        <CardTitle className="text-[#007297]">Selección unidad interior</CardTitle>
        <CardDescription>Dimensionamiento del equipo de aire acondicionado</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <h3 className="text-lg font-medium text-[#007297]">Sistema 1</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label className="text-blue-600">Tipo de equipo</Label>
            <Input className="bg-gray-50" placeholder="Unidad de conducto" disabled />
          </div>

          <div className="space-y-2">
            <Label className="text-blue-600">Marca</Label>
            <div className="relative">
              <Select
                value={currentSystem.iumodel.brand_name}
                onValueChange={(value) => updateIumodel("brand_name", value)}
                disabled={disabled}
              >
                <SelectTrigger className="bg-gray-50 pr-10">
                  <SelectValue placeholder="Seleccionar marca" />
                </SelectTrigger>
                <SelectContent className="z-50 max-h-60 overflow-y-auto">
                  {brands.map((brand) => (
                    <SelectItem key={brand.id} value={brand.name}>
                      {brand.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-blue-600">Modelo</Label>
            <div className="relative">
              <Select
                value={currentSystem.iumodel.iumodel_name}
                onValueChange={(value) => updateIumodel("iumodel_name", value)}
                disabled={disabled}
              >
                <SelectTrigger className="bg-gray-50 pr-10">
                  <SelectValue placeholder="Seleccionar modelo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ADEA100A">ADEA100A</SelectItem>
                  <SelectItem value="ADEA71A">ADEA71A</SelectItem>
                  <SelectItem value="ADEA50A">ADEA50A</SelectItem>
                  <SelectItem value="ADEA35A">ADEA35A</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label className="text-blue-600">Potencia frigorífica Kw</Label>
            <Input
              value={String(currentSystem.iumodel.cold_power_kw ?? "")}
              onChange={(e) => updateIumodel("cold_power_kw", Number(e.target.value))}
              className="bg-gray-50"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-blue-600">Caudal (m3/h)</Label>
            <Input
              value={String(currentSystem.iumodel.maximum_flow_m3h)}
              className="bg-gray-50"
              disabled
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button className="bg-[#007297] hover:bg-[#005a73] text-white px-8" onClick={onProceed}>
            PROCEDER
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
