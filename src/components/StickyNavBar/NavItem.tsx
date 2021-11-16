import React from 'react'
import type { IconType } from 'react-icons'
import { Link } from 'react-router-dom'

export interface NavItemProps {
  to?: string
  BeforeIcon?: IconType
  AfterIcon?: IconType
}
export const NavItem: React.FC<NavItemProps> = (props) => {
  const { children, BeforeIcon, AfterIcon } = props
  return (
    <div className="hover:bg-trueGray-50 text-custom-gray hover:text-custom-purple cursor-pointer flex items-center px-3">
      {BeforeIcon && <BeforeIcon size="1rem" className="mr-1" />}
      <span className="inline-block uppercase leading-10">
        <Link to={props.to || '#'}>{children}</Link>
      </span>
      {AfterIcon && <AfterIcon size="1rem" className="ml-1" />}
    </div>
  )
}
