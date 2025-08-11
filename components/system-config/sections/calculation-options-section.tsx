"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import React from "react";
import { OpcionesCalculo } from "@/lib/requests/quote"


type Props = {
  containerRef?: React.Ref<HTMLDivElement>
  disabled?: boolean
  calculationType: string
  setCalculationType: (v: string) => void
  systemAirVelocity: string
  setSystemAirVelocity: (v: string) => void
  diffusionAirVelocity: string
  setDiffusionAirVelocity: (v: string) => void
  returnNetworkType: string
  setReturnNetworkType: (v: string) => void
  sistema: string
  setSistema: (v: string) => void
  tecnologiaIntegracion: string
  setTecnologiaIntegracion: (v: string) => void
  onProceed: () => void
}

export function CalculationOptionsSection({
  containerRef,
  disabled = false,
  calculationType,
  setCalculationType,
  systemAirVelocity,
  setSystemAirVelocity,
  diffusionAirVelocity,
  setDiffusionAirVelocity,
  returnNetworkType,
  setReturnNetworkType,
  sistema,
  setSistema,
  tecnologiaIntegracion,
  setTecnologiaIntegracion,
  onProceed,
}: Props) {
  return (
    <Card className={disabled ? "opacity-50 pointer-events-none" : ""} ref={containerRef}>
      <CardHeader>
        <CardTitle className="text-[#007297]">Configuración del sistema</CardTitle>
        <CardDescription>Opciones de cálculo y configuración</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="text-blue-600">Tipo de cálculo</Label>
            <Select value={calculationType} onValueChange={setCalculationType} disabled>
              <SelectTrigger className="bg-gray-50 pr-10 max-w-xl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dimensionamiento">Dimensionamiento de Unidad Interior zonificada por ratio y reparto de caudal por volumen de la zona climatizada</SelectItem>
                <SelectItem value="calculo-potencia">Reparto de caudal por potencia requerida de la zona climatizada</SelectItem>
                <SelectItem value="calculo-volumen">Reparto de caudal por volumen de la zona climatizada</SelectItem>
                <SelectItem value="calculo-caudal">Reparto de caudal según caudal especifico de la zona climatizada</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-blue-600">Tipo de la red de retorno</Label>
            <Select value={returnNetworkType} onValueChange={setReturnNetworkType} disabled>
              <SelectTrigger className="bg-gray-50 pr-10">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="retorno-unico">Retorno Único en Zona Común</SelectItem>
                <SelectItem value="retorno-rejilla">Retorno por rejilla 2x1</SelectItem>
                <SelectItem value="retorno-individual">Retorno Individual por Zona</SelectItem>
                <SelectItem value="retorno-definir">Retorno Sin Definir</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="text-blue-600">Velocidad máxima del aire del sistema (m/s)</Label>
            <div className="flex items-center gap-2">
              <Input
                value={systemAirVelocity}
                onChange={(e) => setSystemAirVelocity(e.target.value)}
                className="bg-gray-50"
                disabled={disabled}
              />
              <span className="text-sm text-gray-500">m/s (Recomendación entre 3.5 y 5 m/s)</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-blue-600">Velocidad máxima del aire de difusión (m/s)</Label>
            <div className="flex items-center gap-2">
              <Input
                value={diffusionAirVelocity}
                onChange={(e) => setDiffusionAirVelocity(e.target.value)}
                className="bg-gray-50"
                disabled={disabled}
              />
              <span className="text-sm text-gray-500">m/s (Recomendación entre 2.5 y 3.5 m/s)</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="text-blue-600">Sistema</Label>
            <Select value={sistema} onValueChange={setSistema} disabled>
              <SelectTrigger className="bg-gray-50 pr-10">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="easyzone">Easyzone</SelectItem>
                <SelectItem value="airzone">Airzone</SelectItem>
                <SelectItem value="otro">Otro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-blue-600">Tecnología de integración</Label>
            <Select value={tecnologiaIntegracion} onValueChange={setTecnologiaIntegracion} disabled>
              <SelectTrigger className="bg-gray-50 pr-10">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="airzone-cloud-wifi">Airzone Cloud - Wifi dual 2.4 - 5G</SelectItem>
                <SelectItem value="airzone-local">Airzone Local</SelectItem>
                <SelectItem value="otra-tecnologia">Otra tecnología</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-end">
          <Button className="bg-[#007297] hover:bg-[#005a73] text-white px-8" onClick={() => {
            OpcionesCalculo(systemAirVelocity, diffusionAirVelocity)
            onProceed()
          }}>
            PROCEDER
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
