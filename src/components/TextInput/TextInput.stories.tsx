import { Slot } from "@radix-ui/react-slot"
import { Meta, StoryObj } from "@storybook/react"

import { TextInput, ITextInputInput, ITextInputRoot } from './TextInput'

import { Envelope } from 'phosphor-react'

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
      // avoid use of fragment and showing in the docs
      <TextInput.Icon> 
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Placeholder text" />  
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<ITextInputRoot>

export const Default: StoryObj<ITextInputRoot> = {}

export const WithoutIcon: StoryObj<ITextInputRoot> = {
  args: {
      children: <TextInput.Input placeholder="Placeholder text" />  
  }
}
