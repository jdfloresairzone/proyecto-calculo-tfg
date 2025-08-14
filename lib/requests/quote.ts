"use client"

// Removed invalid import and made functions exportable
export const generarCabecera = async (clientReference: string) => {
  try {
    const response = await fetch("https://devapi.airzonecloud.com/msquotairzone.v1/quote-headers/7540", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Content-Type": "application/json",
        apiKey: `${process.env.NEXT_PUBLIC_API_KEY}`,
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

export const OpcionesCalculo = async (systemAirVelocity: string, diffusionAirVelocity: string) => {
  try {
    const response = await fetch(
      "https://devapi.airzonecloud.com/msquotairzone.v1/projects/7540/quote-calculation-options",
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          apiKey: `${process.env.NEXT_PUBLIC_API_KEY}`,
        },
        body: JSON.stringify({
          calculation_type_iso: "AZ_DIMENSION_IU",
          element_iso: "AZ_SYSTEM_DIFFUSION",
          return_type_iso: "AZ_COMMON_ZONE_RETURN",
          system_speed: Number.parseFloat(systemAirVelocity),
          diffusion_speed: Number.parseFloat(diffusionAirVelocity),
          system_iso: "253_16",
          ccp_included: false,
          include_thermostat: true,
          include_airq_sensor: false,
          include_energy_usage_meter: false,
          radiant_technology_iso: "AZ_RPT_NONE",
          integration_technology_iso: "AZX6WSC5GER",
          aerothermal_iumodel: null,
        }),
      },
    )

    const data = await response.json()
  } catch (error) {
    console.error("Error al actualizar opciones de cálculo:", error)
    alert("Error al guardar las opciones de cálculo.")
  }
}

export const descargarPresupuestoPDF = async () => {
  try {
    const response = await fetch(
      `https://devapi.airzonecloud.com/msquotairzone.v1/quote-headers/254136/pdf/pvp?discount=0&memory=true`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
          apikey: `${process.env.NEXT_PUBLIC_API_KEY}`,
          "app-locale": "es",
          "app-market": "ib",
        },
      },
    )

    if (!response.ok) {
      throw new Error(`Error al descargar el PDF: ${response.status}`)
    }

    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = url
    link.download = "presupuesto_airzone.pdf"
    document.body.appendChild(link)
    link.click()
    link.remove()
    window.URL.revokeObjectURL(url)
  } catch (error) {
    console.error("Error al generar el PDF:", error)
    alert("No se pudo descargar el presupuesto en PDF.")
  }
}

export const generarPresupuesto = async (setIsGeneratingQuote: (loading: boolean) => void) => {
  setIsGeneratingQuote(true)
  try {
    const response = await fetch("https://devapi.airzonecloud.com/msquotairzone.v1/projects/quote-systems", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Content-Type": "application/json;charset=UTF-8",
        apiKey: `${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      body: JSON.stringify({
        quote_header_id: 7540,
        systems: [
          {
            motorized_plenum: "AZC25DAIST07S3",
            name: "Sistema 1",
            duct_type_iso: "CT_FX",
            bypass: {
              az_iso: "BY_NONE",
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
              metric_system_iso: "INTERNATIONAL_METRIC_SYSTEM",
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
                quote_diffusion_elements_quantity: 2,
                quote_return_elements_quantity: 2,
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
                  warning:
                    "<p>Velocidad en ducto muy baja en <strong>Zona 1</strong>.</p><p>Seleccione una reducci^ón o verifique con el n^úmero de compuertas disponibles del Plenum, si es posible eliminar un elemento de difusi^ón en la zona con velocidad baja.</p>",
                },
                diffusion_configuration: {
                  impulsion: {
                    product_iso: "RDHV",
                    diffusion_group_iso: "AIRQ",
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
                  real_width: "200",
                },
                return_configuration: null,
                iumodels: [],
                diffusion_type_iso: "DT_CG",
                flow: null,
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
                  warning:
                    "<p>Velocidad en ducto muy baja en <strong>Zona 2</strong>.</p><p>Seleccione una reducci^ón o verifique con el n^úmero de compuertas disponibles del Plenum, si es posible eliminar un elemento de difusi^ón en la zona con velocidad baja.</p>",
                },
                diffusion_configuration: {
                  impulsion: {
                    product_iso: "RDHV",
                    diffusion_group_iso: "AIRQ",
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
                  real_width: "200",
                },
                return_configuration: null,
                iumodels: [],
                diffusion_type_iso: "DT_CG",
                flow: null,
              },
            ],
            return_configuration: {
              return: {
                product_iso: "RRFR",
                diffusion_group_iso: "AIRQ",
              },
              max_height: 400,
              flow: 440,
              output_speed: 0.5,
              color_iso: "DIFUSSION_COLOR_B",
              fixing_type_iso: "DIFUSSION_FIXING_T",
              regulation_iso: "TYPE_REG_KO",
              plenum_option_iso: false,
              warning:
                "<p>Velocidad en ducto muy baja en <strong>{zone}</strong>.</p><p>Seleccione una reducci^ón o verifique con el n^úmero de compuertas disponibles del Plenum, si es posible eliminar un elemento de difusi^ón en la zona con velocidad baja.</p>",
              real_height: 400,
              real_width: 800,
            },
            warning:
              "Potencia de la Unidad Interior. <br>Se recomienda la selecci^ón de una unidad con potencia comprendida entre 70^% y 130^% de la potencia de demanda total de la instalaci^ón.",
            include_largueros: true,
            include_airq_sensor: false,
            include_energy_usage_meter: false,
            include_dehumidifier: false,
            include_return_plenum: false,
            include_mixing_box: false,
            include_thermostat: true,
          },
        ],
      }),
    })
  } catch (error) {
    console.error("Error al generar el presupuesto:", error)
    alert("Error al generar el presupuesto.")
  } finally {
    setIsGeneratingQuote(false)
  }
}

// Added back getBrands function that was in the original file
export async function getBrands(): Promise<{ id: number; name: string; iso_brand: string }[]> {
  const res = await fetch("https://devapi.airzonecloud.com/msproduct.pv1/compatibilities/brands", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN ?? ""}`,
      apiKey: `${process.env.NEXT_PUBLIC_API_KEY ?? ""}`,
    },
  })
  if (!res.ok) throw new Error("Error al cargar marcas")
  const result = await res.json()
  return result.body?.brands || []
}
