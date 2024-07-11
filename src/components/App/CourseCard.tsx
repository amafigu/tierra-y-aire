import { Box } from '@/components/ui/Box'
import { Button } from '@/components/ui/Button'
import { Flex } from '@/components/ui/Flex'
import { Image } from '@/components/ui/Image'
import { Typography } from '@/components/ui/Typography'
import { hostPrefix } from '@/constants/images'
import { useTranslate } from '@/hooks/useTranslate'
import { CourseCard as ICourseCard } from '@/types/Cards'
import { camelCaseToTitleCase } from '@/utils/utils'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled(Flex)`
  width: ${(props) => props.theme.dimensions.widthCard};
  background-color: ${(props) => props.theme.color.backgroundTertiary};
  border-bottom-left-radius: ${(props) => props.theme.borderRadius.regular};
  border-bottom-right-radius: ${(props) => props.theme.borderRadius.regular};
`

const Img = styled(Image)`
  width: 100%;
  height: 268px;
  object-fit: content;
  border-top-left-radius: ${(props) => props.theme.borderRadius.regular};
  border-top-right-radius: ${(props) => props.theme.borderRadius.regular};
`

export const CourseCard: FC<ICourseCard> = ({
  name,
  description,
  path,
  image,
}) => {
  const { translate } = useTranslate()
  const text = translate.components.courseCards

  return (
    <Card
      as='article'
      $justifyContent='center'
      $wrap='wrap'
      aria-labelledby={`${name}-course`}
    >
      <Img src={`${hostPrefix}${image}`} alt={`${name} course`} />
      <Box $padding='1.25rem 1.75rem' $width='100%'>
        <Box $height='48px'>
          <Typography
            id={`${name}-course`}
            as='h3'
            $size='medium'
            $weight='semibold'
            $margin='0 0 1.5rem 0'
            $overflow='hidden'
          >
            {camelCaseToTitleCase(name)}
          </Typography>
        </Box>
        <Typography
          as='h4'
          $size='small'
          $margin='0 0 2rem 0'
          $overflow='hidden'
        >
          {description.toLowerCase()}
        </Typography>
        <Button
          $variant='card'
          $size='medium'
          as={Link}
          to={path}
          aria-label={`${name} course details`}
        >
          <Typography>{camelCaseToTitleCase(text.seeMore)}</Typography>
        </Button>
      </Box>
    </Card>
  )
}
