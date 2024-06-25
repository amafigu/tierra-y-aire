import { ensembleBackground } from '@/constants/backgroundImages'
import { ensembleCourses } from '@/constants/images'
import { CoursePageContent } from '@/pages/courses/CoursePageContent'
import { FC } from 'react'

export const EnsembleCourses: FC = () => {
  return (
    <CoursePageContent
      upperBannerImgPath={ensembleBackground}
      courseBannerImgPath={ensembleCourses}
      pageTranslationObj={'ensemble'}
      invertLayout={false}
    />
  )
}
