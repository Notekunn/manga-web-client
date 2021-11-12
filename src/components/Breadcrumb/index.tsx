import React from 'react'
import { BreadcrumbItemProps, BreadcrumbItem, BreadcrumbSeperator } from './BreadcrumbItem'
export interface BreadcrumbProps {
  items: BreadcrumbItemProps[]
}
export const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  return (
    <nav className="bg-grey-light rounded font-sans w-full p-3">
      <ol className="flex text-blue-500">
        {props.items.map((item) => (
          <>
            <BreadcrumbItem name={item.name} url={item.url} />
            <BreadcrumbSeperator />
          </>
        ))}
      </ol>
    </nav>
  )
}
export interface BreadcrumbItemData extends BreadcrumbItemProps {}
