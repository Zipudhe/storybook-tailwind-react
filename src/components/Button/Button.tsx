import { FC, ReactNode } from 'react'
import { clsx } from 'clsx'

import { Slot } from '@radix-ui/react-slot'

export interface IButton {
  children: ReactNode,
}

export const Button: FC<IButton> = ({ children }) => {
  
  return(
      <button 
        className={
          clsx("py-3 px-3 bg-cyan-500 rounded font-semibold text-black text-sm  w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white")
        } >
        { children }
      </button>
    )
}