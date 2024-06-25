import { musicalDirectionAndHandTechniqueBackground } from '@/constants/backgroundImages'
import { handTechniqueCourses } from '@/constants/images'
import { CoursePageContent } from '@/pages/courses/CoursePageContent'
import { FC } from 'react'

export const HandTechniqueCourses: FC = () => {
  return (
    <CoursePageContent
      upperBannerImgPath={musicalDirectionAndHandTechniqueBackground}
      courseBannerImgPath={handTechniqueCourses}
      pageTranslationObj={'handTechnique'}
      invertLayout={true}
    />
  )
}
