"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Info, Plus, Trash2 } from "lucide-react"

interface Zone {
  id: string
  name: string
  height: string
  surface: string
  climateType: string
  zoneUnits: string
  thermostat: string
  color: string
  connection: string
  unitType: string
  ratio: string
  estimatedPower: string
  diffusionType: string
  diffusionElements: string
}

interface System {
  id: string
  name: string
  ductType: string
  equipmentType: string
  brand: string
  model: string
  coolingCapacity: string
  flowRate: string
  plenumType: string
  numberOfDampers: string
  zones: Zone[]
}

interface DiffusionElement {
  id: string
  type: string
  maxHeight: string
  dimensions: string
  flowRate: string
  exitVelocity: string
  color: string
  fixation: string
  regulation: string
  plenum: string
}

export default function SystemConfigForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [savedSystems, setSavedSystems] = useState<System[]>([])
  const [activeTab, setActiveTab] = useState("sistema1")

  // General data state
  const [address, setAddress] = useState("")
  const [agent, setAgent] = useState("")
  const [clientReference, setClientReference] = useState("")

  // Calculation options state
  const [calculationType, setCalculationType] = useState("dimensionamiento")
  const [systemAirVelocity, setSystemAirVelocity] = useState("4")
  const [diffusionAirVelocity, setDiffusionAirVelocity] = useState("2.5")
  const [returnNetworkType, setReturnNetworkType] = useState("retorno-unico")
  const [soloSistema, setSoloSistema] = useState(false)
  const [sistemaYDifusion, setSistemaYDifusion] = useState(true)

  // System configuration state
  const [sistema, setSistema] = useState("easyzone")
  const [tecnologiaIntegracion, setTecnologiaIntegracion] = useState("airzone-cloud-wifi")
  const [tecnologiaProduccionRadiante, setTecnologiaProduccionRadiante] = useState("ninguna")
  const [incluirControlProduccion, setIncluirControlProduccion] = useState("no")

  // System unit selection state
  const [equipmentType, setEquipmentType] = useState("unidad-de-conducto")
  const [brand, setBrand] = useState("daikin")
  const [model, setModel] = useState("")
  const [coolingCapacity, setCoolingCapacity] = useState("10")
  const [flowRate, setFlowRate] = useState("150")

  // Plenum selection state
  const [plenumType, setPlenumType] = useState("plenum-standard")
  const [numberOfDampers, setNumberOfDampers] = useState("4")

  // Diffusion elements state
  const [includeStringers, setIncludeStringers] = useState(true)
  const [commonReturnType, setCommonReturnType] = useState("RRFR")
  const [commonReturnHeight, setCommonReturnHeight] = useState("400")
  const [commonReturnDimensions, setCommonReturnDimensions] = useState("400x400")

  // Current system being edited
  const [currentSystem, setCurrentSystem] = useState<System>({
    id: "1",
    name: "Sistema 1",
    ductType: "flexible",
    equipmentType: "unidad-de-conducto",
    brand: "daikin",
    model: "",
    coolingCapacity: "10",
    flowRate: "150",
    plenumType: "plenum-standard",
    numberOfDampers: "4",
    zones: [
      {
        id: "1",
        name: "Zona 1",
        height: "2.7",
        surface: "",
        climateType: "aire",
        zoneUnits: "si",
        thermostat: "blanco",
        color: "",
        connection: "",
        unitType: "canalizable",
        ratio: "30",
        estimatedPower: "",
        diffusionType: "",
        diffusionElements: "",
      },
    ],
  })

  useEffect(() => {
    if (savedSystems.length > 0) {
      console.log("Sistemas actualizados:", savedSystems)
    }
  }, [savedSystems])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && currentStep === 1) {
      setCurrentStep(2)
    }
  }

  const addZone = () => {
    const newZone: Zone = {
      id: Date.now().toString(),
      name: `Zona ${currentSystem.zones.length + 1}`,
      height: "2.7",
      surface: "",
      climateType: "aire",
      zoneUnits: "si",
      thermostat: "bianco",
      color: "",
      connection: "",
      unitType: "canalizable",
      ratio: "30",
      estimatedPower: "",
      diffusionType: "",
      diffusionElements: "",
    }
    setCurrentSystem((prev) => ({
      ...prev,
      zones: [...prev.zones, newZone],
    }))
  }

  const removeZone = (zoneId: string) => {
    if (currentSystem.zones.length > 1) {
      setCurrentSystem((prev) => ({
        ...prev,
        zones: prev.zones.filter((zone) => zone.id !== zoneId),
      }))
    }
  }

  const updateZone = (zoneId: string, field: keyof Zone, value: string) => {
    setCurrentSystem((prev) => ({
      ...prev,
      zones: prev.zones.map((zone) => (zone.id === zoneId ? { ...zone, [field]: value } : zone)),
    }))
  }

  const updateSystem = (field: keyof System, value: string) => {
    setCurrentSystem((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const saveSystem = () => {
    const newSavedSystems = [...savedSystems, { ...currentSystem }]
    setSavedSystems(newSavedSystems)

    // Log to console instead of displaying on screen
    console.log("Sistemas guardados:", newSavedSystems)

    // Reset for new system
    const newSystemNumber = newSavedSystems.length + 1
    setCurrentSystem({
      id: Date.now().toString(),
      name: `Sistema ${newSystemNumber}`,
      ductType: "flexible",
      equipmentType: "unidad-de-conducto",
      brand: "daikin",
      model: "",
      coolingCapacity: "10",
      flowRate: "150",
      plenumType: "plenum-standard",
      numberOfDampers: "4",
      zones: [
        {
          id: Date.now().toString() + "_zone",
          name: "Zona 1",
          height: "2.7",
          surface: "",
          climateType: "aire",
          zoneUnits: "si",
          thermostat: "bianco",
          color: "",
          connection: "",
          unitType: "canalizable",
          ratio: "30",
          estimatedPower: "",
          diffusionType: "",
          diffusionElements: "",
        },
      ],
    })
    setActiveTab("aggiungi")
  }

  const startNewSystem = () => {
    const newSystemNumber = savedSystems.length + 1
    setCurrentSystem({
      id: Date.now().toString(),
      name: `Sistema ${newSystemNumber}`,
      ductType: "flexible",
      equipmentType: "unidad-de-conducto",
      brand: "daikin",
      model: "",
      coolingCapacity: "10",
      flowRate: "150",
      plenumType: "plenum-standard",
      numberOfDampers: "4",
      zones: [
        {
          id: Date.now().toString() + "_zone",
          name: "Zona 1",
          height: "2.7",
          surface: "",
          climateType: "aire",
          zoneUnits: "si",
          thermostat: "bianco",
          color: "",
          connection: "",
          unitType: "canalizable",
          ratio: "30",
          estimatedPower: "",
          diffusionType: "",
          diffusionElements: "",
        },
      ],
    })
    // Switch to the first tab to show the new system form
    setActiveTab("sistema1")
  }

  return (
    <div className="w-full mx-auto p-8 space-y-6" onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="w-full bg-gray-100 py-6 rounded-2xl">
        <div className="pl-6">
          <h1 className="text-2xl md:text-3xl font-medium text-[#007297]">Herramienta de presupuestos</h1>
          <p className="mt-2 text-lg text-gray-700 font-semibold">Proyecto de cálculo</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-[#007297]">Presupuesto</CardTitle>
          <CardTitle className="text-[#007297]">Datos generales</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="address" className="text-blue-600">
              Dirección
            </Label>
            <Select value={address} onValueChange={setAddress}>
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
            <Label htmlFor="agente" className="text-blue-600 font-medium">
              Agente
            </Label>
            <Select value={agent} onValueChange={setAgent}>
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
            <Label htmlFor="referencia" className="text-blue-600 font-medium">
              Referencia presupuesto cliente
            </Label>
            <Input
              id="referencia"
              type="text"
              value={clientReference}
              onChange={(e) => setClientReference(e.target.value)}
              className="w-full h-12 border-gray-200 bg-white"
              placeholder="Introduce la referencia"
            />
          </div>
        </CardContent>

        <div className="flex justify-end pr-6">
          <Button className="bg-[#377f97] hover:bg-[#007297]" onClick={() => setCurrentStep(2)}>
            PROCEDER
          </Button>
        </div>
      </Card>

      {/* Calculation Options Section */}
      <Card className={currentStep < 2 ? "opacity-50 pointer-events-none" : ""}>
        <CardHeader>
          <CardTitle className="text-[#007297]">Opciones de cálculo</CardTitle>
          <CardDescription>Datos de cálculo de la instalación</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="calculation-type" className="text-blue-600">
                Tipo de cálculo
              </Label>
              <div className="relative">
                <Select value={calculationType} onValueChange={setCalculationType} disabled={currentStep < 2}>
                  <SelectTrigger className="bg-gray-50 pr-10">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dimensionamiento">
                      Dimensionamiento de Unidad Interior zonificada por ratio y reparto de ca...
                    </SelectItem>
                    <SelectItem value="calculo-completo">Cálculo completo</SelectItem>
                    <SelectItem value="calculo-basico">Cálculo básico</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-blue-600">Elementos</Label>
              <div className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="solo-sistema"
                    checked={soloSistema}
                    onCheckedChange={setSoloSistema}
                    disabled={currentStep < 2}
                  />
                  <Label htmlFor="solo-sistema" className="text-sm">
                    Solo Sistema
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="sistema-difusion"
                    checked={sistemaYDifusion}
                    onCheckedChange={setSistemaYDifusion}
                    disabled={currentStep < 2}
                  />
                  <Label htmlFor="sistema-difusion" className="text-sm">
                    Sistema + Difusión
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="system-air-velocity" className="text-blue-600">
                Velocidad máxima del aire del sistema (m/s)
              </Label>
              <div className="flex items-center gap-2">
                <Input
                  id="system-air-velocity"
                  value={systemAirVelocity}
                  onChange={(e) => setSystemAirVelocity(e.target.value)}
                  className="bg-gray-50"
                  disabled={currentStep < 2}
                />
                <span className="text-sm text-gray-500">m/s (Recomendación entre 3.5 y 5 m/s)</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="diffusion-air-velocity" className="text-blue-600">
                Velocidad máxima del aire de difusión (m/s)
              </Label>
              <div className="flex items-center gap-2">
                <Input
                  id="diffusion-air-velocity"
                  value={diffusionAirVelocity}
                  onChange={(e) => setDiffusionAirVelocity(e.target.value)}
                  className="bg-gray-50"
                  disabled={currentStep < 2}
                />
                <span className="text-sm text-gray-500">m/s (Recomendación entre 2.5 y 3.5 m/s)</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="return-network-type" className="text-blue-600">
              Tipo de la red de retorno
            </Label>
            <div className="relative">
              <Select value={returnNetworkType} onValueChange={setReturnNetworkType} disabled={currentStep < 2}>
                <SelectTrigger className="bg-gray-50 pr-10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="retorno-unico">Retorno Único en Zona Común</SelectItem>
                  <SelectItem value="retorno-multiple">Retorno Múltiple</SelectItem>
                  <SelectItem value="retorno-individual">Retorno Individual por Zona</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-end">
            <Button className="bg-[#007297] hover:bg-[#005a73] text-white px-8" onClick={() => setCurrentStep(3)}>
              PROCEDER
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Sistema Configuration Section */}
      <Card className={currentStep < 3 ? "opacity-50 pointer-events-none" : ""}>
        <CardHeader>
          <CardTitle className="text-[#007297]">Sistema</CardTitle>
          <CardDescription>Sistema de configuración</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="sistema" className="text-blue-600">
                Sistema
              </Label>
              <div className="relative">
                <Select value={sistema} onValueChange={setSistema} disabled={currentStep < 3}>
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
            </div>

            <div className="space-y-2">
              <Label htmlFor="tecnologia-produccion-radiante" className="text-blue-600">
                Tecnología Producción radiante
              </Label>
              <Select
                value={tecnologiaProduccionRadiante}
                onValueChange={setTecnologiaProduccionRadiante}
                disabled={currentStep < 3}
              >
                <SelectTrigger className="bg-gray-50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ninguna">Ninguna</SelectItem>
                  <SelectItem value="basica">Básica</SelectItem>
                  <SelectItem value="avanzada">Avanzada</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="tecnologia-integracion" className="text-blue-600">
                Tecnología de integración
              </Label>
              <Select value={tecnologiaIntegracion} onValueChange={setTecnologiaIntegracion} disabled={currentStep < 3}>
                <SelectTrigger className="bg-blue-50 border-blue-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="airzone-cloud-wifi">Airzone Cloud - Wifi dual 2.4 -5G</SelectItem>
                  <SelectItem value="airzone-local">Airzone Local</SelectItem>
                  <SelectItem value="otra-tecnologia">Otra tecnología</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-blue-600">Incluir control de la producción (CCP)</Label>
              <RadioGroup
                value={incluirControlProduccion}
                onValueChange={setIncluirControlProduccion}
                className="flex gap-6"
                disabled={currentStep < 3}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="si" id="ccp-si" disabled={currentStep < 3} />
                  <Label htmlFor="ccp-si">Sí</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="ccp-no" disabled={currentStep < 3} />
                  <Label htmlFor="ccp-no">No</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="flex justify-end">
            <Button className="bg-[#007297] hover:bg-[#005a73] text-white px-8" onClick={() => setCurrentStep(4)}>
              PROCEDER
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Systems and Zones Section */}
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className={currentStep < 4 ? "opacity-50 pointer-events-none w-full" : "w-full"}
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="sistema1">
            {savedSystems.length > 0 ? `Sistemas (${savedSystems.length})` : "Sistema Actual"}
          </TabsTrigger>
          <TabsTrigger value="aggiungi">Añadir nuevo sistema</TabsTrigger>
        </TabsList>

        <TabsContent value="sistema1" className="space-y-6">
          {savedSystems.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-[#007297]">Sistemas Guardados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {savedSystems.map((system, index) => (
                    <div key={system.id} className="p-4 border rounded-lg bg-gray-50">
                      <h4 className="font-semibold text-[#007297]">{system.name}</h4>
                      <p className="text-sm text-gray-600">Tipo de conducto: {system.ductType}</p>
                      <p className="text-sm text-gray-600">Tipo de equipo: {system.equipmentType}</p>
                      <p className="text-sm text-gray-600">Marca: {system.brand}</p>
                      <p className="text-sm text-gray-600">Modelo: {system.model}</p>
                      <p className="text-sm text-gray-600">Potencia: {system.coolingCapacity} Kw</p>
                      <p className="text-sm text-gray-600">Caudal: {system.flowRate} m3/h</p>
                      <p className="text-sm text-gray-600">Zonas: {system.zones.length}</p>
                      <div className="mt-2">
                        <p className="text-xs text-gray-500">Zonas:</p>
                        <ul className="text-xs text-gray-500 ml-4">
                          {system.zones.map((zone) => (
                            <li key={zone.id}>
                              • {zone.name} ({zone.surface}m²)
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle className="text-[#007297]">{currentSystem.name}</CardTitle>
              <CardDescription>Datos del sistema y de las zonas que contempla el sistema</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-sm text-gray-600">
                Para configurar el sistema, necesitará al menos un termostato Blueface o un termostato Think.
              </p>

              {/* System Configuration */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="system-name" className="text-blue-600">
                    Nombre del sistema
                  </Label>
                  <Input
                    id="system-name"
                    value={currentSystem.name}
                    onChange={(e) => updateSystem("name", e.target.value)}
                    className="bg-gray-50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duct-type" className="text-blue-600">
                    Tipo de conducto
                  </Label>
                  <Select value={currentSystem.ductType} onValueChange={(value) => updateSystem("ductType", value)}>
                    <SelectTrigger className="bg-gray-50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="flexible">Flexible</SelectItem>
                      <SelectItem value="rigido">Rigido</SelectItem>
                      <SelectItem value="misto">Mixto</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Zones Configuration */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[#007297]">Zonas del Sistema</h3>
                  <Button onClick={addZone} variant="outline" size="sm" className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Añadir Zona
                  </Button>
                </div>

                {currentSystem.zones.map((zone, zoneIndex) => (
                  <Card key={zone.id} className="border-l-4 border-l-blue-500">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-[#007297] text-lg">{zone.name}</CardTitle>
                        {currentSystem.zones.length > 1 && (
                          <Button
                            onClick={() => removeZone(zone.id)}
                            variant="outline"
                            size="sm"
                            className="text-red-600 hover:text-red-700"
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
                            onChange={(e) => updateZone(zone.id, "height", e.target.value)}
                            className="bg-gray-50"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label className="text-blue-600">Superficie (m2)</Label>
                          <Input
                            value={zone.surface}
                            onChange={(e) => updateZone(zone.id, "surface", e.target.value)}
                            className="bg-gray-50"
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <Label className="text-blue-600">Tipo de climatización</Label>
                        <RadioGroup
                          value={zone.climateType}
                          onValueChange={(value) => updateZone(zone.id, "climateType", value)}
                          className="flex gap-6"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="aire" id={`aire-${zone.id}`} />
                            <Label htmlFor={`aire-${zone.id}`}>Aire</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="radiante" id={`radiante-${zone.id}`} />
                            <Label htmlFor={`radiante-${zone.id}`}>Radiante</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="aire-radiante" id={`aire-radiante-${zone.id}`} />
                            <Label htmlFor={`aire-radiante-${zone.id}`}>Aire y Radiante</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-4">
                        <Label className="text-blue-600">Unidades zonificadas</Label>
                        <RadioGroup
                          value={zone.zoneUnits}
                          onValueChange={(value) => updateZone(zone.id, "zoneUnits", value)}
                          className="flex gap-6"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="si" id={`si-${zone.id}`} />
                            <Label htmlFor={`si-${zone.id}`}>Sí</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id={`no-${zone.id}`} />
                            <Label htmlFor={`no-${zone.id}`}>No</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                          <Label className="text-blue-600">Termostato</Label>
                          <Select
                            value={zone.thermostat}
                            onValueChange={(value) => updateZone(zone.id, "thermostat", value)}
                          >
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
                          <Label className="text-blue-600">Color</Label>
                          <Select value={zone.color} onValueChange={(value) => updateZone(zone.id, "color", value)}>
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
                          <Label className="text-blue-600">Conexión</Label>
                          <Select
                            value={zone.connection}
                            onValueChange={(value) => updateZone(zone.id, "connection", value)}
                          >
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
                          <Label className="text-blue-600">Tipo de unidad</Label>
                          <Select
                            value={zone.unitType}
                            onValueChange={(value) => updateZone(zone.id, "unitType", value)}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="canalizable">Unidad canalizable</SelectItem>
                              <SelectItem value="split">Split</SelectItem>
                              <SelectItem value="multisplit">Multisplit</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-blue-600">Relación w/m3</Label>
                          <Input
                            value={zone.ratio}
                            onChange={(e) => updateZone(zone.id, "ratio", e.target.value)}
                            className="bg-gray-50"
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Label className="text-blue-600">Potencia estimada (Kw)</Label>
                            <Info className="h-4 w-4 text-gray-400" />
                          </div>
                          <Input
                            value={zone.estimatedPower}
                            onChange={(e) => updateZone(zone.id, "estimatedPower", e.target.value)}
                            className="bg-gray-50"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label className="text-blue-600">Tipo de difusión</Label>
                          <Select
                            value={zone.diffusionType}
                            onValueChange={(value) => updateZone(zone.id, "diffusionType", value)}
                          >
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
                          <Label className="text-blue-600">Número de elementos de difusión</Label>
                          <Select
                            value={zone.diffusionElements}
                            onValueChange={(value) => updateZone(zone.id, "diffusionElements", value)}
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
                <Button className="bg-[#377f97] hover:bg-[#007297]" onClick={saveSystem}>
                  AÑADIR SISTEMA
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="aggiungi">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <p className="text-gray-500">¿Desea añadir un nuevo sistema?</p>
                <Button onClick={startNewSystem} className="bg-[#007297] hover:bg-[#005a73]">
                  Crear Nuevo Sistema
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Interior Unit Selection Section */}
      <Card className={currentStep < 4 ? "opacity-50 pointer-events-none" : ""}>
        <CardHeader>
          <CardTitle className="text-[#007297]">Selección unidad interior</CardTitle>
          <CardDescription>Dimensionamiento del equipo de aire acondicionado</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <h3 className="text-lg font-medium text-[#007297]">Sistema 1</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="equipment-type" className="text-blue-600">
                Tipo de equipo
              </Label>
              <Input
                id="equipment-type"
                value={currentSystem.equipmentType}
                onChange={(e) => updateSystem("equipmentType", e.target.value)}
                className="bg-gray-50"
                placeholder="Unidad de conducto"
                disabled={currentStep < 4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="brand" className="text-blue-600">
                Marca
              </Label>
              <div className="relative">
                <Select
                  value={currentSystem.brand}
                  onValueChange={(value) => updateSystem("brand", value)}
                  disabled={currentStep < 4}
                >
                  <SelectTrigger className="bg-gray-50 pr-10">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daikin">Daikin</SelectItem>
                    <SelectItem value="mitsubishi">Mitsubishi</SelectItem>
                    <SelectItem value="lg">LG</SelectItem>
                    <SelectItem value="samsung">Samsung</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="model" className="text-blue-600">
                Modelo
              </Label>
              <div className="relative">
                <Select
                  value={currentSystem.model}
                  onValueChange={(value) => updateSystem("model", value)}
                  disabled={currentStep < 3}
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
              <Label htmlFor="cooling-capacity" className="text-blue-600">
                Potencia frigorífica Kw
              </Label>
              <div className="relative">
                <Select
                  value={currentSystem.coolingCapacity}
                  onValueChange={(value) => updateSystem("coolingCapacity", value)}
                  disabled={currentStep < 4}
                >
                  <SelectTrigger className="bg-gray-50 pr-10">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="8">8</SelectItem>
                    <SelectItem value="6">6</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="3.5">3.5</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="flow-rate" className="text-blue-600">
                Caudal (m3/h)
              </Label>
              <Input
                id="flow-rate"
                value={currentSystem.flowRate}
                onChange={(e) => updateSystem("flowRate", e.target.value)}
                className="bg-gray-50"
                disabled={currentStep < 4}
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Button className="bg-[#007297] hover:bg-[#005a73] text-white px-8" onClick={() => setCurrentStep(5)}>
              PROCEDER
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Plenum Selection Section */}
      <Card className={currentStep < 5 ? "opacity-50 pointer-events-none" : ""}>
        <CardHeader>
          <CardTitle className="text-[#007297]">Selección plenum motorizado</CardTitle>
          <CardDescription>Dimensionamiento del plenum motorizado AIRZONE</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <h3 className="text-lg font-medium text-[#007297]">Sistema 1</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="plenum-type" className="text-blue-600">
                Tipo de plenum
              </Label>
              <Select
                value={currentSystem.plenumType}
                onValueChange={(value) => updateSystem("plenumType", value)}
                disabled={currentStep < 5}
              >
                <SelectTrigger className="bg-gray-50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="plenum-standard">Plenum Standard</SelectItem>
                  <SelectItem value="plenum-premium">Plenum Premium</SelectItem>
                  <SelectItem value="plenum-compact">Plenum Compact</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="number-dampers" className="text-blue-600">
                Número de compuertas
              </Label>
              <Select
                value={currentSystem.numberOfDampers}
                onValueChange={(value) => updateSystem("numberOfDampers", value)}
                disabled={currentStep < 5}
              >
                <SelectTrigger className="bg-blue-50 border-blue-200">
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
                  Importante: este plenum se suministra con {currentSystem.numberOfDampers} compuertas motorizadas de
                  las 5 compuertas disponibles.
                </p>
              </div>
            </div>
          </div>

          {/* Zone Configuration Table */}
          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-4 font-medium text-blue-600 text-sm">
              <div>Zona</div>
              <div>Compuerta (mm)</div>
              <div>Caudal (m3/h)</div>
              <div>Velocidad en duct (m/s)</div>
            </div>

            {currentSystem.zones.slice(0, Number.parseInt(currentSystem.numberOfDampers)).map((zone, index) => (
              <div key={zone.id} className="grid grid-cols-4 gap-4 items-center">
                <div className="bg-gray-100 p-2 rounded text-sm font-medium">{zone.name}</div>
                <div className="bg-gray-100 p-2 rounded text-sm">2x 200</div>
                <div className="bg-gray-100 p-2 rounded text-sm">{index === 0 ? "32.81" : "42.19"}</div>
                <div className="flex items-center gap-2">
                  <Input
                    value={index === 0 ? "0.3" : "0.4"}
                    className="bg-red-50 border-red-200 text-sm"
                    disabled={currentStep < 4}
                  />
                  <div className="w-6 h-6 bg-yellow-400 rounded-sm flex items-center justify-center">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <Button className="bg-[#007297] hover:bg-[#005a73] text-white px-8" onClick={() => setCurrentStep(6)}>PROCEDER</Button>
          </div>
        </CardContent>
      </Card>

      {/* Diffusion Elements Selection Section */}
      <Card className={currentStep < 6 ? "opacity-50 pointer-events-none" : ""}>
        <CardHeader>
          <CardTitle className="text-[#007297]">Selección elemento de difusión</CardTitle>
          <CardDescription>Dimensionamiento de rejillas o difusores AIRZONE</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <h3 className="text-lg font-medium text-[#007297]">Sistema 1</h3>

          {/* Include Stringers */}
          <div className="space-y-4">
            <Label className="text-blue-600">Incluir Largueros</Label>
            <div className="flex gap-6">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="stringers-si"
                  checked={includeStringers}
                  onCheckedChange={setIncludeStringers}
                  disabled={currentStep < 6}
                />
                <Label htmlFor="stringers-si">Sí</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="stringers-no"
                  checked={!includeStringers}
                  onCheckedChange={(checked) => setIncludeStringers(!checked)}
                  disabled={currentStep < 6}
                />
                <Label htmlFor="stringers-no">No</Label>
              </div>
            </div>
          </div>

          {/* Zone Diffusion Elements Table */}
          <div className="space-y-4">
            <div className="grid grid-cols-6 gap-4 font-medium text-blue-600 text-sm">
              <div>Zona</div>
              <div>Impulsión</div>
              <div>Altura Max (mm)</div>
              <div>Dimensiones (mm)</div>
              <div>Caudal (m3/h)</div>
              <div>Velocidad de salida (m/s)</div>
            </div>

            {currentSystem.zones.slice(0, 2).map((zone, index) => (
              <div key={zone.id} className="space-y-3">
                <div className="grid grid-cols-6 gap-4 items-center">
                  <div className="bg-gray-100 p-2 rounded text-sm font-medium">{zone.name}</div>
                  <div>
                    <Select defaultValue="RDHV" disabled={currentStep < 4}>
                      <SelectTrigger className="bg-gray-50 text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="RDHV">RDHV</SelectItem>
                        <SelectItem value="RDLV">RDLV</SelectItem>
                        <SelectItem value="RDHC">RDHC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Select defaultValue="150" disabled={currentStep < 6}>
                      <SelectTrigger className="bg-gray-50 text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="100">100</SelectItem>
                        <SelectItem value="150">150</SelectItem>
                        <SelectItem value="200">200</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center gap-2">
                    <Select defaultValue="200x150" disabled={currentStep < 6}>
                      <SelectTrigger className="bg-gray-50 text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="200x150">2x 200 x 150</SelectItem>
                        <SelectItem value="250x150">2x 250 x 150</SelectItem>
                        <SelectItem value="300x150">2x 300 x 150</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="w-6 h-6 bg-blue-500 rounded-sm flex items-center justify-center">
                      <span className="text-white text-xs font-bold">S</span>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-2 rounded text-sm">{index === 0 ? "32.81" : "42.19"}</div>
                  <div className="flex items-center gap-2">
                    <Input
                      value={index === 0 ? "0.6" : "0.7"}
                      className="bg-gray-50 text-sm"
                      disabled={currentStep < 4}
                    />
                    <div className="w-6 h-6 bg-yellow-400 rounded-sm flex items-center justify-center">
                      <span className="text-white text-xs font-bold">!</span>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 ml-4">
                  <p>Color: Blanco</p>
                  <p>Fijación: Clip</p>
                  <p>Regulación: Sin regulación</p>
                  <p>Con plenum aislado</p>
                  <button className="text-blue-500 hover:text-blue-700">Editar</button>
                </div>
              </div>
            ))}
          </div>

          {/* Common Return Section */}
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
                  <Select value={commonReturnType} onValueChange={setCommonReturnType} disabled={currentStep < 4}>
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
                  <Select value={commonReturnHeight} onValueChange={setCommonReturnHeight} disabled={currentStep < 4}>
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
                  <Select
                    value={commonReturnDimensions}
                    onValueChange={setCommonReturnDimensions}
                    disabled={currentStep < 4}
                  >
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
                  <Input value="0.4" className="bg-gray-50 text-sm" disabled={currentStep < 4} />
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

          <div className="flex justify-end">
            <Button className="bg-[#007297] hover:bg-[#005a73] text-white px-8">PROCEDER</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
