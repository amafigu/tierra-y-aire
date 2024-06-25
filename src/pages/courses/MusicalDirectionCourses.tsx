import { musicalDirectionAndHandTechniqueBackground } from '@/constants/backgroundImages'
import { musicalDirectionCourses } from '@/constants/images'
import { FC } from 'react'
import { CoursePageContent } from './CoursePageContent'

export const MusicalDirectionCourses: FC = () => {
  return (
    <CoursePageContent
      upperBannerImgPath={musicalDirectionAndHandTechniqueBackground}
      courseBannerImgPath={musicalDirectionCourses}
      pageTranslationObj={'musicalDirection'}
      invertLayout={false}
    />
  )
}
