import { Routes } from "./routes"
import { routesTranslations } from "./translations"

interface RewriteRoute {
  source: string
  destination: string
  locale: boolean
}

interface RedirectRoute {
  source: string
  destination: string
  permanent: boolean
}

interface TranslatedRoute {
  translation: string
  original: string
}


export const rewriteRoutes = Object.values(routesTranslations)
  .map((routesByLanguage) =>
    routesByLanguage.locales.reduce(
      (rewriteRoutes: RewriteRoute[], locale: string) => [
        ...rewriteRoutes,
        ...Object.entries(routesByLanguage.routes)
          .filter(([original]) => Object.values(Routes).some(route => route === original))
          .map(([original, translation]) => ({
            source: `/${locale}${translation}`,
            destination: `/${locale}${original}`,
            locale: false,
          }))
          .filter(({ source, destination }) => source !== destination),
      ],
      []
    )
  )
  .flat()

export const redirectsRoutes = Object.values(routesTranslations)
  .map((routesByLanguage) =>
    routesByLanguage.locales.reduce(
      (redirectRoutes: RedirectRoute[], locale: string) => [
        ...redirectRoutes,
        ...Object.entries(routesByLanguage.routes)
          .filter(([original]) => Object.values(Routes).some(route => route === original))
          .map(([original, translation]) => ({
            source: `/${locale}${original}`,
            destination: `/${locale}${translation}`,
            permanent: false, // Poner a true cuando las traducciones de rutas estén listas
          }))
          .filter(({ source, destination }) => source !== destination),
      ],
      []
    )
  )
  .flat()

export const translatedRoutes = Object.values(routesTranslations)
  .map((routesByLanguage) =>
    routesByLanguage.locales.reduce(
      (rewriteRoutes: TranslatedRoute[], locale: string) => [
        ...rewriteRoutes,
        ...Object.entries(routesByLanguage.routes)
          .map(([original, translation]) => ({
            translation: `/${locale}${translation}`,
            original: `/${locale}${original}`,
          }))
      ],
      []
    )
  )
  .flat()
