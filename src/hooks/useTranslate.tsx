import { useLocaleContext } from '@/context/localeContext'
import { Translations } from '@/types/Translation'

export const useTranslate = (): Translations => {
  const { translate, language, setLanguage } = useLocaleContext()
  const components = translate.components
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return {
    translate: translate as Translations,
    language,
    setLanguage,
    components,
  }
}
