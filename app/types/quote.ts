export interface QuoteRequest {
  quote_header_id: number
  systems: System[]
}

export interface System {
  motorized_plenum: string
  name: string
  duct_type_iso: string
  bypass: {
    az_iso: string
  }
  iumodel: Iumodel
  zones: Zone[]
  return_configuration: ReturnConfiguration
  warning: string | null
  include_largueros: boolean
  include_energy_usage_meter: boolean
  include_dehumidifier: boolean
  include_return_plenum: boolean
  include_mixing_box: boolean
  include_thermostat: boolean
}

export interface Iumodel {
  az_range: string
  brand_name: string
  dampers: number
  iso_2: string
  iso_3: string
  iumodel_name: string
  plenum_type: string
  reference: string
  size: string
  heat_power_kw: number | null
  cold_power_kw: number
  maximum_flow_m3h: number
  metric_system_iso: string
}

export interface Zone {
  name: string
  height: number
  area: number
  climatisation_type_iso: string
  interface_iso: string
  color_iso: string
  connection_iso: string
  thermostat_iso: string
  ratio: number
  demanded_power: number | null
  quote_diffusion_elements_quantity: number
  quote_return_elements_quantity: number
  zonified: number
  radiant_type: string | null
  colectors: string | null
  include_thermostatic_valve: boolean
  thermostatic_valve_quantity: number | null
  radiators_quantity: number | null
  dumper_configuration: DumperConfiguration
  diffusion_configuration: DiffusionConfiguration
  return_configuration: null
  iumodels: any[]
  diffusion_type_iso: string
  flow: number | null
}

export interface DumperConfiguration {
  reduction: number
  flow: number
  duct_speed: number
  dumper_iso: string
  quantity: number
  dumper_dimension_id: number | null
  warning: string
}

export interface DiffusionConfiguration {
  impulsion: {
    product_iso: string
    diffusion_group_iso: string
  }
  return: null
  max_height: number
  flow: number
  output_speed: number
  color_iso: string
  fixing_type_iso: string
  regulation_iso: string
  plenum_option_iso: boolean
  warning: string
  quantity: number
  quantity_return: number
  real_height: string
  real_width: string
}

export interface ReturnConfiguration {
  return: {
    product_iso: string
    diffusion_group_iso: string
  }
  max_height: number
  flow: number
  output_speed: number
  color_iso: string
  fixing_type_iso: string
  regulation_iso: string
  plenum_option_iso: boolean
  warning: string
  real_height: number
  real_width: number
}