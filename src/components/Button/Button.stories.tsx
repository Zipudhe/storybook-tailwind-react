import { Slot } from "@radix-ui/react-slot"
import { Meta, StoryObj } from "@storybook/react"

import { Button, IButton } from './Button'

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Place holder"
  },
  argTypes: {}
} as Meta<IButton>

export const Default: StoryObj<IButton> = {}

export const Small: StoryObj<IButton> = {
  args:{
  }
}

export const Large: StoryObj<IButton> = {
  args: {
  }
}

export const CustomComponents: StoryObj<IButton> = {
  args: {
    children: <h1> Custom components </h1>
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    }
  }
}