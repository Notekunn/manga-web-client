import React from 'react'
import type { IconType } from 'react-icons'

export interface NavItemProps {
  BeforeIcon?: IconType
  AfterIcon?: IconType
}
export const NavItem: React.FC<NavItemProps> = (props) => {
  const { children, BeforeIcon, AfterIcon } = props
  return (
    <div className="hover:bg-trueGray-50 text-custom-gray hover:text-custom-purple flex items-center px-3">
      {BeforeIcon && <BeforeIcon size="1rem" className="mr-1" />}
      <span className="inline-block uppercase leading-10">{children}</span>
      {AfterIcon && <AfterIcon size="1rem" className="ml-1" />}
    </div>
  )
}
