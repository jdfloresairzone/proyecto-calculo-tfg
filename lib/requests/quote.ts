"use client"
import { type UISystem } from "@/components/types/system-config"

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
      `https://devapi.airzonecloud.com/msquotairzone.v1/quote-headers/254136/pdf-v2`,
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

export const generarPresupuesto = async (  currentSystem: UISystem, setIsGeneratingQuote: (loading: boolean) => void) => {
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
          systems: [currentSystem], 
        }),
    })
  } catch (error) {
    console.error("Error al generar el presupuesto:", error)
    alert("Error al generar el presupuesto.")
  } finally {
    setIsGeneratingQuote(false)
  }
}

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
