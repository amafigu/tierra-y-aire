import { useNavigate } from 'react-router-dom'

type Setter = (value: boolean) => void

export const useOnNavigate = () => {
  const navigate = useNavigate()

  const onNavigate = (setters: Setter[], route: string) => {
    setters.forEach((setter) => setter(false))
    navigate(route)
    window.scroll(0, 0)
  }

  return { onNavigate }
}
