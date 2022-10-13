import { Meta, StoryObj } from "@storybook/react"

import { Checkbox, ICheckbox } from './Checkbox'
import { Text } from '../Text/Text'

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    children: "Place holder"
  },
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2" >
          {Story()}
          <Text size="sm" > Lembrar-me de mim por 30 dias </Text>
        </div>
      )
    }
  ]
} as Meta<ICheckbox>

export const Default: StoryObj<ICheckbox> = {}
