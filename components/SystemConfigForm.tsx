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
  const [ductType, setDuctType] = useState("flessibile")
  const [zoneName, setZoneName] = useState("Zona 1")
  const [height, setHeight] = useState("2.7")
  const [surface, setSurface] = useState("")
  const [climateType, setClimateType] = useState("aria")
  const [zoneUnits, setZoneUnits] = useState("si")
  const [thermostat, setThermostat] = useState("bianco")
  const [color, setColor] = useState("")
  const [connection, setConnection] = useState("")
  const [unitType, setUnitType] = useState("canalizzabile")
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
      <Tabs defaultValue="sistema1" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="sistema1">Sistema 1</TabsTrigger>
          <TabsTrigger value="aggiungi">Aggiungere sistema</TabsTrigger>
        </TabsList>

        <TabsContent value="sistema1" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-600">{systemName}</CardTitle>
              <CardDescription>Dati sul sistema e sulle aree coperte dal sistema</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-sm text-gray-600">
                Per la configurazione del sistema, è necessario almeno un termostato Blueface o un termostato Think.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="system-name" className="text-blue-600">
                    Nome del sistema
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
                    Tipo di condotto
                  </Label>
                  <Select value={ductType} onValueChange={setDuctType}>
                    <SelectTrigger className="bg-gray-50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="flessibile">Flessibile</SelectItem>
                      <SelectItem value="rigido">Rigido</SelectItem>
                      <SelectItem value="misto">Misto</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="bg-teal-600 hover:bg-teal-700" onClick={() => setCurrentStep(2)}>
                  AVANTI
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className={currentStep === 1 ? "opacity-50 pointer-events-none" : ""}>
            <CardHeader>
              <CardTitle className="text-teal-500">Zona Zona 1</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="zone-name" className="text-blue-600">
                    Nome
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
                    Altezza (m)
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
                <Label className="text-blue-600">Tipo di climatizzazione</Label>
                <RadioGroup
                  value={climateType}
                  onValueChange={setClimateType}
                  className="flex gap-6"
                  disabled={currentStep === 1}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="aria" id="aria" disabled={currentStep === 1} />
                    <Label htmlFor="aria">Aria</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="radiante" id="radiante" disabled={currentStep === 1} />
                    <Label htmlFor="radiante">Radiante</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="aria-radiante" id="aria-radiante" disabled={currentStep === 1} />
                    <Label htmlFor="aria-radiante">Aria e Radiante</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label className="text-blue-600">Unità a zone</Label>
                <RadioGroup
                  value={zoneUnits}
                  onValueChange={setZoneUnits}
                  className="flex gap-6"
                  disabled={currentStep === 1}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="si" id="si" disabled={currentStep === 1} />
                    <Label htmlFor="si">Sì</Label>
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
                      <SelectItem value="bianco">Bianco</SelectItem>
                      <SelectItem value="nero">Nero</SelectItem>
                      <SelectItem value="grigio">Grigio</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="color" className="text-blue-600">
                    Colore
                  </Label>
                  <Select value={color} onValueChange={setColor} disabled={currentStep === 1}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleziona colore" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bianco">Bianco</SelectItem>
                      <SelectItem value="nero">Nero</SelectItem>
                      <SelectItem value="grigio">Grigio</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="connection" className="text-blue-600">
                    Connessione
                  </Label>
                  <Select value={connection} onValueChange={setConnection} disabled={currentStep === 1}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleziona connessione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wifi">WiFi</SelectItem>
                      <SelectItem value="cablata">Cablata</SelectItem>
                      <SelectItem value="wireless">Wireless</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="unit-type" className="text-blue-600">
                    Tipo di unità
                  </Label>
                  <Select value={unitType} onValueChange={setUnitType} disabled={currentStep === 1}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="canalizzabile">Unità canalizzabile</SelectItem>
                      <SelectItem value="split">Split</SelectItem>
                      <SelectItem value="multisplit">Multisplit</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ratio" className="text-blue-600">
                    Rapporto w/m3
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
                      Potenza stimata (Kw)
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
                    Tipo di diffusione
                  </Label>
                  <Select value={diffusionType} onValueChange={setDiffusionType} disabled={currentStep === 1}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleziona tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lineare">Lineare</SelectItem>
                      <SelectItem value="radiale">Radiale</SelectItem>
                      <SelectItem value="mista">Mista</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="diffusion-elements" className="text-blue-600">
                    Numero di elementi di diffusione
                  </Label>
                  <Select value={diffusionElements} onValueChange={setDiffusionElements} disabled={currentStep === 1}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleziona numero" />
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
            <Button className="bg-teal-600 hover:bg-teal-700">AGGIUNGERE SISTEMA</Button>
          </div>
        </TabsContent>

        <TabsContent value="aggiungi">
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-gray-500">Aggiungi un nuovo sistema qui...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
