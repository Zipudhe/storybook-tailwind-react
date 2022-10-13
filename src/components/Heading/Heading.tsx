import { FC, ReactNode } from 'react'
import { clsx } from 'clsx'

import { Slot } from '@radix-ui/react-slot'

export interface IHeading {
  size?: 'sm' | 'md' | 'lg',
  children: ReactNode,
  asChild: boolean,
}

export const Heading: FC<IHeading> = ({ children, size = 'md', asChild }) => {
  const  Comp = asChild ? Slot : 'h2'
  
  return(
      <Comp 
        className={
          clsx("text-gray-100 font-sans",
          {
            "text-lg": size === 'sm',
            "text-xl": size === 'md',
            "text-xxl": size === 'lg',
          })
        } >
        { children }
      </Comp>
    )
}