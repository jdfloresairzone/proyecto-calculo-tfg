"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Info } from "lucide-react"

export default function SystemConfigForm() {
  const [systemName, setSystemName] = useState("Sistema 1")
  const [ductType, setDuctType] = useState("flexible")
  const [zoneName, setZoneName] = useState("Zona 1")
  const [height, setHeight] = useState("2.7")
  const [surface, setSurface] = useState("")
  const [climateType, setClimateType] = useState("aire")
  const [zoneUnits, setZoneUnits] = useState("si")
  const [thermostat, setThermostat] = useState("bianco")
  const [color, setColor] = useState("")
  const [connection, setConnection] = useState("")
  const [unitType, setUnitType] = useState("canalizable")
  const [ratio, setRatio] = useState("30")
  const [estimatedPower, setEstimatedPower] = useState("")
  const [diffusionType, setDiffusionType] = useState("")
  const [diffusionElements, setDiffusionElements] = useState("")
  const [currentStep, setCurrentStep] = useState(1)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && currentStep === 1) {
      setCurrentStep(2)
    }
  }

  return (
    <div className="w-full mx-auto p-8 space-y-6" onKeyDown={handleKeyDown} tabIndex={0}>

      <div className="w-full bg-gray-100 py-6 rounded-2xl">
        <div className="pl-6">
          <h1 className="text-3xl md:text-4xl font-medium text-[#007297]">Herramienta de presupuestos</h1>
          <p className="mt-2 text-lg font-semibold">Proyecto de cálculo</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-teal-500">Presupuesto</CardTitle>
          <CardTitle className="text-teal-500">Datos generales</CardTitle>
        </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
                  <Label htmlFor="system-name" className="text-blue-600">
                    Direccion
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full h-12 border-gray-200 bg-gray-50">
                      <SelectValue placeholder="Selecciona una dirección" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="madrid">Madrid, España</SelectItem>
                      <SelectItem value="barcelona">Barcelona, España</SelectItem>
                      <SelectItem value="valencia">Valencia, España</SelectItem>
                      <SelectItem value="sevilla">Sevilla, España</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="agente" className="text-teal-600 font-medium">
                    Agente
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full h-12 border-gray-200 bg-gray-50">
                      <SelectValue placeholder="Selecciona un agente" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="agent1">Juan Pérez</SelectItem>
                      <SelectItem value="agent2">María García</SelectItem>
                      <SelectItem value="agent3">Carlos López</SelectItem>
                      <SelectItem value="agent4">Ana Martínez</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="referencia" className="text-teal-600 font-medium">
                    Referencia presupuesto cliente
                  </Label>
                  <Input
                    id="referencia"
                    type="text"
                    className="w-full h-12 border-gray-200 bg-white"
                    placeholder="Introduce la referencia"
                  />
                </div>

          </CardContent>

          <div className="flex justify-end pr-6">
            <Button className="bg-teal-600 hover:bg-teal-700" onClick={() => setCurrentStep(2)}>
              PROCEDER
            </Button>
          </div>
      </Card>
      
      <Tabs defaultValue="sistema1" className={currentStep === 1 ? "opacity-50 pointer-events-none w-full" : "w-full"}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="sistema1">Sistema 1</TabsTrigger>
          <TabsTrigger value="aggiungi">Añadir sistema</TabsTrigger>
        </TabsList>

        <TabsContent value="sistema1" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#007297]">{systemName}</CardTitle>
              <CardDescription>Datos del sistema y de las zonas que contempla el sistema</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-sm text-gray-600">
                Para configurar el sistema, necesitará al menos un termostato Blueface o un termostato Think.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="system-name" className="text-blue-600">
                    Nombre del sistema
                  </Label>
                  <Input
                    id="system-name"
                    value={systemName}
                    onChange={(e) => setSystemName(e.target.value)}
                    className="bg-gray-50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duct-type" className="text-blue-600">
                    Tipo de conducto
                  </Label>
                  <Select value={ductType} onValueChange={setDuctType}>
                    <SelectTrigger className="bg-gray-50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="flessibile">Flexible</SelectItem>
                      <SelectItem value="rigido">Rigido</SelectItem>
                      <SelectItem value="misto">Mixto</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="bg-teal-600 hover:bg-teal-700" onClick={() => setCurrentStep(3)}>
                  PROCEDER
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className={currentStep === 2 ? "opacity-50 pointer-events-none" : ""}>
            <CardHeader>
              <CardTitle className="text-teal-500">Zona 1</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="zone-name" className="text-blue-600">
                    Nombre
                  </Label>
                  <Input
                    id="zone-name"
                    value={zoneName}
                    onChange={(e) => setZoneName(e.target.value)}
                    className="bg-gray-50"
                    disabled={currentStep === 1}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="height" className="text-blue-600">
                    Altura (m)
                  </Label>
                  <Input
                    id="height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="bg-gray-50"
                    disabled={currentStep === 1}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="surface" className="text-blue-600">
                    Superficie (m2)
                  </Label>
                  <Input
                    id="surface"
                    value={surface}
                    onChange={(e) => setSurface(e.target.value)}
                    className="bg-gray-50"
                    disabled={currentStep === 1}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-blue-600">Tipo de climatización</Label>
                <RadioGroup
                  value={climateType}
                  onValueChange={setClimateType}
                  className="flex gap-6"
                  disabled={currentStep === 1}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="aria" id="aria" disabled={currentStep === 1} />
                    <Label htmlFor="aria">Aire</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="radiante" id="radiante" disabled={currentStep === 1} />
                    <Label htmlFor="radiante">Radiante</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="aria-radiante" id="aria-radiante" disabled={currentStep === 1} />
                    <Label htmlFor="aria-radiante">Aire y Radiante</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label className="text-blue-600">Unidades zonificadas</Label>
                <RadioGroup
                  value={zoneUnits}
                  onValueChange={setZoneUnits}
                  className="flex gap-6"
                  disabled={currentStep === 1}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="si" id="si" disabled={currentStep === 1} />
                    <Label htmlFor="si">Sí</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" disabled={currentStep === 1} />
                    <Label htmlFor="no">No</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="thermostat" className="text-blue-600">
                    Termostato
                  </Label>
                  <Select value={thermostat} onValueChange={setThermostat} disabled={currentStep === 1}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bianco">Blanco</SelectItem>
                      <SelectItem value="nero">Negro</SelectItem>
                      <SelectItem value="grigio">Gris</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="color" className="text-blue-600">
                    Color
                  </Label>
                  <Select value={color} onValueChange={setColor} disabled={currentStep === 1}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar color" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bianco">Blanco</SelectItem>
                      <SelectItem value="nero">Negro</SelectItem>
                      <SelectItem value="grigio">Gris</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="connection" className="text-blue-600">
                    Conexión
                  </Label>
                  <Select value={connection} onValueChange={setConnection} disabled={currentStep === 1}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar conexión" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wifi">WiFi</SelectItem>
                      <SelectItem value="cablata">Cableado</SelectItem>
                      <SelectItem value="wireless">Inalámbrico</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="unit-type" className="text-blue-600">
                    Tipo de unidad
                  </Label>
                  <Select value={unitType} onValueChange={setUnitType} disabled={currentStep === 1}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="canalizzabile">Unidad canalizable</SelectItem>
                      <SelectItem value="split">Split</SelectItem>
                      <SelectItem value="multisplit">Multisplit</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ratio" className="text-blue-600">
                    Relación w/m3
                  </Label>
                  <Input
                    id="ratio"
                    value={ratio}
                    onChange={(e) => setRatio(e.target.value)}
                    className="bg-gray-50"
                    disabled={currentStep === 1}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="estimated-power" className="text-blue-600">
                      Potencia estimada (Kw)
                    </Label>
                    <Info className="h-4 w-4 text-gray-400" />
                  </div>
                  <Input
                    id="estimated-power"
                    value={estimatedPower}
                    onChange={(e) => setEstimatedPower(e.target.value)}
                    className="bg-gray-50"
                    disabled={currentStep === 1}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="diffusion-type" className="text-blue-600">
                    Tipo de difusión
                  </Label>
                  <Select value={diffusionType} onValueChange={setDiffusionType} disabled={currentStep === 1}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lineare">Linear</SelectItem>
                      <SelectItem value="radiale">Radial</SelectItem>
                      <SelectItem value="mista">Mixta</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="diffusion-elements" className="text-blue-600">
                    Número de elementos de difusión
                  </Label>
                  <Select value={diffusionElements} onValueChange={setDiffusionElements} disabled={currentStep === 1}>
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

          <div className="flex justify-end">
            <Button className="bg-teal-600 hover:bg-teal-700">AÑADIR SISTEMA</Button>
          </div>
        </TabsContent>

        <TabsContent value="aggiungi">
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-gray-500">Añade un nuevo sistema aquí...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
