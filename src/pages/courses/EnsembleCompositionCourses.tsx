import { ensembleBackground } from '@/constants/backgroundImages'
import { ensembleCompositionCourses } from '@/constants/images'
import { FC } from 'react'
import { CoursePageContent } from './CoursePageContent'

export const EnsembleCompositionCourses: FC = () => {
  return (
    <CoursePageContent
      upperBannerImgPath={ensembleBackground}
      courseBannerImgPath={ensembleCompositionCourses}
      pageTranslationObj={'ensembleComposition'}
      invertLayout={true}
    />
  )
}
