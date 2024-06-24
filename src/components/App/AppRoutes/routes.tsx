import { ROUTES } from '@/constants/routes'
import { About } from '@/pages/About'
import { Home } from '@/pages/Home'
import { PageNotFound } from '@/pages/PageNotFound'
import { EnsembleCompositionCourses } from '@/pages/courses/EnsembleCompositionCourses'
import { EnsembleCourses } from '@/pages/courses/EnsembleCourses'
import { HandTechniqueCourses } from '@/pages/courses/HandTechniqueCourses'
import { MusicalDirectionCourses } from '@/pages/courses/MusicalDirectionCourses'
import { MusicalLanguageCourses } from '@/pages/courses/MusicalLanguageCourses'
import { StickTechniqueCourses } from '@/pages/courses/StickTechniqueCourses'

export const routes = [
  { path: ROUTES.ABOUT, element: <About /> },
  { path: ROUTES.HOME, element: <Home /> },
  { path: ROUTES.COURSES.ENSEMBLE, element: <EnsembleCourses /> },
  { path: ROUTES.COURSES.HAND_TECHNIQUE, element: <HandTechniqueCourses /> },
  { path: ROUTES.COURSES.STICK_TECHNIQUE, element: <StickTechniqueCourses /> },
  {
    path: ROUTES.COURSES.MUSICAL_LANGUAGE,
    element: <MusicalLanguageCourses />,
  },
  {
    path: ROUTES.COURSES.MUSICAL_DIRECTION,
    element: <MusicalDirectionCourses />,
  },
  {
    path: ROUTES.COURSES.ENSEMBLE_COMPOSITION,
    element: <EnsembleCompositionCourses />,
  },

  { path: ROUTES.NOT_FOUND, element: <PageNotFound /> },
]
