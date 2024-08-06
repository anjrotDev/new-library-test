import { ElementType, forwardRef, ReactElement } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../utils/util";
import { PolymorphicComponentPropsWithRef, PolymorphicRef } from "../utils/polmorphicsTypes";

const textStyles = cva("w-full", {
  variants: {
    emphasis: {
      low: "text-gray-600 font-light"
    },
    size: {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl"
    },
    weight: {
      thin: "font-thin",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      black: "font-black"
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    },
    italic: {
      true: "italic"
    },
    underline: {
      true: "underline underline-offset-2"
    }
  },
  defaultVariants: {
    size: "base",
    align: "left"
  }
});

export type TextProps<C extends ElementType> = PolymorphicComponentPropsWithRef<C, VariantProps<typeof textStyles>>;

export type TextComponent = <C extends ElementType = "p">(props: TextProps<C>) => ReactElement | null;

export const Text: TextComponent = forwardRef(
  <C extends ElementType = "p">(
    { as, children, emphasis, size, weight, align, italic, underline, className, ...props }: TextProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || "p";
    return (
      <Component className={cn(textStyles({ emphasis, size, weight, align, italic, underline }), className)} {...props} ref={ref}>
        {children}
      </Component>
    );
  }
) as TextComponent;
