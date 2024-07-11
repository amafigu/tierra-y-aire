import { LocaleContext } from "@/context/localeContext"
import en from "@/i18n/en.json"
import es from "@/i18n/es.json"
import { act, renderHook } from "@testing-library/react"
import { FC, ReactNode, useState } from "react"
import { useTranslate } from "./useTranslate"

const languages = { en, es }

const ContextWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<keyof typeof languages>("en")

  return (
    <LocaleContext.Provider
      value={{
        languages,
        translate: languages[language],
        language,
        setLanguage,
      }}
    >
      {children}
    </LocaleContext.Provider>
  )
}

describe("useTranslation hook", () => {
  test("change from English to Spanish", () => {
    const { result } = renderHook(() => useTranslate(), {
      wrapper: ContextWrapper,
    })
    expect(result.current.translate).toEqual(languages.en)
    expect(result.current.language).toBe("en")

    act(() => {
      result.current.setLanguage("es")
    })

    expect(result.current.language).toBe("es")
    expect(result.current.translate).toEqual(languages.es)
  })
})