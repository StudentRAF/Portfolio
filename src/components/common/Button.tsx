import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils.ts"
import ArrowUpRightIcon from "@/assets/icons/ArrowUpRight.tsx";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap rounded-full transition-all outline-none hover:cursor-pointer group",
  {
    variants: {
      variant: {
        default:
          "bg-gray-850 text-normal-14 text-gray-100 hover:bg-gray-700 hover:shadow-small",
        navigation:
          "bg-transparent text-normal-14 text-gray-100 hover:bg-gray-700",
        link:
          "bg-transparent text-normal-14 text-gray-100"
      },
      size: {
        default: "w-fit h-8 px-5 py-1.5",
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
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
  asChild?: boolean
}) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size }),
        variant == "link" && "py-3 pl-6 pr-5 gap-1.5",
        className
      )}
      {...props}>
      {children}
      {variant == "link" && <ArrowUpRightIcon/>}
      {variant == "link" && <div className="absolute w-0 h-0.5 bottom-0 left-1/2 -translate-x-1/2 rounded-full bg-gray-300 group-hover:w-[calc(100%-28px)] group-hover:-translate-x-[calc(50%-2px)] transition-all duration-500"/>}
    </Comp>
  )
}

export {
  Button,
  buttonVariants
}
