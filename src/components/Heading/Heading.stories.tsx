import { Slot } from "@radix-ui/react-slot"
import { Meta, StoryObj } from "@storybook/react"

import { Heading, IHeading } from './Heading'

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Place holder"
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<IHeading>

export const Default: StoryObj<IHeading> = {}

export const Small: StoryObj<IHeading> = {
  args:{
    size: 'sm'
  }
}

export const Large: StoryObj<IHeading> = {
  args: {
    size: 'lg'
  }
}

export const CustomComponents: StoryObj<IHeading> = {
  args: {
    asChild: true,
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