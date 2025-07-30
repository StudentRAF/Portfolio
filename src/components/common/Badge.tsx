import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils.ts"

const badgeVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full transition-all outline-none",
  {
    variants: {
      variant: {
        default:
          "bg-gray-700 text-small-12 text-gray-100 shadow-small hover:bg-gray-650",
      },
      size: {
        default: "h-6 px-4 py-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    },
  }
)

const Badge = ({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export {
  Badge,
  badgeVariants
}
