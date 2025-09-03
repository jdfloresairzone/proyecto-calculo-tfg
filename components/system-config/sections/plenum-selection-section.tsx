"use client"

import { Info } from 'lucide-react'
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
  currentSystem: UISystem
  updateIumodel: (field: keyof UISystem["iumodel"], value: any) => void
  onProceed: () => void
}

export function PlenumSelectionSection({
  containerRef,
  disabled = false,
  currentSystem,
  updateIumodel,
  onProceed,
}: Props) {
  return (
    <Card className={disabled ? "opacity-50 pointer-events-none" : ""} ref={containerRef}>
      <CardHeader>
        <CardTitle className="text-[#007297]">Selección plenum motorizado</CardTitle>
        <CardDescription>Dimensionamiento del plenum motorizado AIRZONE</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <h3 className="text-lg font-medium text-[#007297]">Sistema 1</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="text-blue-600">Tipo de plenum</Label>
            <Select
              value={currentSystem.iumodel.plenum_type}
              onValueChange={(value) => updateIumodel("plenum_type", value)}
            >
              <SelectTrigger className="bg-gray-50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ST">Plenum Standard</SelectItem>
                <SelectItem value="MD">Plenum Medium</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-blue-600">Número de compuertas</Label>
            <Select
              value={String(currentSystem.iumodel.dampers)}
              onValueChange={(value) => updateIumodel("dampers", Number(value))}
            >
              <SelectTrigger className="bg-gray-50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <Info className="h-5 w-5 text-blue-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                Importante: este plenum se suministra con {currentSystem.iumodel.dampers} compuertas motorizadas de
                las 5 compuertas disponibles.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-4 gap-4 font-medium text-blue-600 text-sm">
            <div>Zona</div>
            <div>Compuerta (mm)</div>
            <div>Caudal (m3/h)</div>
            <div>Velocidad en duct (m/s)</div>
          </div>

          {currentSystem.zones.slice(0, currentSystem.iumodel.dampers).map((zone) => (
            <div key={zone.id} className="grid grid-cols-4 gap-4 items-center">
              <div className="bg-gray-100 p-2 rounded text-sm font-medium">{zone.name}</div>
              <div className="bg-gray-100 p-2 rounded text-sm">
                {zone.diffusion_configuration.quantity_return} x {zone.diffusion_configuration.real_height}
              </div>
              <div className="bg-gray-100 p-2 rounded text-sm">{zone.dumper_configuration.flow}</div>
              <div className="flex items-center gap-2">
                <Input
                  value={String(zone.dumper_configuration.duct_speed)}
                  className="bg-red-50 border-red-200 text-sm"
                  disabled
                  readOnly
                />
                <div className="w-6 h-6 bg-yellow-400 rounded-sm flex items-center justify-center">
                  <span className="text-white text-xs font-bold">!</span>
                </div>
              </div>
            </div>
          ))}
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
