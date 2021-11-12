import React from 'react'
import { Link } from 'react-router-dom'

export interface BreadcrumbItemProps {
  url: string
  name: string
}
export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = (props) => {
  return (
    <li>
      <Link to={props.url}>{props.name}</Link>
    </li>
  )
}

export const BreadcrumbSeperator = () => {
  return (
    <li className="last:hidden">
      <span className="mx-2">/</span>
    </li>
  )
}
