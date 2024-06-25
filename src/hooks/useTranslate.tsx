import { useLocaleContext } from '@/context/localeContext'
import { Translations } from '@/types/Translation'

export const useTranslate = (): Translations => {
  const { translate } = useLocaleContext()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return translate as any
}
