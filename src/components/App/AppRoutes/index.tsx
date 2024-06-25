import { Footer } from '@/components/App/Footer'
import { Navbar } from '@/components/App/Navbar'
import { WhatsAppButton } from '@/components/App/WhatsAppButton'
import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'

export const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
      <Footer />
    </>
  )
}
