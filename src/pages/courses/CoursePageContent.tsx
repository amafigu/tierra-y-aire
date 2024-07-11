import { CourseBanner } from '@/components/App/CourseBanner'
import { UpperBanner } from '@/components/App/UpperBanner'
import { Box } from '@/components/ui/Box'
import { useTranslate } from '@/hooks/useTranslate'
import { FC } from 'react'

interface CoursePageContentProps {
  upperBannerImgPath: string
  courseBannerImgPath: string
  pageTranslationObj: string
  invertLayout: boolean
}

export const CoursePageContent: FC<CoursePageContentProps> = ({
  upperBannerImgPath,
  courseBannerImgPath,
  pageTranslationObj,
  invertLayout,
}) => {
  const { translate } = useTranslate()
  const text = translate.pages.courses

  return (
    <Box aria-label='course details'>
      <UpperBanner
        backgroundUrl={upperBannerImgPath}
        title={text[pageTranslationObj].title}
      />
      <CourseBanner
        imageUrl={courseBannerImgPath}
        name={text[pageTranslationObj].subtitle}
        text={text[pageTranslationObj].description}
        invert={invertLayout}
      />
    </Box>
  )
}
