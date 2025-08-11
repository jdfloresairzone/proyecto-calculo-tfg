"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2 } from 'lucide-react'
import {
  type UIZone,
  type UISystem,
  makeInitialSystem,
} from "./types/system-config"
import {
  GeneralDataSection,
} from "./system-config/sections/general-data-section"
import {
  CalculationOptionsSection,
} from "./system-config/sections/calculation-options-section"
import {
  SystemDetailSection,
} from "./system-config/sections/system-detail-section"
import {
  InteriorUnitSection,
} from "./system-config/sections/interior-unit-section"
import {
  PlenumSelectionSection,
} from "./system-config/sections/plenum-selection-section"
import {
  DiffusionElementsSection,
} from "./system-config/sections/diffusion-elements-section"
import {
  getBrands,
  generarPresupuesto,
  descargarPresupuestoPDF,
} from "../lib/requests/quote"

export default function SystemConfigForm() {
  const [currentStep, setCurrentStep] = useState(1)

  // General data
  const [address, setAddress] = useState("las-alpujarras")
  const [agent, setAgent] = useState("agent")
  const [clientReference, setClientReference] = useState("")
  const [referenceError, setReferenceError] = useState(false)

  // Calculation options
  const [calculationType, setCalculationType] = useState("dimensionamiento")
  const [systemAirVelocity, setSystemAirVelocity] = useState("4")
  const [diffusionAirVelocity, setDiffusionAirVelocity] = useState("2.5")
  const [returnNetworkType, setReturnNetworkType] = useState("retorno-unico")
  const [sistema, setSistema] = useState("easyzone")
  const [tecnologiaIntegracion, setTecnologiaIntegracion] = useState("airzone-cloud-wifi")

  // Diffusion elements (common return helpers)
  const [commonReturnType, setCommonReturnType] = useState("RRFR")
  const [commonReturnHeight, setCommonReturnHeight] = useState("400")
  const [commonReturnDimensions, setCommonReturnDimensions] = useState("400x400")

  // Section refs
  const generalDataRef = useRef<HTMLDivElement>(null)
  const calculationOptionsRef = useRef<HTMLDivElement>(null)
  const systemDetailRef = useRef<HTMLDivElement>(null)
  const interiorUnitRef = useRef<HTMLDivElement>(null)
  const plenumSelectionRef = useRef<HTMLDivElement>(null)
  const diffusionElementsRef = useRef<HTMLDivElement>(null)

  const scrollToNextCard = (step: number) => {
    const refs = [
      null,
      generalDataRef,
      calculationOptionsRef,
      systemDetailRef,
      interiorUnitRef,
      plenumSelectionRef,
      diffusionElementsRef,
    ] as const
    const targetRef = refs[step] as typeof refs[number]
    if (targetRef?.current) {
      setTimeout(() => {
        targetRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        })
      }, 100)
    }
  }

  // System state
  const [currentSystem, setCurrentSystem] = useState<UISystem>(() => makeInitialSystem())

  const addZone = () => {
    const newZone: UIZone = {
      id: currentSystem.zones.length + 1,
      name: `Zona ${currentSystem.zones.length + 1}`,
      height: 2.5,
      area: 20,
      climatisation_type_iso: "CLT_A",
      interface_iso: "TTO_TYPE_BLUEFACE",
      color_iso: "TTO_COLOR_WHITE",
      connection_iso: "CONNETION_TYPE_C",
      thermostat_iso: "AZCE6BLUEZEROCB",
      ratio: 100,
      demanded_power: 2,
      quote_diffusion_elements_quantity: 1,
      quote_return_elements_quantity: 1,
      zonified: 1,
      radiant_type: null,
      colectors: null,
      include_thermostatic_valve: false,
      thermostatic_valve_quantity: null,
      radiators_quantity: null,
      dumper_configuration: {
        reduction: 0,
        flow: 146.67,
        duct_speed: 5.1,
        dumper_iso: "CPCC",
        quantity: 1,
        dumper_dimension_id: 5,
        warning: "",
      },
      diffusion_configuration: {
        impulsion: { product_iso: "RDHV", diffusion_group_iso: "AIRQ" },
        return: null,
        max_height: 150,
        flow: 146.67,
        output_speed: 2.5,
        color_iso: "DIFUSSION_COLOR_B",
        fixing_type_iso: "DIFUSSION_FIXING_C",
        regulation_iso: "TYPE_REG_KO",
        plenum_option_iso: true,
        warning: "",
        quantity: 1,
        quantity_return: 1,
        real_height: "150",
        real_width: "200",
      },
      return_configuration: null,
      iumodels: [],
      diffusion_type_iso: "DT_CG",
      flow: null,
    }

    setCurrentSystem((prev) => ({
      ...prev,
      zones: [...prev.zones, newZone],
      iumodel: { ...prev.iumodel, dampers: prev.iumodel.dampers + 1 },
    }))
  }

  const removeZone = (zoneId: number) => {
    if (currentSystem.zones.length > 2) {
      setCurrentSystem((prev) => ({
        ...prev,
        zones: prev.zones.filter((z) => z.id !== zoneId),
        iumodel: { ...prev.iumodel, dampers: prev.iumodel.dampers - 1 },
      }))
    }
  }

  const updateZone = (zoneId: number, field: keyof UIZone, value: any) => {
    setCurrentSystem((prev) => {
      const updatedZones = prev.zones.map((zone) => {
        if (zone.id === zoneId) {
          if (field === "quote_diffusion_elements_quantity") {
            return {
              ...zone,
              quote_diffusion_elements_quantity: Number(value),
              quote_return_elements_quantity: Number(value),
            }
          }
          return { ...zone, [field]: value }
        }
        return zone
      })

      let newDampers = prev.iumodel.dampers
      if (field === "quote_diffusion_elements_quantity") {
        const originalQuantity = prev.zones.find((z) => z.id === zoneId)?.quote_diffusion_elements_quantity || 1
        const diff = Number(value) - originalQuantity
        newDampers = newDampers + diff
      }

      return {
        ...prev,
        zones: updatedZones,
        iumodel: { ...prev.iumodel, dampers: newDampers },
      }
    })
  }

  const updateZoneDiffusion = (
    zoneId: number,
    field: keyof UIZone["diffusion_configuration"],
    value: any
  ) => {
    setCurrentSystem((prev) => ({
      ...prev,
      zones: prev.zones.map((zone) =>
        zone.id === zoneId
          ? {
            ...zone,
            diffusion_configuration: {
              ...zone.diffusion_configuration,
              [field]: value,
            },
          }
          : zone
      ),
    }))
  }

  const updateZoneDiffusionImpulsion = (
    zoneId: number,
    field: keyof UIZone["diffusion_configuration"]["impulsion"],
    value: any
  ) => {
    setCurrentSystem((prev) => ({
      ...prev,
      zones: prev.zones.map((zone) =>
        zone.id === zoneId
          ? {
            ...zone,
            diffusion_configuration: {
              ...zone.diffusion_configuration,
              impulsion: {
                ...zone.diffusion_configuration.impulsion,
                [field]: value,
              },
            },
          }
          : zone
      ),
    }))
  }

  const updateSystem = (field: keyof UISystem, value: any) => {
    setCurrentSystem((prev) => ({ ...prev, [field]: value }))
  }

  const updateIumodel = (field: keyof UISystem["iumodel"], value: any) => {
    setCurrentSystem((prev) => ({
      ...prev,
      iumodel: {
        ...prev.iumodel,
        [field]: value,
      },
    }))
  }

  const [isGeneratingQuote, setIsGeneratingQuote] = useState(false)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && currentStep === 1) {
      setCurrentStep(2)
    }
  }

  const handleClick = () => {
    setIsGeneratingQuote(true)
    generarPresupuesto(setIsGeneratingQuote)
    descargarPresupuestoPDF()
  }

  const [brands, setBrands] = useState<{ id: number; name: string; iso_brand: string }[]>([])

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const result = await getBrands()
        setBrands(result)
      } catch (error) {
        console.error("Error al cargar las marcas:", error)
      }
    }
    fetchBrands()
  }, [])

  useEffect(() => {
    // Debugging state changes
    // console.log("🔹 currentSystem ha cambiado:", currentSystem)
  }, [currentSystem])

  return (
    <div className="w-full mx-auto p-8 space-y-6" onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="w-full bg-gray-100 py-6 rounded-2xl">
        <div className="pl-6">
          <h1 className="text-2xl md:text-3xl font-medium text-[#007297]">Herramienta de presupuestos</h1>
          <p className="mt-2 text-lg text-gray-700 font-semibold">Proyecto de cálculo</p>
        </div>
      </div>

      <GeneralDataSection
        containerRef={generalDataRef}
        address={address}
        setAddress={setAddress}
        agent={agent}
        setAgent={setAgent}
        clientReference={clientReference}
        setClientReference={setClientReference}
        referenceError={referenceError}
        setReferenceError={setReferenceError}
        onProceed={() => {
          if (clientReference.trim() === "") {
            setReferenceError(true)
            return
          }
          setReferenceError(false)
          setCurrentStep(2)
          scrollToNextCard(2)
        }}
      />

      <CalculationOptionsSection
        containerRef={calculationOptionsRef}
        disabled={currentStep < 2}
        calculationType={calculationType}
        setCalculationType={setCalculationType}
        systemAirVelocity={systemAirVelocity}
        setSystemAirVelocity={setSystemAirVelocity}
        diffusionAirVelocity={diffusionAirVelocity}
        setDiffusionAirVelocity={setDiffusionAirVelocity}
        returnNetworkType={returnNetworkType}
        setReturnNetworkType={setReturnNetworkType}
        sistema={sistema}
        setSistema={setSistema}
        tecnologiaIntegracion={tecnologiaIntegracion}
        setTecnologiaIntegracion={setTecnologiaIntegracion}
        onProceed={() => {
          setCurrentStep(4)
          scrollToNextCard(4)
        }}
      />

      <SystemDetailSection
        containerRef={systemDetailRef}
        disabled={currentStep < 4}
        currentSystem={currentSystem}
        addZone={addZone}
        removeZone={removeZone}
        updateZone={updateZone}
        updateSystem={updateSystem}
        onProceed={() => {
          setCurrentStep(5)
          scrollToNextCard(5)
        }}
      />

      <InteriorUnitSection
        containerRef={interiorUnitRef}
        disabled={currentStep < 5}
        brands={brands}
        currentSystem={currentSystem}
        updateIumodel={updateIumodel}
        onProceed={() => {
          setCurrentStep(6)
          scrollToNextCard(6)
        }}
      />

      <PlenumSelectionSection
        containerRef={plenumSelectionRef}
        disabled={currentStep < 6}
        currentSystem={currentSystem}
        updateIumodel={updateIumodel}
        onProceed={() => {
          setCurrentStep(7)
          scrollToNextCard(7)
        }}
      />

      <DiffusionElementsSection
        containerRef={diffusionElementsRef}
        disabled={currentStep < 7}
        currentSystem={currentSystem}
        setCurrentSystem={setCurrentSystem}
        updateZoneDiffusionImpulsion={updateZoneDiffusionImpulsion}
        updateZoneDiffusion={updateZoneDiffusion}
        commonReturnType={commonReturnType}
        setCommonReturnType={setCommonReturnType}
        commonReturnHeight={commonReturnHeight}
        setCommonReturnHeight={setCommonReturnHeight}
        commonReturnDimensions={commonReturnDimensions}
        setCommonReturnDimensions={setCommonReturnDimensions}
      />

      <div className="flex justify-end">
        <Button
          className="bg-[#007297] hover:bg-[#005a73] text-white px-8"
          onClick={handleClick}
          disabled={isGeneratingQuote}
        >
          {isGeneratingQuote ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generando presupuesto...
            </>
          ) : (
            "GENERAR PRESUPUESTO"
          )}
        </Button>
      </div>
    </div>
  )
}
