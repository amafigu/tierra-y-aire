import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

interface ChevronSwitcherProps {
  show: boolean
  setShow: (show: boolean) => void
}

export const ChevronSwitcher: FC<ChevronSwitcherProps> = ({
  show,
  setShow,
}) => {
  return (
    <>
      {!show && (
        <FontAwesomeIcon icon={faChevronDown} onClick={() => setShow(true)} />
      )}
      {show && (
        <FontAwesomeIcon icon={faChevronUp} onClick={() => setShow(false)} />
      )}
    </>
  )
}
