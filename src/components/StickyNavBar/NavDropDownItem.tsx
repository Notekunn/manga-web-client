import React from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { NavItem, NavItemProps } from './NavItem'
export interface NavDropDownItemProps extends NavItemProps {
  title: React.ReactChild
}
export const NavDropDownItem: React.FC<NavDropDownItemProps> = (props) => {
  const { children, title, BeforeIcon } = props
  return (
    <div className="relative group">
      <NavItem AfterIcon={FaCaretDown} BeforeIcon={BeforeIcon}>
        {title}
      </NavItem>
      <div
        className="hidden group-hover:block origin-top-right absolute left-0 p-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        tabIndex={-1}
      >
        {children}
      </div>
    </div>
  )
}
