import { FC, Fragment, InputHTMLAttributes, ReactNode } from 'react'
import { Slot } from "@radix-ui/react-slot"

import {} from 'phosphor-react'

export interface ITextInputInput extends InputHTMLAttributes<HTMLInputElement> {}

export interface ITextInputRoot {
  children: ReactNode
}

export interface ITextInputIcon {
  children: ReactNode
}

const TextInputRoot: FC<ITextInputRoot> = ({ children }) => (
  <div className='flex items-center h-12 gap-3 py-4 px-3 bg-gray-800 rounded w-full focus-within:ring-2 ring-cyan-300' >
    { children }
  </div>
)

const TextInputIcon: FC<ITextInputIcon> = ({ children }) => {

  return (
    <Slot className='w-6 h-6 text-gray-400'>
      { children }
    </Slot>
  )
}

TextInputIcon.displayName = "TextInputIcon"

export const TextInputInput: FC<ITextInputInput> = (props) => (
      <input
        {...props}
        className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
      />
    )

// High level react component composition
export const TextInput = {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Input: TextInputInput
}