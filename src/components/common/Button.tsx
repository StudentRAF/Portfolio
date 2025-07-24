import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils/utils.ts"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all outline-none",
  {
    variants: {
      variant: {
        default:
          "bg-gray-850 text-gray-100 shadow-xs hover:bg-gray-700 hover:cursor-pointer",
      },
      size: {
        default: "h-8 px-5 py-1.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = ({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
  asChild?: boolean
}) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({variant, size, className}))}
      {...props}
    />
  )
}

export {
  Button,
  buttonVariants
}
