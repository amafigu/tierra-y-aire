import { musicalLanguageBackground } from '@/constants/backgroundImages'
import { musicalLanguageCourses } from '@/constants/images'
import { CoursePageContent } from '@/pages/courses/CoursePageContent'
import { FC } from 'react'

export const MusicalLanguageCourses: FC = () => {
  return (
    <CoursePageContent
      upperBannerImgPath={musicalLanguageBackground}
      courseBannerImgPath={musicalLanguageCourses}
      pageTranslationObj={'musicalLanguage'}
      invertLayout={true}
    />
  )
}
