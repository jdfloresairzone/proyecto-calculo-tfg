"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import React from "react";
import { generarCabecera } from "@/lib/requests/quote"

type Props = {
  containerRef?: React.Ref<HTMLDivElement>
  address: string
  setAddress: (v: string) => void
  agent: string
  setAgent: (v: string) => void
  clientReference: string
  setClientReference: (v: string) => void
  referenceError: boolean
  setReferenceError: (v: boolean) => void
  onProceed: () => void
}

export function GeneralDataSection({
  containerRef,
  address,
  setAddress,
  agent,
  setAgent,
  clientReference,
  setClientReference,
  referenceError,
  setReferenceError,
  onProceed,
}: Props) {
  return (
    <Card ref={containerRef}>
      <CardHeader>
        <CardTitle className="text-[#007297]">Presupuesto</CardTitle>
        <CardTitle className="text-[#007297]">Datos generales</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="address" className="text-blue-600">Dirección</Label>
          <Select value={address} onValueChange={setAddress} disabled>
            <SelectTrigger className="w-full h-12 border-gray-200 bg-gray-50">
              <SelectValue placeholder="Selecciona una dirección" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="las-alpujarras">LAS ALPUJARRAS, SANGONERA LA SECA (MURCIA)</SelectItem>
              <SelectItem value="alcantarilla">AVDA. DEL DESCUBRIMIENTO, 4 NAVE 2, ALCANTARILLA (MURCIA)</SelectItem>
              <SelectItem value="evergreen-742">742 de Evergreen Terrace, Sprintfield (MALAGA)</SelectItem>
              <SelectItem value="san-pepe-1">Calle de Pepe, San Pepe (MADRID)</SelectItem>
              <SelectItem value="san-pepe-2">Calle de Pepe, San Pepe (MADRID)</SelectItem>
              <SelectItem value="coruna-prueba">Prueba de direccion devolución, A Coruña (A CORUÑA)</SelectItem>
              <SelectItem value="bromas">Calle Del Bromas, Málaga (MALAGA)</SelectItem>
              <SelectItem value="risas">Calle El Risas, Málaga (MALAGA)</SelectItem>
              <SelectItem value="iluso">Calle Del Iluso, Málaga (MALAGA)</SelectItem>
              <SelectItem value="necio">Calle Del Necio, Málaga (MALAGA)</SelectItem>
              <SelectItem value="fuerte">Calle Del Fuerte, Málaga (MALAGA)</SelectItem>
              <SelectItem value="competa">Calle Cómpeta, 14, Sevilla (PONTEVEDRA)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="agente" className="text-blue-600 font-medium">Agente</Label>
          <Select value={agent} onValueChange={setAgent} disabled>
            <SelectTrigger className="w-full h-12 border-gray-200 bg-gray-50">
              <SelectValue placeholder="Selecciona un agente" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="agent">AIRZONE Zona LEVANTE (Levante@airzonecontrol.com)</SelectItem>
              <SelectItem value="agent1">Juan Pérez</SelectItem>
              <SelectItem value="agent2">María García</SelectItem>
              <SelectItem value="agent3">Carlos López</SelectItem>
              <SelectItem value="agent4">Ana Martínez</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="referencia" className="text-blue-600 font-medium">Referencia presupuesto cliente</Label>
          <Input
            id="referencia"
            type="text"
            value={clientReference}
            onChange={(e) => {
              setClientReference(e.target.value)
              if (e.target.value.trim() !== "") setReferenceError(false)
            }}
            className={`w-full h-12 border ${referenceError ? "border-red-500" : "border-gray-200"} bg-white`}
            placeholder="Introduce la referencia"
          />
          {referenceError && (
            <p className="text-red-600 text-sm">El campo Referencia presupuesto cliente es obligatorio</p>
          )}
        </div>

        <div className="flex justify-end">
          <Button className="bg-[#007297] hover:bg-[#005a73] px-8" onClick={() => {
            generarCabecera(clientReference)
            onProceed()
          }}>
            PROCEDER
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
