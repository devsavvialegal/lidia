"use client"

import type React from "react"
import { useRef } from "react"

type MagneticButtonBaseProps = {
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary" | "ghost"
  size?: "default" | "lg"
}

type MagneticButtonButtonProps = MagneticButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof MagneticButtonBaseProps | "href">

type MagneticButtonAnchorProps = MagneticButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof MagneticButtonBaseProps> & {
    href: string
  }

type MagneticButtonProps = MagneticButtonButtonProps | MagneticButtonAnchorProps

export function MagneticButton(props: MagneticButtonProps) {
  const { children, className = "", variant = "primary", size = "default" } = props
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null)
  const positionRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number | null>(null)

  const setRef = (node: HTMLButtonElement | HTMLAnchorElement | null) => {
    ref.current = node
  }

  const handleMouseMove: React.MouseEventHandler<HTMLElement> = (e) => {
    if ("href" in props) {
      props.onMouseMove?.(e as React.MouseEvent<HTMLAnchorElement>)
    } else {
      props.onMouseMove?.(e as React.MouseEvent<HTMLButtonElement>)
    }

    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    positionRef.current = { x: x * 0.15, y: y * 0.15 }

    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      if (ref.current) {
        ref.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0)`
      }
    })
  }

  const handleMouseLeave: React.MouseEventHandler<HTMLElement> = (e) => {
    if ("href" in props) {
      props.onMouseLeave?.(e as React.MouseEvent<HTMLAnchorElement>)
    } else {
      props.onMouseLeave?.(e as React.MouseEvent<HTMLButtonElement>)
    }

    positionRef.current = { x: 0, y: 0 }
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      if (ref.current) {
        ref.current.style.transform = "translate3d(0px, 0px, 0)"
      }
    })
  }

  const variants = {
    primary:
      "bg-brand-purple text-white hover:bg-brand-lavanda hover:text-brand-navy backdrop-blur-md hover:scale-[1.02] active:scale-[0.98]",
    secondary:
      "bg-foreground/5 text-foreground hover:bg-foreground/10 backdrop-blur-xl border border-brand-lavanda/30 hover:border-brand-lavanda/55",
    ghost: "bg-transparent text-foreground hover:bg-foreground/5 backdrop-blur-sm",
  }

  const sizes = {
    default: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  }

  const sharedProps = {
    ref: setRef,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className: `
      relative overflow-hidden rounded-full font-medium
      transition-all duration-300 ease-out will-change-transform
      ${variants[variant]}
      ${sizes[size]}
      ${className}
    `,
    style: {
      transform: "translate3d(0px, 0px, 0)",
      contain: "layout style paint",
      ...props.style,
    },
  }

  if ("href" in props) {
    const { children: _children, className: _className, variant: _variant, size: _size, ...anchorProps } = props

    return (
      <a {...anchorProps} {...sharedProps}>
        <span className="relative z-10">{children}</span>
      </a>
    )
  }

  const {
    children: _children,
    className: _className,
    variant: _variant,
    size: _size,
    type = "button",
    ...buttonProps
  } = props

  return (
    <button
      {...buttonProps}
      {...sharedProps}
      type={type}
    >
      <span className="relative z-10">{children}</span>
    </button>
  )
}
