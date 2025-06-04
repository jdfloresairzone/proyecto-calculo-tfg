import type { Meta, StoryObj } from "@storybook/react"
import { Icon, IconData } from "../.."

const meta: Meta<typeof Icon> = {
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: {
        labels: Object.values(IconData),
        type: "select",
      },
      description: 'Icono en base al enum "IconData":',
    },
    size: {
      control: {
        min: 8,
        max: 128,
        step: 4,
        type: "range",
      },
      description: "Tamaño del icono en píxeles (multiplos de 4)",
    },
  },
}

export default meta
type Story = StoryObj<typeof Icon>

export const Base: Story = {
  args: {
    name: IconData.hamburger,
    size: 64,
  },
}
