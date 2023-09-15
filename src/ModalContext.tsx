'use client'

import { PropsWithChildren, createContext, useContext, useState } from 'react'

interface ModalState {
  isOpen: boolean
}

interface ModalContext extends ModalState {
  showModal: () => void
  closeModal: () => void
}

const defaultModalState: ModalState = {
  isOpen: false,
}

export const ModalContext = createContext<ModalContext>({
  ...defaultModalState,
  showModal: () => {},
  closeModal: () => {},
})

export const useModal = () => useContext(ModalContext) as ModalContext

interface ModalContextProps extends PropsWithChildren {}

export const ModalContextProvider = ({ children }: ModalContextProps) => {
  const [modalState, setModalState] = useState<ModalState>(defaultModalState)

  const showModal = () => {
    setModalState({
      isOpen: true,
    })
  }

  const closeModal = () => {
    setModalState(defaultModalState)
  }

  return (
    <ModalContext.Provider
      value={{
        ...modalState,
        showModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}