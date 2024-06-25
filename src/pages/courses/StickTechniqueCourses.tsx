import { stickTechniqueBackground } from '@/constants/backgroundImages'
import { stickTechniqueCourses } from '@/constants/images'
import { FC } from 'react'
import { CoursePageContent } from './CoursePageContent'

export const StickTechniqueCourses: FC = () => {
  return (
    <CoursePageContent
      upperBannerImgPath={stickTechniqueBackground}
      courseBannerImgPath={stickTechniqueCourses}
      pageTranslationObj={'stickTechnique'}
      invertLayout={false}
    />
  )
}
