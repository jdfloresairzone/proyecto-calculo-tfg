import { Languages, marketsByLocales } from "./locales"
import { Routes } from "./routes"

type RouteDictionary = Record<string, string>

interface RoutesTranslation {
  locales: string[]
  routes: RouteDictionary
}

export type RoutesTranslations = Record<string, RoutesTranslation>

const includeMarketsIn = (locale: string, routes: RouteDictionary): RoutesTranslation => {
  return {
    locales: [locale],
    routes,
  }
}

export const routesTranslations: RoutesTranslations = {
  [Languages.english.code]: includeMarketsIn(Languages.english.code, {
    [Routes.tickets]: "/queries",
    [Routes.createTicket]: "/queries/new",
    [Routes.editTicket]: "/queries/:id", //Invent
    [Routes.quotes]: "/quotes",
    [Routes.quotesDetails]: "/quotes/:reference",
    [Routes.editQuote]: "/client-area/budgets/:id", // TODO: External URL
    [Routes.createCustomQuote]: "/selection-tool/open-quote", // TODO: External URL
    [Routes.importDuctzoneProject]: "/quotairzone/ductzone-file-import", // TODO: External URL
    [Routes.createEasyzoneSolution]: "/quotairzone/assistant/pack-easyzone", // TODO: External URL
    [Routes.createCalculationProject]: "/quotairzone/assistant/control-system", // TODO: External URL
    [Routes.createRadiantRadiatorSolutionAssistant]: "/quotairzone/assistant/pack-radiant365/radiators", // TODO: External URL
    [Routes.createRadiantUnderfloorSolutionAssistant]: "/quotairzone/assistant/pack-radiant365/underfloor", // TODO: External URL
    [Routes.createAidooSolution]: "/quotairzone/aidoo", // TODO: External URL
    [Routes.editCustomQuote]: "/selection-tool/open-quote/:id", // TODO: External URL
    [Routes.editImportDuctzoneProject]: "/quotairzone/ductzone-file-import/:id", // TODO: External URL
    [Routes.editEasyzoneSolution]: "/quotairzone/assistant/pack-easyzone/:id", // TODO: External URL
    [Routes.editCalculationProject]: "/quotairzone/assistant/control-system/:id", // TODO: External URL
    [Routes.editRadiantSolutionAssistant]: "/quotairzone/assistant/pack-radiant365/:id", // TODO: External URL
    [Routes.editAidooSolution]: "/quotairzone/aidoo/:id", // TODO: External URL
    [Routes.createLiteSolution]: "/assistant", // TODO: External URL
    [Routes.editLiteSolution]: "/assistant/:id", // TODO: External URL
    [Routes.orders]: "/orders",
    [Routes.orderDetail]: "/orders/:reference",
    [Routes.warranties]: "/warranties",
    [Routes.createWarranty]: "/warranties/new",
    [Routes.warrantyDocumentation]: "/warranties/:id/documentation",
    [Routes.warrantyDetails]: "/warranties/:id",
    [Routes.returns]: "/returns",
    [Routes.createReturn]: "/returns/new",
    [Routes.returnDetail]: "/returns/:id",
    [Routes.addresses]: "/profile/addresses",
    [Routes.createAddress]: "/profile/addresses/new",
    [Routes.profile]: "/profile",
    [Routes.editProfile]: "/profile/edit",
    [Routes.users]: "/users",
    [Routes.createCompanyUser]: "/users/new",
    [Routes.editCompanyUser]: "/users/:id",
    [Routes.changePassword]: "/profile/new-password",
    [Routes.cancelAccount]: "/profile/cancel-account",
    [Routes.editClient]: "/profile/client/edit",
    [Routes.invoices]: "/invoices",
    [Routes.deliveryNotes]: "/delivery-notes",
    [Routes.academy]: "/academy",
    [Routes.quoteAssistant]: "/quotairzone/assistant",
    [Routes.products]: "/products",
    [Routes.atps]: "/technical-assistance",
    [Routes.createAtp]: "/technical-assistance/new",
    [Routes.atpDetail]: "/technical-assistance/:id",
    [Routes.atpsOrders]: "/technical-assistance-service",
    [Routes.atpsOrdersDetail]: "/technical-assistance-service/:id",
    [Routes.newsList]: "/news",

    //Footer
    "/control-solutions/aidoo/pro": "/control-solutions/aidoo/pro",
    "/control-solutions/aidoo/pro-fancoil": "/control-solutions/aidoo/pro-fancoil",
    "/control-solutions/aidoo/pro-air-to-water": "/control-solutions/aidoo/pro-air-to-water",
    "/control-solutions/aidoo/knx": "/control-solutions/aidoo/knx",
    "/control-solutions/aidoo/wi-fi": "/control-solutions/aidoo/wi-fi",
    "/control-solutions/aidoo/z-wave": "/control-solutions/aidoo/z-wave",
    "/control-solutions/aidoo/zigbee": "/control-solutions/aidoo/zigbee",
    "/control-solutions/flexa": "/control-solutions/flexa",
    "/control-solutions/flexa/underfloor": "/control-solutions/flexa/underfloor",
    "/control-solutions/flexa/radiators": "/control-solutions/flexa/radiators",
    "/control-solutions/easyzone": "/control-solutions/easyzone",
    "/control-solutions/acuazone": "/control-solutions/acuazone",
    "/control-solutions/quality-air-zone": "/control-solutions/quality-air-zone",
    "/control-solutions/quality-air-zone/airq-box": "/control-solutions/quality-air-zone/airq-box",
    "/control-solutions/quality-air-zone/airq-sensor": "/control-solutions/quality-air-zone/airq-sensor",

    //Services
    "/academy": "/academy",
    "/projects": "/projects",
    "/support": "/support",

    //Company
    "/about": "/about",
    "/contact": "/contact",
    "/energy-savings": "/energy-savings",
    "/comfort": "/comfort",
    "/control": "/control",
    "/efficiency": "/efficiency",

    //Products
    "/products/thermostats": "/products/thermostats",
    "/products/airzone-cloud": "/products/airzone-cloud",
    "/products/air-diffusion": "/products/air-diffusion",
  }),
  [Languages.spanish.code]: includeMarketsIn(Languages.spanish.code, {
    [Routes.tickets]: "/consultas",
    [Routes.createTicket]: "/consultas/nuevo",
    [Routes.editTicket]: "/consultas/:id", //Invent
    [Routes.quotes]: "/presupuestos",
    [Routes.quotesDetails]: "/presupuestos/:reference",
    [Routes.editQuote]: "/area-de-cliente/presupuestos/:id", // TODO: External URL
    [Routes.createCustomQuote]: "/herramienta-de-seleccion/presupuesto-abierto", // TODO: External URL
    [Routes.importDuctzoneProject]: "/quotairzone/importacion-fichero-ductzone", // TODO: External URL
    [Routes.createEasyzoneSolution]: "/quotairzone/asistente/pack-easyzone", // TODO: External URL
    [Routes.createCalculationProject]: "/quotairzone/asistente/sistema-de-control", // TODO: External URL
    [Routes.createRadiantRadiatorSolutionAssistant]: "/quotairzone/asistente/pack-radiant365/radiadores-hidronicos", // TODO: External URL
    [Routes.createRadiantUnderfloorSolutionAssistant]: "/quotairzone/asistente/pack-radiant365/suelo-radiante", // TODO: External URL
    [Routes.createAidooSolution]: "/quotairzone/aidoo", // TODO: External URL
    [Routes.editCustomQuote]: "/herramienta-de-seleccion/presupuesto-abierto/:id", // TODO: External URL
    [Routes.editImportDuctzoneProject]: "/quotairzone/importacion-fichero-ductzone/:id", // TODO: External URL
    [Routes.editEasyzoneSolution]: "/quotairzone/asistente/pack-easyzone/:id", // TODO: External URL
    [Routes.editCalculationProject]: "/quotairzone/asistente/sistema-de-control/:id", // TODO: External URL
    [Routes.editRadiantSolutionAssistant]: "/quotairzone/asistente/pack-radiant/:id", // TODO: External URL
    [Routes.editAidooSolution]: "/quotairzone/aidoo/:id", // TODO: External URL
    [Routes.createLiteSolution]: "/asistente", // TODO: External URL
    [Routes.editLiteSolution]: "/asistente/:id", // TODO: External URL
    [Routes.orders]: "/pedidos",
    [Routes.orderDetail]: "/pedidos/:reference",
    [Routes.warranties]: "/garantias",
    [Routes.createWarranty]: "/garantias/nueva",
    [Routes.warrantyDocumentation]: "/garantias/:id/documentacion",
    [Routes.warrantyDetails]: "/garantias/:id",
    [Routes.returns]: "/devoluciones",
    [Routes.createReturn]: "/devoluciones/nueva",
    [Routes.returnDetail]: "/devoluciones/:id",
    [Routes.addresses]: "/perfil/direcciones", //Invent
    [Routes.createAddress]: "/perfil/direcciones/nuevo", //Invent
    [Routes.profile]: "/perfil",
    [Routes.editProfile]: "/perfil/editar", //Invent
    [Routes.users]: "/usuarios",
    [Routes.createCompanyUser]: "/usuarios/nuevo", //Invent
    [Routes.editCompanyUser]: "/usuarios/:id", //Invent
    [Routes.changePassword]: "/perfil/nueva-contrasena", //Invent
    [Routes.cancelAccount]: "/perfil/cancelar-cuenta", //Invent
    [Routes.editClient]: "/perfil/cliente/editar", //Invent
    [Routes.invoices]: "/facturas",
    [Routes.deliveryNotes]: "/albaranes",
    [Routes.academy]: "/academy",
    [Routes.quoteAssistant]: "/quotairzone/asistente/",
    [Routes.products]: "/productos",
    [Routes.atps]: "/asistencia-tecnica",
    [Routes.createAtp]: "/asistencia-tecnica/nuevo",
    [Routes.documentsCreateAtp]: "/asistencia-tecnica/nuevo/documentacion/:id",
    [Routes.atpDetail]: "/asistencia-tecnica/:id",
    [Routes.atpsOrders]: "/servicio-asistencia-tecnica",
    [Routes.atpsOrdersDetail]: "/servicio-asistencia-tecnica/:id",
    [Routes.newsList]: "/noticias",
    //Footer

    //Solutions
    "/control-solutions/aidoo/pro": "/soluciones-de-control/aidoo/pro",
    "/control-solutions/aidoo/pro-fancoil": "/soluciones-de-control/aidoo/pro-fancoil",
    "/control-solutions/aidoo/pro-air-to-water": "/soluciones-de-control/aidoo/pro-aerotermia",
    "/control-solutions/aidoo/knx": "/soluciones-de-control/aidoo/knx",
    "/control-solutions/aidoo/wi-fi": "/soluciones-de-control/aidoo/wi-fi",
    "/control-solutions/aidoo/z-wave": "/soluciones-de-control/aidoo/z-wave",
    "/control-solutions/aidoo/zigbee": "/soluciones-de-control/aidoo/zigbee",
    "/control-solutions/flexa": "/soluciones-de-control/flexa",
    "/control-solutions/flexa/underfloor": "/soluciones-de-control/flexa/suelo-radiante",
    "/control-solutions/flexa/radiators": "/soluciones-de-control/flexa/radiadores",
    "/control-solutions/easyzone": "/soluciones-de-control/easyzone",
    "/control-solutions/acuazone": "/soluciones-de-control/acuazone",
    "/control-solutions/quality-air-zone": "/soluciones-de-control/quality-air-zone",
    "/control-solutions/quality-air-zone/airq-box": "/soluciones-de-control/quality-air-zone/airq-box",
    "/control-solutions/quality-air-zone/airq-sensor": "/soluciones-de-control/quality-air-zone/airq-sensor",

    //Services
    "/academy": "/academy",
    "/projects": "/proyectos",
    "/support": "/soporte",

    //Company
    "/about": "/sobre-nosotros",
    "/contact": "/contacto",
    "/energy-savings": "/ahorro",
    "/comfort": "/confort",
    "/control": "/control",
    "/efficiency": "/eficiencia",

    //Products
    "/products/thermostats": "/productos/termostatos",
    "/products/airzone-cloud": "/productos/airzone-cloud",
    "/products/air-diffusion": "/productos/difusion-de-aire",
  }),
  [Languages.french.code]: includeMarketsIn(Languages.french.code, {
    [Routes.tickets]: "/demandes",
    [Routes.createTicket]: "/demandes/nouvelle",
    [Routes.editTicket]: "/demandes/:id", //Invent
    [Routes.quotes]: "/devis",
    [Routes.quotesDetails]: "/devis/:reference",
    [Routes.editQuote]: "/espace-client/budgets/:id", // TODO: External URL
    [Routes.createCustomQuote]: "/outil-de-selection/devis-ouvert", // TODO: External URL
    [Routes.importDuctzoneProject]: "/quotairzone/importation-du-fichier-ductzone", // TODO: External URL
    [Routes.createEasyzoneSolution]: "/quotairzone/assistant/pack-easyzone", // TODO: External URL
    [Routes.createCalculationProject]: "/quotairzone/assistant/systeme-de-controle", // TODO: External URL
    [Routes.createRadiantRadiatorSolutionAssistant]: "/quotairzone/assistant/pack-radiant365/radiateurs", // TODO: External URL
    [Routes.createRadiantUnderfloorSolutionAssistant]:
      "/quotairzone/assistant/pack-radiant365/plancher-chauffant-rafraichissant", // TODO: External URL
    [Routes.createAidooSolution]: "/quotairzone/aidoo", // TODO: External URL
    [Routes.editCustomQuote]: "/outil-de-selection/devis-ouvert/:id", // TODO: External URL
    [Routes.editImportDuctzoneProject]: "/quotairzone/importation-du-fichier-ductzone/:id", // TODO: External URL
    [Routes.editEasyzoneSolution]: "/quotairzone/assistant/pack-easyzone/:id", // TODO: External URL
    [Routes.editCalculationProject]: "/quotairzone/assistant/systeme-de-controle/:id", // TODO: External URL
    [Routes.editRadiantSolutionAssistant]: "/quotairzone/assistant/pack-radiant365/:id", // TODO: External URL
    [Routes.editAidooSolution]: "/quotairzone/aidoo/:id", // TODO: External URL
    [Routes.createLiteSolution]: "/assistant", // TODO: External URL
    [Routes.editLiteSolution]: "/assistant/:id", // TODO: External URL
    [Routes.orders]: "/commandes",
    [Routes.orderDetail]: "/commandes/:reference",
    [Routes.warranties]: "/garanties",
    [Routes.createWarranty]: "/garanties/nouvelle",
    [Routes.warrantyDocumentation]: "/garanties/:id/documentation",
    [Routes.warrantyDetails]: "/garanties/:id",
    [Routes.returns]: "/retours",
    [Routes.createReturn]: "/retours/nouveau",
    [Routes.returnDetail]: "/retours/:id",
    [Routes.addresses]: "/profil/adresses",
    [Routes.createAddress]: "/profil/adresses/nouvelle",
    [Routes.profile]: "/profil",
    [Routes.editProfile]: "/profil/modifier",
    [Routes.users]: "/utilisateurs",
    [Routes.createCompanyUser]: "/utilisateurs/nouveau",
    [Routes.editCompanyUser]: "/utilisateurs/:id",
    [Routes.changePassword]: "/profil/nouveau-mot-de-passe",
    [Routes.cancelAccount]: "/profil/annuler-compte",
    [Routes.editClient]: "/profil/client/modifier",
    [Routes.invoices]: "/factures",
    [Routes.deliveryNotes]: "/notes-de-livraison",
    [Routes.academy]: "/academy",
    [Routes.quoteAssistant]: "/quotairzone/assistant",
    [Routes.products]: "/produits",
    [Routes.atps]: "/assistance-technique",
    [Routes.createAtp]: "/assistance-technique/nouveau",
    [Routes.documentsCreateAtp]: "/assistance-technique/nouveau/documentation/:id",
    [Routes.atpDetail]: "/assistance-technique/:id",
    [Routes.atpsOrders]: "/service-assistance-technique",
    [Routes.atpsOrdersDetail]: "/service-assistance-technique/:id",
    [Routes.newsList]: "/nouvelles",
    // Footer

    //Solutions
    "/control-solutions/aidoo/pro": "/solutions-de-controle/aidoo/pro",
    "/control-solutions/aidoo/pro-fancoil": "/solutions-de-controle/aidoo/pro-fancoil",
    "/control-solutions/aidoo/pro-air-to-water": "/solutions-de-controle/aidoo/pro-pac-air-eau",
    "/control-solutions/aidoo/knx": "/solutions-de-controle/aidoo/knx",
    "/control-solutions/aidoo/wi-fi": "/solutions-de-controle/aidoo/wi-fi",
    "/control-solutions/aidoo/z-wave": "/solutions-de-controle/aidoo/z-wave",
    "/control-solutions/aidoo/zigbee": "/solutions-de-controle/aidoo/zigbee",
    "/control-solutions/flexa": "/solutions-de-controle/innobus-pro8",
    "/control-solutions/flexa/underfloor": "/solutions-de-controle/innobus-pro8/plancher-chauffant-rafraichissant",
    "/control-solutions/flexa/radiators": "/solutions-de-controle/innobus-pro8/radiateurs",
    "/control-solutions/easyzone": "/solutions-de-controle/easyzone",
    "/control-solutions/acuazone": "/solutions-de-controle/acuazone",
    "/control-solutions/quality-air-zone": "/solutions-de-controle/quality-air-zone",
    "/control-solutions/quality-air-zone/airq-box": "/solutions-de-controle/quality-air-zone/airq-box",
    "/control-solutions/quality-air-zone/airq-sensor": "/solutions-de-controle/quality-air-zone/airq-sensor",

    //Services
    "/academy": "/academy",
    "/projects": "/projets",
    "/support": "/support",

    //Company
    "/about": "/a-propos-de-nous",
    "/contact": "/contact",
    "/energy-savings": "/economies-energie",
    "/comfort": "/confort",
    "/control": "/controle",
    "/efficiency": "/efficacite",

    //Products
    "/products/thermostats": "/produits/thermostats",
    "/products/airzone-cloud": "/produits/airzone-cloud",
    "/products/air-diffusion": "/produits/diffusion-d-air",
  }),
  [Languages.german.code]: includeMarketsIn(Languages.german.code, {
    [Routes.tickets]: "/anfragen",
    [Routes.createTicket]: "/anfragen/neue",
    [Routes.editTicket]: "/anfragen/:id", //Invent
    [Routes.quotes]: "/angebot",
    [Routes.quotesDetails]: "/angebot/:reference",
    [Routes.editQuote]: "/kundenbereich/budgets/:id", // TODO: External URL
    [Routes.createCustomQuote]: "/auswahlwerkzeug/offenes-angebot", // TODO: External URL
    [Routes.importDuctzoneProject]: "/quotairzone/ductzone-datei-import", // TODO: External URL
    [Routes.createEasyzoneSolution]: "/quotairzone/assistent/pack-easyzone", // TODO: External URL
    [Routes.createCalculationProject]: "/quotairzone/assistent/kontrollsystem", // TODO: External URL
    [Routes.createRadiantRadiatorSolutionAssistant]: "/quotairzone/assistant/pack-radiant365/heizkorper", // TODO: External URL
    [Routes.createRadiantUnderfloorSolutionAssistant]: "/quotairzone/assistant/pack-radiant365/fussbodenheizung", // TODO: External URL
    [Routes.createAidooSolution]: "/quotairzone/aidoo", // TODO: External URL
    [Routes.editCustomQuote]: "/auswahlwerkzeug/offenes-angebot/:id", // TODO: External URL
    [Routes.editImportDuctzoneProject]: "/quotairzone/ductzone-datei-import/:id", // TODO: External URL
    [Routes.editEasyzoneSolution]: "/quotairzone/assistent/pack-easyzone/:id", // TODO: External URL
    [Routes.editCalculationProject]: "/quotairzone/assistent/kontrollsystem/:id", // TODO: External URL
    [Routes.editRadiantSolutionAssistant]: "/quotairzone/assistent/pack-radiant/:id", // TODO: External URL
    [Routes.editAidooSolution]: "/quotairzone/aidoo/:id", // TODO: External URL
    [Routes.createLiteSolution]: "/assistent", // TODO: External URL
    [Routes.editLiteSolution]: "/assistent/:id", // TODO: External URL
    [Routes.orders]: "/bestellungen",
    [Routes.orderDetail]: "/bestellungen/:reference",
    [Routes.warranties]: "/garantien",
    [Routes.createWarranty]: "/garantien/neue",
    [Routes.warrantyDocumentation]: "/garantien/:id/dokumentation",
    [Routes.warrantyDetails]: "/garantien/:id",
    [Routes.returns]: "/ruckgaben",
    [Routes.createReturn]: "/ruckgaben/neue",
    [Routes.returnDetail]: "/ruckgaben/:id",
    [Routes.addresses]: "/profil/adressen",
    [Routes.createAddress]: "/profil/adressen/neue",
    [Routes.profile]: "/profil",
    [Routes.editProfile]: "/profil/aktualisieren",
    [Routes.users]: "/benutzer",
    [Routes.createCompanyUser]: "/benutzer/neu",
    [Routes.editCompanyUser]: "/benutzer/:id",
    [Routes.changePassword]: "/profil/neues-passwort",
    [Routes.cancelAccount]: "/profil/konto-abbrechen",
    [Routes.editClient]: "/profil/kunde/aktualisieren",
    [Routes.invoices]: "/rechnungen",
    [Routes.deliveryNotes]: "/lieferscheine",
    [Routes.academy]: "/academy",
    [Routes.quoteAssistant]: "/quotairzone/assistent",
    [Routes.products]: "/produkte",
    [Routes.atps]: "/technischer-support",
    [Routes.createAtp]: "/technischer-support/neu",
    [Routes.documentsCreateAtp]: "/technischer-support/neu/dokumentation/:id",
    [Routes.atpDetail]: "/technischer-support/:id",
    [Routes.atpsOrders]: "/technischer-kundendienst",
    [Routes.atpsOrdersDetail]: "/technischer-kundendienst/:id",
    [Routes.newsList]: "/nachrichten",
    // Footer

    //Solutions
    "/control-solutions/aidoo/pro": "/steuerungslosungen/aidoo/pro",
    "/control-solutions/aidoo/pro-fancoil": "/steuerungslosungen/aidoo/pro-fancoil",
    "/control-solutions/aidoo/pro-air-to-water": "/steuerungslosungen/aidoo/pro-aerothermie",
    "/control-solutions/aidoo/knx": "/steuerungslosungen/aidoo/knx",
    "/control-solutions/aidoo/wi-fi": "/steuerungslosungen/aidoo/wi-fi",
    "/control-solutions/aidoo/z-wave": "/steuerungslosungen/aidoo/z-wave",
    "/control-solutions/aidoo/zigbee": "/steuerungslosungen/aidoo/zigbee",
    "/control-solutions/flexa": "/steuerungslosungen/flexa",
    "/control-solutions/flexa/underfloor": "/steuerungslosungen/flexa/fussbodenheizung",
    "/control-solutions/flexa/radiators": "/steuerungslosungen/flexa/heizkorper",
    "/control-solutions/easyzone": "/steuerungslosungen/easyzone",
    "/control-solutions/acuazone": "/steuerungslosungen/acuazone",
    "/control-solutions/quality-air-zone": "/steuerungslosungen/quality-air-zone",
    "/control-solutions/quality-air-zone/airq-box": "/steuerungslosungen/quality-air-zone/airq-box",
    "/control-solutions/quality-air-zone/airq-sensor": "/steuerungslosungen/quality-air-zone/airq-sensor",

    //Services
    "/academy": "/academy",
    "/projects": "/projekte",
    "/support": "/support",

    //Company
    "/about": "/uber-uns",
    "/contact": "/kontakt",
    "/energy-savings": "/energieeinsparungen",
    "/comfort": "/komfort",
    "/control": "/kontrolle",
    "/efficiency": "/effizienz",

    //Products
    "/products/thermostats": "/produkte/thermostate",
    "/products/airzone-cloud": "/produkte/airzone-cloud",
    "/products/air-diffusion": "/produkte/luftdiffusion",
  }),
  [Languages.italian.code]: includeMarketsIn(Languages.italian.code, {
    [Routes.tickets]: "/consulenze",
    [Routes.createTicket]: "/consulenze/nuova",
    [Routes.editTicket]: "/consulenze/:id", //Invent
    [Routes.quotes]: "/preventivi",
    [Routes.quotesDetails]: "/preventivi/:reference",
    [Routes.editQuote]: "/area-del-cliente/preventivi/:id", // TODO: External URL
    [Routes.createCustomQuote]: "/strumento-di-selezione/preventivo-aperto", // TODO: External URL
    [Routes.importDuctzoneProject]: "/quotairzone/importazione-dati-ductzone", // TODO: External URL
    [Routes.createEasyzoneSolution]: "/quotairzone/assistente/pack-easyzone", // TODO: External URL
    [Routes.createCalculationProject]: "/quotairzone/assistente/sistemi-di-controllo", // TODO: External URL
    [Routes.createRadiantRadiatorSolutionAssistant]: "/quotairzone/assistente/pack-radiant365/radiatori", // TODO: External URL
    [Routes.createRadiantUnderfloorSolutionAssistant]: "/quotairzone/assistente/pack-radiant365/pavimento-radiante", // TODO: External URL
    [Routes.createAidooSolution]: "/quotairzone/aidoo", // TODO: External URL
    [Routes.editCustomQuote]: "/strumento-di-selezione/preventivo-aperto/:id", // TODO: External URL
    [Routes.editImportDuctzoneProject]: "/quotairzone/importazione-dati-ductzone/:id", // TODO: External URL
    [Routes.editEasyzoneSolution]: "/quotairzone/assistente/pack-easyzone/:id", // TODO: External URL
    [Routes.editCalculationProject]: "/quotairzone/assistente/sistemi-di-controllo/:id", // TODO: External URL
    [Routes.editRadiantSolutionAssistant]: "/quotairzone/assistente/pack-radiant/:id", // TODO: External URL
    [Routes.editAidooSolution]: "/quotairzone/aidoo/:id", // TODO: External URL
    [Routes.createLiteSolution]: "/assistente", // TODO: External URL
    [Routes.editLiteSolution]: "/assistente/:id", // TODO: External URL
    [Routes.orders]: "/ordini",
    [Routes.orderDetail]: "/ordini/:reference",
    [Routes.warranties]: "/garanzie",
    [Routes.createWarranty]: "/garanzie/nuova",
    [Routes.warrantyDocumentation]: "/garanzie/:id/documentazione",
    [Routes.warrantyDetails]: "/garanzie/:id",
    [Routes.returns]: "/resi",
    [Routes.createReturn]: "/resi/nuova",
    [Routes.returnDetail]: "/resi/:id",
    [Routes.addresses]: "/profilo/indirizzi",
    [Routes.createAddress]: "/profilo/indirizzi/nuova",
    [Routes.profile]: "/profilo",
    [Routes.editProfile]: "/profilo/modifica",
    [Routes.users]: "/utenti",
    [Routes.createCompanyUser]: "/utenti/nuovo",
    [Routes.editCompanyUser]: "/utenti/:id",
    [Routes.changePassword]: "/profilo/nuova-password",
    [Routes.cancelAccount]: "/profilo/cancella-account",
    [Routes.editClient]: "/profilo/cliente/modifica",
    [Routes.invoices]: "/fatture",
    [Routes.deliveryNotes]: "/note-di-consegna",
    [Routes.academy]: "/academy",
    [Routes.quoteAssistant]: "/quotairzone/assistente",
    [Routes.products]: "/prodotti",
    [Routes.atps]: "/assitenza-tecnica",
    [Routes.createAtp]: "/assitenza-tecnica/nuovo",
    [Routes.documentsCreateAtp]: "/assitenza-tecnica/nuovo/documentazione/:id",
    [Routes.atpDetail]: "/assitenza-tecnica/:id",
    [Routes.atpsOrders]: "/servizio-assitenza-tecnica",
    [Routes.atpsOrdersDetail]: "/servizio-assitenza-tecnica/:id",
    [Routes.newsList]: "/notizie",
    // Footer

    //Solutions
    "/control-solutions/aidoo/pro": "/soluzioni-di-controllo/aidoo/pro",
    "/control-solutions/aidoo/pro-fancoil": "/soluzioni-di-controllo/aidoo/pro-fancoil",
    "/control-solutions/aidoo/pro-air-to-water": "/soluzioni-di-controllo/aidoo/pro-pompa-di-calore",
    "/control-solutions/aidoo/knx": "/soluzioni-di-controllo/aidoo/knx",
    "/control-solutions/aidoo/wi-fi": "/soluzioni-di-controllo/aidoo/wi-fi",
    "/control-solutions/aidoo/z-wave": "soluzioni-di-controllo/aidoo/z-wave",
    "/control-solutions/aidoo/zigbee": "/soluzioni-di-controllo/aidoo/zigbee",
    "/control-solutions/flexa": "/soluzioni-di-controllo/flexa",
    "/control-solutions/flexa/underfloor": "/soluzioni-di-controllo/flexa/pavimento-radiante",
    "/control-solutions/flexa/radiators": "/soluzioni-di-controllo/flexa/radiatori",
    "/control-solutions/easyzone": "/soluzioni-di-controllo/easyzone",
    "/control-solutions/acuazone": "/soluzioni-di-controllo/acuazone",
    "/control-solutions/quality-air-zone": "/soluzioni-di-controllo/quality-air-zone",
    "/control-solutions/quality-air-zone/airq-box": "/soluzioni-di-controllo/quality-air-zone/airq-box",
    "/control-solutions/quality-air-zone/airq-sensor": "/soluzioni-di-controllo/quality-air-zone/airq-sensor",

    //Services
    "/academy": "/academy",
    "/projects": "/progetti",
    "/support": "/supporto",

    //Company
    "/about": "/su-di-noi",
    //blog: lo mismo que en inglés
    "/contact": "/contatto",
    "/energy-savings": "/risparmio",
    "/comfort": "/comfort",
    "/control": "/controllo",

    //Products
    "/products/thermostats": "/prodotti/termostati",
    "/products/airzone-cloud": "/prodotti/airzone-cloud",
    "/products/air-diffusion": "/prodotti/diffusione-dell-aria",
  }),
  [Languages.portuguese.code]: includeMarketsIn(Languages.portuguese.code, {
    [Routes.tickets]: "/consultas",
    [Routes.createTicket]: "/consultas/novo",
    [Routes.editTicket]: "/consultas/:id", //Invent
    [Routes.quotes]: "/orcamentos",
    [Routes.quotesDetails]: "/orcamentos/:reference",
    [Routes.editQuote]: "/area-de-cliente/orcamentos/:id", // TODO: External URL
    [Routes.createCustomQuote]: "/ferramenta-de-selecao/orcamento-aberto", // TODO: External URL
    [Routes.importDuctzoneProject]: "/quotairzone/importacao-de-ficheiros-ductzone", // TODO: External URL
    [Routes.createEasyzoneSolution]: "/quotairzone/assistente/pack-easyzone", // TODO: External URL
    [Routes.createCalculationProject]: "/quotairzone/assistente/sistema-de-controlo", // TODO: External URL
    [Routes.createRadiantRadiatorSolutionAssistant]: "/quotairzone/assistente/pack-radiant365/radiadores", // TODO: External URL
    [Routes.createRadiantUnderfloorSolutionAssistant]: "/quotairzone/assistente/pack-radiant365/pavimento-radiante", // TODO: External URL
    [Routes.createAidooSolution]: "/quotairzone/aidoo", // TODO: External URL
    [Routes.editCustomQuote]: "/ferramenta-de-selecao/orcamento-aberto/:id", // TODO: External URL
    [Routes.editImportDuctzoneProject]: "/quotairzone/importacao-de-ficheiros-ductzone/:id", // TODO: External URL
    [Routes.editEasyzoneSolution]: "/quotairzone/assistente/pack-easyzone/:id", // TODO: External URL
    [Routes.editCalculationProject]: "/quotairzone/assistente/sistema-de-controlo/:id", // TODO: External URL
    [Routes.editRadiantSolutionAssistant]: "/quotairzone/assistente/pack-radiant/:id", // TODO: External URL
    [Routes.editAidooSolution]: "/quotairzone/aidoo/:id", // TODO: External URL
    [Routes.createLiteSolution]: "/assistente", // TODO: External URL
    [Routes.editLiteSolution]: "/assistente/:id", // TODO: External URL
    [Routes.orders]: "/pedidos",
    [Routes.orderDetail]: "/pedidos/:reference",
    [Routes.warranties]: "/garantias",
    [Routes.createWarranty]: "/garantias/novo",
    [Routes.warrantyDocumentation]: "/garantias/:id/documentation",
    [Routes.warrantyDetails]: "/garantias/:id",
    [Routes.returns]: "/devolucoes",
    [Routes.createReturn]: "/devolucoes/novo",
    [Routes.returnDetail]: "/devolucoes/:id",
    [Routes.addresses]: "/perfil/enderecos",
    [Routes.createAddress]: "/perfil/enderecos/novo",
    [Routes.profile]: "/perfil",
    [Routes.editProfile]: "/perfil/editar",
    [Routes.users]: "/usuarios",
    [Routes.createCompanyUser]: "/usuarios/novo",
    [Routes.editCompanyUser]: "/usuarios/:id",
    [Routes.changePassword]: "/perfil/nova-senha",
    [Routes.cancelAccount]: "/perfil/cancelar-conta",
    [Routes.editClient]: "/perfil/cliente/editar",
    [Routes.invoices]: "/facturas",
    [Routes.deliveryNotes]: "/notas-de-entrega",
    [Routes.academy]: "/academy",
    [Routes.quoteAssistant]: "/quotairzone/assistente",
    [Routes.products]: "/produtos",
    [Routes.atps]: "/assistencia-tecnica",
    [Routes.createAtp]: "/assistencia-tecnica/novo",
    [Routes.documentsCreateAtp]: "/assistencia-tecnica/novo/documentation/:id",
    [Routes.atpDetail]: "/assistencia-tecnica/:id",
    [Routes.atpsOrders]: "/servico-assistencia-tecnica",
    [Routes.atpsOrdersDetail]: "/servico-assistencia-tecnica/:id",
    [Routes.newsList]: "/noticias",

    // Footer

    //Solutions
    "/control-solutions/aidoo/pro": "/solucoes-de-controlo/aidoo/pro",
    "/control-solutions/aidoo/pro-fancoil": "/solucoes-de-controlo/aidoo/pro-fancoil",
    "/control-solutions/aidoo/pro-air-to-water": "/solucoes-de-controlo/aidoo/pro-aerotermia",
    "/control-solutions/aidoo/knx": "/solucoes-de-controlo/aidoo/knx",
    "/control-solutions/aidoo/wi-fi": "/solucoes-de-controlo/aidoo/wi-fi",
    "/control-solutions/aidoo/z-wave": "/solucoes-de-controlo/aidoo/z-wave",
    "/control-solutions/aidoo/zigbee": "/solucoes-de-controlo/aidoo/zigbee",
    "/control-solutions/flexa": "/solucoes-de-controlo/flexa",
    "/control-solutions/flexa/underfloor": "/solucoes-de-controlo/flexa/pavimento-radiante",
    "/control-solutions/flexa/radiators": "/solucoes-de-controlo/flexa/radiadores",
    "/control-solutions/easyzone": "/solucoes-de-controlo/easyzone",
    "/control-solutions/acuazone": "/solucoes-de-controlo/acuazone",
    "/control-solutions/quality-air-zone": "/solucoes-de-controlo/quality-air-zone",
    "/control-solutions/quality-air-zone/airq-box": "/solucoes-de-controlo/quality-air-zone/airq-box",
    "/control-solutions/qualitu-air-zone/airq-sensor": "/solucoes-de-controlo/quality-air-zone/airq-sensor",

    //Services
    "/academy": "/academy",
    "/projects": "/projetos",
    "/support": "/suporte",

    //Company
    "/about": "/sobre-nos",
    "/contact": "/contacto",
    "/energy-savings": "/economia-energia",
    "/comfort": "/conforto",
    "/control": "/control",
    "/efficiency": "/eficiencia",

    //Products
    "/products/thermostats": "/produtos/termostatos",
    "/products/airzone-cloud": "/produtos/airzone-cloud",
    "/products/air-diffusion": "/produtos/difusao-de-ar",
  }),
}
