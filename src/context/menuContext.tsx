import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

export interface MenuContextTypes {
  showMobile: boolean
  setShowMobile: Dispatch<SetStateAction<boolean>>
  showLanguages: boolean
  setShowLanguages: Dispatch<SetStateAction<boolean>>
  showCourses: boolean
  setShowCourses: Dispatch<SetStateAction<boolean>>
}

export const MenuContext = createContext<MenuContextTypes | undefined>(
  undefined,
)

interface MenuProviderProps {
  children: ReactNode
}

export const MenuProvider: FC<MenuProviderProps> = ({ children }) => {
  const [showMobile, setShowMobile] = useState<boolean>(false)
  const [showLanguages, setShowLanguages] = useState<boolean>(false)
  const [showCourses, setShowCourses] = useState<boolean>(false)

  return (
    <MenuContext.Provider
      value={{
        showMobile,
        setShowMobile,
        showLanguages,
        setShowLanguages,
        showCourses,
        setShowCourses,
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}

export const useMenuContext = (): MenuContextTypes => {
  const context = useContext(MenuContext)
  if (context === undefined) {
    throw new Error('useMenuContext must be used within a MenuProvider')
  }
  return context
}
