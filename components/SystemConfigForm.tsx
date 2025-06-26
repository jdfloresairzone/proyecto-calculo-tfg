"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Info, Plus, Trash2, Loader2 } from "lucide-react"
import type { Zone as QuoteZone, System as QuoteSystem } from "@/app/types/quote"

type UIZone = QuoteZone & { id: string } // Añadimos id localmente para manejar en frontend
type UISystem = Omit<QuoteSystem, "zones"> & { zones: UIZone[] }

export default function SystemConfigForm() {
  const [currentStep, setCurrentStep] = useState(1)

  const [address, setAddress] = useState("las-alpujarras")
  const [agent, setAgent] = useState("agent")
  const [clientReference, setClientReference] = useState("")
  const [referenceError, setReferenceError] = useState(false)

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
  // Diffusion elements state
  const [commonReturnType, setCommonReturnType] = useState("RRFR")
  const [commonReturnHeight, setCommonReturnHeight] = useState("400")
  const [commonReturnDimensions, setCommonReturnDimensions] = useState("400x400")

  // Refs for auto-scrolling to cards
  const generalDataRef = useRef<HTMLDivElement>(null)
  const calculationOptionsRef = useRef<HTMLDivElement>(null)
  const systemConfigRef = useRef<HTMLDivElement>(null)
  const systemDetailRef = useRef<HTMLDivElement>(null)
  const interiorUnitRef = useRef<HTMLDivElement>(null)
  const plenumSelectionRef = useRef<HTMLDivElement>(null)
  const diffusionElementsRef = useRef<HTMLDivElement>(null)

  const scrollToNextCard = (step: number) => {
    const refs = [
      null, // step 0 doesn't exist
      generalDataRef,
      calculationOptionsRef,
      systemConfigRef,
      systemDetailRef,
      interiorUnitRef,
      plenumSelectionRef,
      diffusionElementsRef,
    ]

    const targetRef = refs[step]
    if (targetRef?.current) {
      setTimeout(() => {
        targetRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        })
      }, 100) // Small delay to ensure state update completes
    }
  }

  // Current system being edited
  const [currentSystem, setCurrentSystem] = useState<UISystem>({
    motorized_plenum: "",
    name: "Sistema 1",
    duct_type_iso: "CT_FX",
    bypass: { az_iso: "BY_NONE" },
    iumodel: {
      az_range: "07",
      brand_name: "Daikin",
      dampers: 3,
      iso_2: "DA",
      iso_3: "DAI",
      iumodel_name: "ADEA50A",
      plenum_type: "ST",
      reference: "AZC25DAIST07S3",
      size: "S",
      heat_power_kw: null,
      cold_power_kw: "9.50",
      maximum_flow_m3h: "1740.00",
      metric_system_iso: "INTERNATIONAL_METRIC_SYSTEM",
    },
    zones: [
      {
        id: "1",
        name: "Zona 1",
        height: 2.8,
        area: "20",
        climatisation_type_iso: "CLT_A",
        interface_iso: "TTO_TYPE_BLUEFACE",
        color_iso: "TTO_COLOR_WHITE",
        connection_iso: "CONNETION_TYPE_C",
        thermostat_iso: "AZCE6BLUEZEROCB",
        ratio: 100,
        demanded_power: null,
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
          flow: "580.00",
          duct_speed: 5.1,
          dumper_iso: "CPCC",
          quantity: 1,
          dumper_dimension_id: null,
          warning: "",
        },
        diffusion_configuration: {
          impulsion: { product_iso: "RDHV", diffusion_group_iso: "AIRQ" },
          return: { product_iso: "RSDR", diffusion_group_iso: "AIRQ" },
          max_height: 150,
          flow: "580.00",
          output_speed: 2.3,
          color_iso: "DIFUSSION_COLOR_B",
          fixing_type_iso: "DIFUSSION_FIXING_C",
          regulation_iso: "TYPE_REG_KO",
          plenum_option_iso: true,
          warning: "",
          quantity: 1,
          quantity_return: 1,
          real_height: 200,
          real_width: 600,
        },
        return_configuration: {
          return: { product_iso: "RSDR", diffusion_group_iso: "AIRQ" },
          max_height: 150,
          flow: "580.00",
          output_speed: 2.3,
          color_iso: "DIFUSSION_COLOR_B",
          fixing_type_iso: "DIFUSSION_FIXING_C",
          regulation_iso: "TYPE_REG_KO",
          plenum_option_iso: true,
          real_height: 200,
          real_width: 600,
        },
        iumodels: [],
        diffusion_type_iso: "DT_CG",
        flow: null,
      },
      {
        id: "2",
        name: "Zona 2",
        height: 2.8,
        area: "20",
        climatisation_type_iso: "CLT_A",
        interface_iso: "TTO_TYPE_BLUEFACE",
        color_iso: "TTO_COLOR_WHITE",
        connection_iso: "CONNETION_TYPE_R",
        thermostat_iso: "AZCE6BLUEZEROCB",
        ratio: 100,
        demanded_power: null,
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
          flow: "580.00",
          duct_speed: 5.1,
          dumper_iso: "CPCC",
          quantity: 1,
          dumper_dimension_id: null,
          warning: "",
        },
        diffusion_configuration: {
          impulsion: { product_iso: "RDHV", diffusion_group_iso: "AIRQ" },
          return: { product_iso: "RSDR", diffusion_group_iso: "AIRQ" },
          max_height: 150,
          flow: "580.00",
          output_speed: 2.3,
          color_iso: "DIFUSSION_COLOR_B",
          fixing_type_iso: "DIFUSSION_FIXING_C",
          regulation_iso: "TYPE_REG_KO",
          plenum_option_iso: true,
          warning: "",
          quantity: 1,
          quantity_return: 1,
          real_height: 200,
          real_width: 600,
        },
        return_configuration: {
          return: { product_iso: "RSDR", diffusion_group_iso: "AIRQ" },
          max_height: 150,
          flow: "580.00",
          output_speed: 2.3,
          color_iso: "DIFUSSION_COLOR_B",
          fixing_type_iso: "DIFUSSION_FIXING_C",
          regulation_iso: "TYPE_REG_KO",
          plenum_option_iso: true,
          real_height: 200,
          real_width: 600,
        },
        iumodels: [],
        diffusion_type_iso: "DT_CG",
        flow: null,
      },
    ],
    return_configuration: null,
    warning: null,
    include_largueros: true,
    include_energy_usage_meter: true,
    include_dehumidifier: false,
    include_return_plenum: false,
    include_mixing_box: true,
    include_thermostat: true,
  })

  const [isGeneratingQuote, setIsGeneratingQuote] = useState(false)

  const addZone = () => {
    const newZone: UIZone = {
      id: Date.now().toString(),
      name: `Zona ${currentSystem.zones.length + 1}`,
      height: 2.5,
      area: "20",
      climatisation_type_iso: "CLT_A",
      interface_iso: "TTO_TYPE_BLUEFACE",
      color_iso: "TTO_COLOR_WHITE",
      connection_iso: "CONNETION_TYPE_C",
      thermostat_iso: "AZCE6BLUEZEROCB",
      ratio: 100,
      demanded_power: null,
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
        flow: "580.00",
        duct_speed: 5.1,
        dumper_iso: "CPCC",
        quantity: 1,
        dumper_dimension_id: null,
        warning: "",
      },
      diffusion_configuration: {
        impulsion: { product_iso: "RDHV", diffusion_group_iso: "AIRQ" },
        return: { product_iso: "RSDR", diffusion_group_iso: "AIRQ" },
        max_height: 150,
        flow: "580.00",
        output_speed: 2.3,
        color_iso: "DIFUSSION_COLOR_B",
        fixing_type_iso: "DIFUSSION_FIXING_C",
        regulation_iso: "TYPE_REG_KO",
        plenum_option_iso: true,
        warning: "",
        quantity: 1,
        quantity_return: 1,
        real_height: 200,
        real_width: 600,
      },
      return_configuration: {
        return: { product_iso: "RSDR", diffusion_group_iso: "AIRQ" },
        max_height: 150,
        flow: "580.00",
        output_speed: 2.3,
        color_iso: "DIFUSSION_COLOR_B",
        fixing_type_iso: "DIFUSSION_FIXING_C",
        regulation_iso: "TYPE_REG_KO",
        plenum_option_iso: true,
        real_height: 200,
        real_width: 600,
      },
      iumodels: [],
      diffusion_type_iso: "DT_CG",
      flow: null,
    }

    setCurrentSystem((prev) => ({
      ...prev,
      zones: [...prev.zones, newZone],
    }))
  }

  const removeZone = (zoneId: string) => {
    if (currentSystem.zones.length > 2) {
      setCurrentSystem((prev) => ({
        ...prev,
        zones: prev.zones.filter((zone) => zone.id !== zoneId),
      }))
    }
  }

  const updateZone = (zoneId: string, field: keyof UIZone, value: any) => {
    setCurrentSystem((prev) => ({
      ...prev,
      zones: prev.zones.map((zone) => (zone.id === zoneId ? { ...zone, [field]: value } : zone)),
    }))
  }

  const updateZoneDiffusion = (
    zoneId: string,
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
    zoneId: string,
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
    setCurrentSystem((prev) => ({
      ...prev,
      [field]: value,
    }))
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && currentStep === 1) {
      setCurrentStep(2)
    }
  }

  const generarPresupuesto = async () => {
    setIsGeneratingQuote(true)
    try {
      const response = await fetch("https://devapi.airzonecloud.com/msquotairzone.v1/projects/quote-systems", {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxNCIsImp0aSI6ImFmOTRjYjZlMjQzYmIyZDI0YTExYzBiYTcwMDUxZmIzMmQ2ZWJkYmE0ZmY2YmUyYTg3MzkzMDBlNWYxMGUzZDVmZjMxMDFkOTYzOTY5ZTNjIiwiaWF0IjoxNzUwMTc0MTQ1LjMwNjQ5NSwibmJmIjoxNzUwMTc0MTQ1LjMwNjQ5OCwiZXhwIjoxNzgxNzEwMTQ1LjI5OTA5MSwic3ViIjoiOTE3MSIsInNjb3BlcyI6WyIqIl19.Kbag3lwDj4KkYPsoPpaDK0LlkmUSYOhHHp6BadHmIZE_p-SG632hF6EdLljrumuyH77SavpbMBUJ1A5QAdW_TU6nc07HIlGkjn6n0rOtPlF-TkURO1ih_akGzaPedZHvUkxq6jDdo3IDoZJCi5N5Ijf7Pv-OnfGOEuYE2wRld262oFfh-HuwSo_CMYRUHUN3EtoQgNdv7yqF4_w97mzHPi-i-b54wdnCebdeX9rY9IERjETYj3Iglv7iZvbUJwbd2PjAdcGbrwbC_8l8eiFeIQiRg-L8hHHui9KZSIjaEtuziGkewwKHG_d7GN5Y_xuSg8EfHAWZMKCu6hsXN037fnx7zx3gudqeXvbbqT8OaSwC_j_X02eSmOzyZ_cILmF6rz2T7u3HSHEOVSFfL4nK5fXK1sXSRXgrsGv4vq3O44uj8U0qd607h71nuEvh_87KwPQ9wb1ck_sJIE_JsWn9qKs4Cx6r-zCWQ_VsNm67U3G2N9RrqzP0ScBOpdmKv2OVzcnSe7BwvtjGmU7DLtAlPETBzijAPaUon4Dst-4txLXScLUNT_vCLqiD2ppfWHnouUv_eLv-6p9cTd-DGIk5GtxBxAc8d62kjliCSsyJYudhJSXrJFGr6WKy_TkjVEp9v_xKEFxZk_QrBwhVnPPlrPBKxuuUa1M_JJBR-A30bCU",
          "Content-Type": "application/json;charset=UTF-8",
          apiKey: "wsCbB83fPmD4apvZRi5D4s95U20pEiOc",
        },
        body: JSON.stringify({
          quote_header_id: 7540,
          systems: [
            {
              motorized_plenum: "AZC25DAIST07S3",
              name: "Sistema 1",
              duct_type_iso: "CT_FX",
              bypass: {
                az_iso: "BY_NONE"
              },
              iumodel: {
                az_range: "07",
                brand_name: "Daikin",
                dampers: 3,
                iso_2: "DA",
                iso_3: "DAI",
                iumodel_name: "ADEA50A",
                plenum_type: "ST",
                reference: "AZC25DAIST07S3",
                size: "S",
                heat_power_kw: null,
                cold_power_kw: 30,
                maximum_flow_m3h: 440,
                metric_system_iso: "INTERNATIONAL_METRIC_SYSTEM"
              },
              zones: [
                {
                  name: "Zona 1",
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
                    duct_speed: 1.3,
                    dumper_iso: "CPCC",
                    quantity: 1,
                    dumper_dimension_id: 5,
                    warning: "<p>Velocidad en ducto muy baja en <strong>Zona 1</strong>.</p><p>Seleccione una reducci^ón o verifique con el n^úmero de compuertas disponibles del Plenum, si es posible eliminar un elemento de difusi^ón en la zona con velocidad baja.</p>"
                  },
                  diffusion_configuration: {
                    impulsion: {
                      product_iso: "RDHV",
                      diffusion_group_iso: "AIRQ"
                    },
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
                    real_width: "200"
                  },
                  return_configuration: null,
                  iumodels: [],
                  diffusion_type_iso: "DT_CG",
                  flow: null
                },
                {
                  name: "Zona 2",
                  height: 2.5,
                  area: 20,
                  climatisation_type_iso: "CLT_A",
                  interface_iso: "TTO_TYPE_THINK",
                  color_iso: "TTO_COLOR_WHITE",
                  connection_iso: "CONNETION_TYPE_R",
                  thermostat_iso: "AZCE6THINKRB",
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
                    duct_speed: 1.3,
                    dumper_iso: "CPCC",
                    quantity: 1,
                    dumper_dimension_id: 5,
                    warning: "<p>Velocidad en ducto muy baja en <strong>Zona 2</strong>.</p><p>Seleccione una reducci^ón o verifique con el n^úmero de compuertas disponibles del Plenum, si es posible eliminar un elemento de difusi^ón en la zona con velocidad baja.</p>"
                  },
                  diffusion_configuration: {
                    impulsion: {
                      product_iso: "RDHV",
                      diffusion_group_iso: "AIRQ"
                    },
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
                    real_width: "200"
                  },
                  return_configuration: null,
                  iumodels: [],
                  diffusion_type_iso: "DT_CG",
                  flow: null
                },
                {
                  name: "Zona 3",
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
                    duct_speed: 1.3,
                    dumper_iso: "CPCC",
                    quantity: 1,
                    dumper_dimension_id: 5,
                    warning: "<p>Velocidad en ducto muy baja en <strong>Zona 3</strong>.</p><p>Seleccione una reducci^ón o verifique con el n^úmero de compuertas disponibles del Plenum, si es posible eliminar un elemento de difusi^ón en la zona con velocidad baja.</p>"
                  },
                  diffusion_configuration: {
                    impulsion: {
                      product_iso: "RDHV",
                      diffusion_group_iso: "AIRQ"
                    },
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
                    real_width: "200"
                  },
                  return_configuration: null,
                  iumodels: [],
                  diffusion_type_iso: "DT_CG",
                  flow: null
                }
              ],
              return_configuration: {
                return: {
                  product_iso: "RRFR",
                  diffusion_group_iso: "AIRQ"
                },
                max_height: 400,
                flow: 440,
                output_speed: 0.5,
                color_iso: "DIFUSSION_COLOR_B",
                fixing_type_iso: "DIFUSSION_FIXING_T",
                regulation_iso: "TYPE_REG_KO",
                plenum_option_iso: false,
                warning: "<p>Velocidad en ducto muy baja en <strong>{zone}</strong>.</p><p>Seleccione una reducci^ón o verifique con el n^úmero de compuertas disponibles del Plenum, si es posible eliminar un elemento de difusi^ón en la zona con velocidad baja.</p>",
                real_height: 400,
                real_width: 800
              },
              warning: "Potencia de la Unidad Interior. <br>Se recomienda la selecci^ón de una unidad con potencia comprendida entre 70^% y 130^% de la potencia de demanda total de la instalaci^ón.",
              include_largueros: true,
              include_airq_sensor: false,
              include_energy_usage_meter: false,
              include_dehumidifier: false,
              include_return_plenum: false,
              include_mixing_box: false,
              include_thermostat: true
            }
          ]
        })
      })
      const data = await response.json()
    } catch (error) {
      console.error("Error al generar el presupuesto:", error)
      alert("Error al generar el presupuesto.")
    } finally {
      setIsGeneratingQuote(false)
    }
  }

  const generarCabecera = async () => {
    try {
      const response = await fetch("https://devapi.airzonecloud.com/msquotairzone.v1/quote-headers/7540", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxNCIsImp0aSI6ImFmOTRjYjZlMjQzYmIyZDI0YTExYzBiYTcwMDUxZmIzMmQ2ZWJkYmE0ZmY2YmUyYTg3MzkzMDBlNWYxMGUzZDVmZjMxMDFkOTYzOTY5ZTNjIiwiaWF0IjoxNzUwMTc0MTQ1LjMwNjQ5NSwibmJmIjoxNzUwMTc0MTQ1LjMwNjQ5OCwiZXhwIjoxNzgxNzEwMTQ1LjI5OTA5MSwic3ViIjoiOTE3MSIsInNjb3BlcyI6WyIqIl19.Kbag3lwDj4KkYPsoPpaDK0LlkmUSYOhHHp6BadHmIZE_p-SG632hF6EdLljrumuyH77SavpbMBUJ1A5QAdW_TU6nc07HIlGkjn6n0rOtPlF-TkURO1ih_akGzaPedZHvUkxq6jDdo3IDoZJCi5N5Ijf7Pv-OnfGOEuYE2wRld262oFfh-HuwSo_CMYRUHUN3EtoQgNdv7yqF4_w97mzHPi-i-b54wdnCebdeX9rY9IERjETYj3Iglv7iZvbUJwbd2PjAdcGbrwbC_8l8eiFeIQiRg-L8hHHui9KZSIjaEtuziGkewwKHG_d7GN5Y_xuSg8EfHAWZMKCu6hsXN037fnx7zx3gudqeXvbbqT8OaSwC_j_X02eSmOzyZ_cILmF6rz2T7u3HSHEOVSFfL4nK5fXK1sXSRXgrsGv4vq3O44uj8U0qd607h71nuEvh_87KwPQ9wb1ck_sJIE_JsWn9qKs4Cx6r-zCWQ_VsNm67U3G2N9RrqzP0ScBOpdmKv2OVzcnSe7BwvtjGmU7DLtAlPETBzijAPaUon4Dst-4txLXScLUNT_vCLqiD2ppfWHnouUv_eLv-6p9cTd-DGIk5GtxBxAc8d62kjliCSsyJYudhJSXrJFGr6WKy_TkjVEp9v_xKEFxZk_QrBwhVnPPlrPBKxuuUa1M_JJBR-A30bCU" /* tu token completo */,
          apiKey: "wsCbB83fPmD4apvZRi5D4s95U20pEiOc",
        },
        body: JSON.stringify({
          client_id: 7098,
          agency_id: 14407,
          name: clientReference,
          description: "",
          delivery_address_id: 9080,
          quotation_type_iso: "PROJECT",
          crm_opportunity_code: "",
          crm_opportunity_name: "",
        }),
      })

      const data = await response.json()
    } catch (error) {
      console.error("Error al actualizar cabecera:", error)
      alert("Error al actualizar la cabecera del presupuesto.")
    }
  }

  const OpcionesCalculo = async () => {
    try {
      const response = await fetch("https://devapi.airzonecloud.com/msquotairzone.v1/projects/7540/quote-calculation-options", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxNCIsImp0aSI6ImFmOTRjYjZlMjQzYmIyZDI0YTExYzBiYTcwMDUxZmIzMmQ2ZWJkYmE0ZmY2YmUyYTg3MzkzMDBlNWYxMGUzZDVmZjMxMDFkOTYzOTY5ZTNjIiwiaWF0IjoxNzUwMTc0MTQ1LjMwNjQ5NSwibmJmIjoxNzUwMTc0MTQ1LjMwNjQ5OCwiZXhwIjoxNzgxNzEwMTQ1LjI5OTA5MSwic3ViIjoiOTE3MSIsInNjb3BlcyI6WyIqIl19.Kbag3lwDj4KkYPsoPpaDK0LlkmUSYOhHHp6BadHmIZE_p-SG632hF6EdLljrumuyH77SavpbMBUJ1A5QAdW_TU6nc07HIlGkjn6n0rOtPlF-TkURO1ih_akGzaPedZHvUkxq6jDdo3IDoZJCi5N5Ijf7Pv-OnfGOEuYE2wRld262oFfh-HuwSo_CMYRUHUN3EtoQgNdv7yqF4_w97mzHPi-i-b54wdnCebdeX9rY9IERjETYj3Iglv7iZvbUJwbd2PjAdcGbrwbC_8l8eiFeIQiRg-L8hHHui9KZSIjaEtuziGkewwKHG_d7GN5Y_xuSg8EfHAWZMKCu6hsXN037fnx7zx3gudqeXvbbqT8OaSwC_j_X02eSmOzyZ_cILmF6rz2T7u3HSHEOVSFfL4nK5fXK1sXSRXgrsGv4vq3O44uj8U0qd607h71nuEvh_87KwPQ9wb1ck_sJIE_JsWn9qKs4Cx6r-zCWQ_VsNm67U3G2N9RrqzP0ScBOpdmKv2OVzcnSe7BwvtjGmU7DLtAlPETBzijAPaUon4Dst-4txLXScLUNT_vCLqiD2ppfWHnouUv_eLv-6p9cTd-DGIk5GtxBxAc8d62kjliCSsyJYudhJSXrJFGr6WKy_TkjVEp9v_xKEFxZk_QrBwhVnPPlrPBKxuuUa1M_JJBR-A30bCU",
          apiKey: "wsCbB83fPmD4apvZRi5D4s95U20pEiOc",
        },
        body: JSON.stringify({
          calculation_type_iso: "AZ_DIMENSION_IU",
          element_iso: "AZ_SYSTEM_DIFFUSION",
          return_type_iso: "AZ_COMMON_ZONE_RETURN",
          system_speed: 4,
          diffusion_speed: 2.5,
          system_iso: "253_16",
          ccp_included: false,
          include_thermostat: true,
          include_airq_sensor: false,
          include_energy_usage_meter: false,
          radiant_technology_iso: "AZ_RPT_NONE",
          integration_technology_iso: "AZX6WSC5GER",
          aerothermal_iumodel: null
        })
      })

      const data = await response.json()
    } catch (error) {
      console.error("Error al actualizar opciones de cálculo:", error)
      alert("Error al guardar las opciones de cálculo.")
    }
  }

  const [brands, setBrands] = useState<{ id: number; name: string; iso_brand: string }[]>([])

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch("https://devapi.airzonecloud.com/msproduct.pv1/compatibilities/brands", {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxNCIsImp0aSI6ImFmOTRjYjZlMjQzYmIyZDI0YTExYzBiYTcwMDUxZmIzMmQ2ZWJkYmE0ZmY2YmUyYTg3MzkzMDBlNWYxMGUzZDVmZjMxMDFkOTYzOTY5ZTNjIiwiaWF0IjoxNzUwMTc0MTQ1LjMwNjQ5NSwibmJmIjoxNzUwMTc0MTQ1LjMwNjQ5OCwiZXhwIjoxNzgxNzEwMTQ1LjI5OTA5MSwic3ViIjoiOTE3MSIsInNjb3BlcyI6WyIqIl19.Kbag3lwDj4KkYPsoPpaDK0LlkmUSYOhHHp6BadHmIZE_p-SG632hF6EdLljrumuyH77SavpbMBUJ1A5QAdW_TU6nc07HIlGkjn6n0rOtPlF-TkURO1ih_akGzaPedZHvUkxq6jDdo3IDoZJCi5N5Ijf7Pv-OnfGOEuYE2wRld262oFfh-HuwSo_CMYRUHUN3EtoQgNdv7yqF4_w97mzHPi-i-b54wdnCebdeX9rY9IERjETYj3Iglv7iZvbUJwbd2PjAdcGbrwbC_8l8eiFeIQiRg-L8hHHui9KZSIjaEtuziGkewwKHG_d7GN5Y_xuSg8EfHAWZMKCu6hsXN037fnx7zx3gudqeXvbbqT8OaSwC_j_X02eSmOzyZ_cILmF6rz2T7u3HSHEOVSFfL4nK5fXK1sXSRXgrsGv4vq3O44uj8U0qd607h71nuEvh_87KwPQ9wb1ck_sJIE_JsWn9qKs4Cx6r-zCWQ_VsNm67U3G2N9RrqzP0ScBOpdmKv2OVzcnSe7BwvtjGmU7DLtAlPETBzijAPaUon4Dst-4txLXScLUNT_vCLqiD2ppfWHnouUv_eLv-6p9cTd-DGIk5GtxBxAc8d62kjliCSsyJYudhJSXrJFGr6WKy_TkjVEp9v_xKEFxZk_QrBwhVnPPlrPBKxuuUa1M_JJBR-A30bCU", // tu token completo
            apiKey: "wsCbB83fPmD4apvZRi5D4s95U20pEiOc",
          },
        })

        const result = await response.json()
        const brandList = result.body?.brands || []
        setBrands(brandList)
      } catch (error) {
        console.error("Error al cargar las marcas:", error)
      }
    }

    fetchBrands()
  }, [])




  return (
    <div className="w-full mx-auto p-8 space-y-6" onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="w-full bg-gray-100 py-6 rounded-2xl">
        <div className="pl-6">
          <h1 className="text-2xl md:text-3xl font-medium text-[#007297]">Herramienta de presupuestos</h1>
          <p className="mt-2 text-lg text-gray-700 font-semibold">Proyecto de cálculo</p>
        </div>
      </div>

      <Card ref={generalDataRef}>
        <CardHeader>
          <CardTitle className="text-[#007297]">Presupuesto</CardTitle>
          <CardTitle className="text-[#007297]">Datos generales</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="address" className="text-blue-600">
              Dirección
            </Label>
            <Select value={address} onValueChange={setAddress} disabled={true}>
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
            <Label htmlFor="agente" className="text-blue-600 font-medium">
              Agente
            </Label>
            <Select value={agent} onValueChange={setAgent} disabled={true}>
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
            <Label htmlFor="referencia" className="text-blue-600 font-medium">
              Referencia presupuesto cliente
            </Label>
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

        </CardContent>

        <div className="flex justify-end pr-6">
          <Button
            className="bg-[#007297] hover:bg-[#005a73] px-8"
            onClick={() => {
              if (clientReference.trim() === "") {
                setReferenceError(true)
                return
              }

              setReferenceError(false)
              setCurrentStep(2)
              scrollToNextCard(2)
              generarCabecera()
            }}
          >
            PROCEDER
          </Button>
        </div>
      </Card>

      <Card className={currentStep < 2 ? "opacity-50 pointer-events-none" : ""} ref={calculationOptionsRef}>
        <CardHeader>
          <CardTitle className="text-[#007297]">Configuración del sistema</CardTitle>
          <CardDescription>Opciones de cálculo y configuración</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="calculation-type" className="text-blue-600">
                Tipo de cálculo
              </Label>
              <Select value={calculationType} onValueChange={setCalculationType} disabled={true} >
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
              <Label htmlFor="return-network-type" className="text-blue-600">
                Tipo de la red de retorno
              </Label>
              <Select value={returnNetworkType} onValueChange={setReturnNetworkType} disabled={true}>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="sistema" className="text-blue-600">
                Sistema
              </Label>
              <Select value={sistema} onValueChange={setSistema} disabled={true}>
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
              <Label htmlFor="tecnologia-integracion" className="text-blue-600">
                Tecnología de integración
              </Label>
              <Select
                value={tecnologiaIntegracion}
                onValueChange={setTecnologiaIntegracion}
                disabled={true}
              >
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
            <Button
              className="bg-[#007297] hover:bg-[#005a73] text-white px-8"
              onClick={() => {
                setCurrentStep(4)
                scrollToNextCard(4)
                OpcionesCalculo()
              }}
            >
              PROCEDER
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Single System Configuration */}
      <Card className={currentStep < 4 ? "opacity-50 pointer-events-none" : ""} ref={systemDetailRef}>
        <CardHeader>
          <CardTitle className="text-[#007297]">Sistema de Configuración</CardTitle>
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
              <Select
                value={currentSystem.duct_type_iso}
                onValueChange={(value) => updateSystem("duct_type_iso", value)}
                disabled={true}
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

          {/* Zones Configuration */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[#007297]">Zonas del Sistema (Mínimo 2 zonas)</h3>
              <Button onClick={addZone} variant="outline" size="sm" className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Añadir Zona
              </Button>
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
                        onChange={(e) => updateZone(zone.id, "height", e.target.value)}
                        className="bg-gray-50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-blue-600">Superficie (m2)</Label>
                      <Input
                        value={zone.area}
                        onChange={(e) => updateZone(zone.id, "area", e.target.value)}
                        className="bg-gray-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Tipo de climatización */}
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

                    {/* Unidades zonificadas */}
                    <div className="space-y-4">
                      <Label className="text-blue-600">Unidades zonificadas</Label>
                      <RadioGroup
                        value={String(zone.zonified)}
                        onValueChange={(value) => updateZone(zone.id, "zonified", value)}
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
                      <Select value={zone.color_iso} onValueChange={(value) => updateZone(zone.id, "color_iso", value)}>
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
                      <Select disabled={true} defaultValue="canalizable">
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
                      <Select value={String(zone.diffusion_configuration.quantity)}>
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
            <Button
              className="bg-[#007297] hover:bg-[#005a73] px-8"
              onClick={() => {
                setCurrentStep(5)
                scrollToNextCard(5)
              }}
              disabled={currentSystem.zones.length < 2}
            >
              PROCEDER
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Interior Unit Selection Section */}
      <Card className={currentStep < 5 ? "opacity-50 pointer-events-none" : ""} ref={interiorUnitRef}>
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
                className="bg-gray-50"
                placeholder="Unidad de conducto"
                disabled={currentStep < 5}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="brand" className="text-blue-600">
                Marca
              </Label>
              <div className="relative">
                <Select
                  value={currentSystem.iumodel.brand_name}
                  onValueChange={(value) => updateIumodel("brand_name", value)}
                  disabled={currentStep < 5}
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
              <Label htmlFor="model" className="text-blue-600">
                Modelo
              </Label>
              <div className="relative">
                <Select
                  value={currentSystem.iumodel.iumodel_name}
                  onValueChange={(value) => updateIumodel("iumodel_name", value)}
                  disabled={currentStep < 5}
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
              <Input
                value={currentSystem.iumodel.cold_power_kw}
                onChange={(value) => updateIumodel("cold_power_kw", value)}
                className="bg-gray-50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="flow-rate" className="text-blue-600">
                Caudal (m3/h)
              </Label>
              <Input
                id="flow-rate"
                value={currentSystem.iumodel.maximum_flow_m3h}
                className="bg-gray-50"
                disabled={true}
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              className="bg-[#007297] hover:bg-[#005a73] text-white px-8"
              onClick={() => {
                setCurrentStep(6)
                scrollToNextCard(6)
              }}
            >
              PROCEDER
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Plenum Selection Section */}
      <Card className={currentStep < 6 ? "opacity-50 pointer-events-none" : ""} ref={plenumSelectionRef}>
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
                value={currentSystem.iumodel.plenum_type}
                onValueChange={(value) => updateIumodel("plenum_type", value)}
                disabled={currentStep < 6}
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
              <Label htmlFor="number-dampers" className="text-blue-600">
                Número de compuertas
              </Label>
              <Select
                value={String(currentSystem.iumodel.dampers)}
                onValueChange={(value) => updateIumodel("dampers", value)}
                disabled={currentStep < 6}
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
                  Importante: este plenum se suministra con {currentSystem.iumodel.dampers} compuertas motorizadas de
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

            {currentSystem.zones.slice(0, currentSystem.iumodel.dampers).map((zone, index) => (
              <div key={zone.id} className="grid grid-cols-4 gap-4 items-center">
                <div className="bg-gray-100 p-2 rounded text-sm font-medium">{zone.name}</div>
                <div className="bg-gray-100 p-2 rounded text-sm">
                  {zone.diffusion_configuration.quantity_return} x {zone.diffusion_configuration.real_height}
                </div>
                <div className="bg-gray-100 p-2 rounded text-sm">{zone.dumper_configuration.flow}</div>
                <div className="flex items-center gap-2">
                  <Input
                    value={zone.dumper_configuration.duct_speed}
                    className="bg-red-50 border-red-200 text-sm"
                    disabled={currentStep < 6}
                  />
                  <div className="w-6 h-6 bg-yellow-400 rounded-sm flex items-center justify-center">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <Button
              className="bg-[#007297] hover:bg-[#005a73] text-white px-8"
              onClick={() => {
                setCurrentStep(7)
                scrollToNextCard(7)
              }}
            >
              PROCEDER
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Diffusion Elements Selection Section */}
      <Card className={currentStep < 7 ? "opacity-50 pointer-events-none" : ""} ref={diffusionElementsRef}>
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
                  checked={currentSystem.include_largueros}
                  onCheckedChange={(checked: boolean) =>
                    setCurrentSystem((prev) => ({
                      ...prev,
                      include_largueros: checked,
                    }))
                  }
                  disabled={currentStep < 7}
                />
                <Label htmlFor="stringers-si">Sí</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="stringers-no"
                  checked={!currentSystem.include_largueros}
                  onCheckedChange={(checked: boolean) =>
                    setCurrentSystem((prev) => ({
                      ...prev,
                      include_largueros: !checked,
                    }))
                  }
                  disabled={currentStep < 7}
                />
                <Label htmlFor="stringers-no">No</Label>
              </div>
            </div>
          </div>


          {/* Zone Diffusion Elements Table */}
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
                {/* Zona */}
                <div className="bg-gray-100 p-2 rounded text-sm font-medium">{zone.name}</div>

                {/* Impulsión */}
                <div className="flex flex-col gap-1">
                  <Select
                    value={zone.diffusion_configuration.impulsion.product_iso}
                    onValueChange={(value) =>
                      updateZoneDiffusionImpulsion(zone.id, "product_iso", value)
                    }
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

                {/* Retorno */}
                <div className="flex flex-col gap-1">
                  <Select
                    value={zone.diffusion_configuration.return.product_iso}
                    onValueChange={(value) =>
                      setCurrentSystem((prev) => ({
                        ...prev,
                        zones: prev.zones.map((z) =>
                          z.id === zone.id
                            ? {
                              ...z,
                              diffusion_configuration: {
                                ...z.diffusion_configuration,
                                return: {
                                  ...z.diffusion_configuration.return,
                                  product_iso: value,
                                },
                              },
                            }
                            : z
                        ),
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

                {/* Altura Max */}
                <div>
                  <Select
                    value={String(zone.diffusion_configuration.max_height)}
                    onValueChange={(value) =>
                      updateZoneDiffusion(zone.id, "max_height", parseInt(value))
                    }
                  >
                    <SelectTrigger className="bg-gray-50 text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[100, 150, 200, 250, 300, 350, 400].map((val) => (
                        <SelectItem key={val} value={String(val)}>{val}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Dimensiones */}
                <div className="flex items-center gap-2">
                  <Select defaultValue="200x150" disabled={currentStep < 7}>
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

                {/* Caudal */}
                <div className="bg-gray-100 p-2 rounded text-sm">
                  {zone.diffusion_configuration.flow}
                </div>

                {/* Velocidad de salida */}
                <div className="flex items-center gap-2">
                  <Input
                    value={zone.diffusion_configuration.output_speed}
                    className="bg-gray-50 text-sm"
                    disabled={currentStep < 7}
                  />
                  <div className="w-6 h-6 bg-yellow-400 rounded-sm flex items-center justify-center">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
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
                  <Select value={commonReturnType} onValueChange={setCommonReturnType} disabled={currentStep < 7}>
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
                  <Select value={commonReturnHeight} onValueChange={setCommonReturnHeight} disabled={currentStep < 7}>
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
                    disabled={currentStep < 7}
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
                  <Input value="0.4" className="bg-gray-50 text-sm" disabled={currentStep < 7} />
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
      <div className="flex justify-end">
        <Button
          className="bg-[#007297] hover:bg-[#005a73] text-white px-8"
          onClick={generarPresupuesto}
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
