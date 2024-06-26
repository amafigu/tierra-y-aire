import { useTranslate } from '@/hooks/useTranslate'
import { desktop, laptop, mobile } from '@/styles/breakpoints'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.main`
  min-height: ${({ theme }) => theme.dimensions.minHeightPage};
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    ${mobile`
      margin-top: ${({ theme }) => theme.spacing.extraLarge};
    `}

    ${laptop`
      margin: 120px 0;
    `}

    ${desktop`
      margin: 12% 0;
    `}

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .number {
    font-size: 100px;
    font-weight: ${({ theme }) => theme.font.weight.Bold};
    text-align: center;

    ${mobile`
      font-size: 86px;
      font-weight: ${({ theme }) => theme.font.weight.Bold};
    `}
  }

  .title {
    margin-bottom: ${({ theme }) => theme.spacing.extraLarge};
    text-align: center;
    font-size: ${({ theme }) => theme.font.size.extraLarge};
    font-weight: ${({ theme }) => theme.font.weight.semibold};

    ${mobile`
      font-size: ${({ theme }) => theme.font.size.semiLarge};
      font-weight: ${({ theme }) => theme.font.weight.Bold};
    `}
  }

  .description {
    width: 60%;
    margin-bottom: ${({ theme }) => theme.spacing.large};
    color: ${({ theme }) => theme.font.colorSecondary};
    text-align: center;
    font-size: ${({ theme }) => theme.font.size.semiMedium};
    font-weight: ${({ theme }) => theme.font.weight.Normal};

    ${mobile`
      width: 80%;
    `}
  }

  .link {
    font-weight: ${({ theme }) => theme.font.weight.Normal};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.small}
      ${({ theme }) => theme.spacing.semiLarge};
    background-color: ${({ theme }) => theme.color.branding};
    color: ${({ theme }) => theme.color.backgroundPrimary};
    border-radius: ${({ theme }) => theme.borderRadius.regular};
    text-decoration: none;

    &:hover {
      background-color: ${({ theme }) => theme.color.backgroundButton};
      color: ${({ theme }) => theme.color.branding};
    }

    ${mobile`
      width: 80%;
      margin-bottom: 128px;
    `}
  }
`

export const PageNotFound: FC = () => {
  const translate = useTranslate()
  const text = translate.pages.pageNotFound
  return (
    <Wrapper aria-label='Page not found'>
      <div className='container'>
        <div className='number'>404!</div>
        <div className='title'>{text.title}</div>
        <div className='description'>
          <p>{text.subtitleFirst}</p>
          <p>{text.subtitleSecond}</p>
        </div>
        <Link className='link' to='/'>
          <div>
            <span>{text.backToHome}</span>
          </div>
        </Link>
      </div>
    </Wrapper>
  )
}
