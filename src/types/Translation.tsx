export interface CourseCardTranslations {
  [key: string]: string
}

export interface CourseCardsTranslations {
  ensemble: CourseCardTranslations
  handTechnique: CourseCardTranslations
  stickTechnique: CourseCardTranslations
  musicalLanguage: CourseCardTranslations
  musicalDirection: CourseCardTranslations
  ensembleComposition: CourseCardTranslations
}

export interface ComponentsTranslations {
  courseCards: {
    cards: CourseCardsTranslations
    seeMore: string
  }
  homeBanner: {
    [key: string]: string
  }
  founderBanner: {
    [key: string]: string
  }
  navigationMenu: {
    [key: string]: string
  }
  testimonialCarousel: {
    [key: string]: string
  }
  navbar: {
    [key: string]: { [key: string]: string }
  }
  footer: {
    teaserText: string
    linksColumn: {
      title: string
      about: string
    }
    coursesColumn: {
      title: string
      ensemble: string
      handTechnique: string
      stickTechnique: string
      musicalLanguage: string
      musicalDirection: string
      ensembleComposition: string
    }
    socialMediaLinksColumn: {
      title: string
    }
    copyrightFirst: string
    copyrightSecond: string
  }
  whatsAppButton: {
    [key: string]: string
  }
}

export interface Translations {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any
  components: ComponentsTranslations
}
