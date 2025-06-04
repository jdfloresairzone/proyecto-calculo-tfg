export const Markets = {
  restOfTheWorld: "aa",
  iberia: "ib",
  northAmerica: "na",
  italy: "it",
  euroSchengen: "eu",
  euro: "en",
  africaGeneral: "af",
  australiaNewZeeland: "an",
  asia: "as",
  deutschland: "de",
  france: "ff",
  unitedKingdom: "gb",
  ireland: "ie",
  latinAmerica: "la",
  middleEast: "me",
  northAfrica: "nf",
  portugal: "pt",
}

export const Languages = {
  spanish: { code: "es", i18nCode: "es-ES" },
  english: { code: "en", i18nCode: "en-US" },
  italian: { code: "it", i18nCode: "it-IT" },
  french: { code: "fr", i18nCode: "fr-FR" },
  german: { code: "de", i18nCode: "de-DE" },
  portuguese: { code: "pt", i18nCode: "pt-PT" },
}

export const localesByMarkets = {
  [Markets.euroSchengen]: [Languages.french.code, Languages.english.code],
  [Markets.iberia]: [Languages.english.code, Languages.spanish.code],
  [Markets.france]: [Languages.german.code, Languages.english.code, Languages.french.code],
  [Markets.italy]: [Languages.english.code, Languages.italian.code],
  [Markets.northAmerica]: [Languages.english.code, Languages.french.code],
  [Markets.deutschland]: [Languages.german.code, Languages.english.code],
  [Markets.portugal]: [Languages.english.code, Languages.portuguese.code],
  [Markets.australiaNewZeeland]: [Languages.english.code],
  [Markets.restOfTheWorld]: [Languages.english.code],
  [Markets.asia]: [Languages.english.code],
  [Markets.unitedKingdom]: [Languages.english.code],
  [Markets.ireland]: [Languages.english.code],
  [Markets.middleEast]: [Languages.english.code, Languages.french.code],
  [Markets.africaGeneral]: [Languages.german.code, Languages.english.code, Languages.french.code],
  [Markets.latinAmerica]: [Languages.english.code, Languages.spanish.code, Languages.portuguese.code],
  [Markets.euro]: [Languages.english.code],
  [Markets.northAfrica]: [Languages.english.code, Languages.french.code],
}

export const marketsByLocales = Object.entries(localesByMarkets).reduce(
  (acc, [market, locales]) => {
    locales.forEach((locale) => {
      acc[locale] = acc[locale] ? [...acc[locale], market] : [market]
    })
    return acc
  },
  {} as Record<string, string[]>
)

export const localesAndMarkets = Object.entries(marketsByLocales)
  .map(([language, markets]) => markets.map((market) => language))
  .flat()
