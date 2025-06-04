"use client"

import React, { PropsWithChildren, ReactNode, useEffect, useRef, useState } from "react"

interface Props extends PropsWithChildren {
  trigger: ReactNode
  align?: "left" | "right" | "auto"
  isDisplayed?: boolean
  onDisplayChange?: (value: boolean) => void
}

export const DropDown: React.FC<Props> = ({
  children,
  trigger,
  align = "right",
  isDisplayed: initialDisplayed = false,
  onDisplayChange,
}) => {
  const [isDisplayed, setIsDisplayed] = useState(initialDisplayed)
  const dropdown = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsDisplayed(initialDisplayed)
  }, [initialDisplayed])

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        handleUpdateDisplay(false)
      }
    }

    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleUpdateDisplay(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscapeKey)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscapeKey)
    }
  }, [dropdown])

  const dictionary = {
    left: "right-0 left-0 sm:left-auto",
    right: "left-0 right-0 sm:right-auto",
    auto: "left-auto right-auto",
  }

  const handleUpdateDisplay = (value: boolean) => {
    setIsDisplayed(value)
    onDisplayChange?.(value)
  }

  return (
    <div className={align === "auto" ? "relative flex w-full justify-center lg:justify-end " : "sm:relative"}>
      <div onClick={() => handleUpdateDisplay(true)} className="cursor-pointer">
        {trigger}
      </div>
      {isDisplayed && (
        <div ref={dropdown} className={`absolute ${dictionary[align]} z-50 top-8` + (align === "auto" ? " top-8" : "")}>
          {children}
        </div>
      )}
    </div>
  )
}
