import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Texto";

const meta: Meta<typeof Text> = {
  title: "Components/Texto",
  component: Text,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    ref: {
      table: {
        disable: true
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Prueba: Story = {
  args: {
    as: "h1",
    children:
      "be parts correct potatoes sides donkey extra climate happily freedom relationship tape unit tall hung call cat window steady world front graph particular pick"
  }
};
