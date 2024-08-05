import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  },
  argTypes: {
    children: {
      description: "Button label"
    },
    variant: {
      type: "string",
      options: ["default", "primary", "success", "warning", "danger", "ghost"],
      control: { type: "select" },
      description: "Button Color"
    },
    outline: {
      type: "boolean",
      description: "Button Outline"
    },
    size: {
      type: "string",
      options: ["sm", "md", "lg", "full"],
      control: { type: "radio" },
      description: "Button Size"
    },
    rounded: {
      type: "string",
      options: ["basic", "sm", "md", "lg", "full"],
      control: { type: "radio" },
      description: "Button Border radious"
    },
    onClick: {
      type: "function",
      description: "Button Click"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
    onClick: fn()
  }
};
export const Primary: Story = {
  args: {
    children: "Button",
    variant: "primary"
  }
};
export const Success: Story = {
  args: {
    children: "Button",
    variant: "success"
  }
};
export const Warning: Story = {
  args: {
    children: "Button",
    variant: "warning"
  }
};
export const Danger: Story = {
  args: {
    children: "Button",
    variant: "danger"
  }
};

export const Outline: Story = {
  args: {
    children: "Button",
    outline: true
  }
};
