import React, { ReactNode, createContext, useContext, useState } from 'react'

interface MenuContextProps {
  showMobile: boolean
  setShowMobile: React.Dispatch<React.SetStateAction<boolean>>
  showLanguages: boolean
  setShowLanguages: React.Dispatch<React.SetStateAction<boolean>>
  showCourses: boolean
  setShowCourses: React.Dispatch<React.SetStateAction<boolean>>
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined)

interface MenuProviderProps {
  children: ReactNode
}

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
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

export const useMenuContext = (): MenuContextProps => {
  const context = useContext(MenuContext)
  if (context === undefined) {
    throw new Error('useMenuContext must be used within a MenuProvider')
  }
  return context
}
