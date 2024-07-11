import { SectionsNavigator } from '@/components/App/SectionsNavigator'
import { UpperBanner } from '@/components/App/UpperBanner'
import { Box } from '@/components/ui/Box'
import { Flex } from '@/components/ui/Flex'
import { musicalLanguageBackground } from '@/constants/backgroundImages'
import { useTranslate } from '@/hooks/useTranslate'
import { FC, useRef } from 'react'
import styled from 'styled-components'
import { EducationSection } from './EducationSection'
import { FounderSection } from './FounderSection'
import { InspirationSection } from './InspirationSection'
import { PhilosophySection } from './PhilosophySection'

const Container = styled(Box)`
  min-height: ${(props) => props.theme.minHeightPage};
  background-color: ${(props) => props.theme.color.backgroundSecondary};
`

export const About: FC = () => {
  const { translate } = useTranslate()
  const text = translate.pages.about

  const schoolSectionRef = useRef<HTMLDivElement | null>(null)
  const philosophySectionRef = useRef<HTMLDivElement | null>(null)
  const founderSectionRef = useRef<HTMLDivElement | null>(null)

  const sectionsRefs = [
    { ref: schoolSectionRef, name: 'school' },
    { ref: philosophySectionRef, name: 'philosophy' },
    { ref: founderSectionRef, name: 'founder' },
  ]

  return (
    <Flex as='main' $justifyContent='center' aria-label='about page'>
      <Container $width='100%'>
        <UpperBanner
          backgroundUrl={musicalLanguageBackground}
          title={text.aboutPageUpperSectionTitle}
          text={text.aboutPageUpperSectionText}
        />
        <SectionsNavigator items={sectionsRefs} />
        <EducationSection ref={schoolSectionRef} />
        <InspirationSection />
        <PhilosophySection ref={philosophySectionRef} />
        <FounderSection ref={founderSectionRef} />
      </Container>
    </Flex>
  )
}
