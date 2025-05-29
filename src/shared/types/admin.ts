import { Role } from '@prisma/client'
import { ReactNode } from 'react'
import { DataTableDialogType } from '../context/data-table-context'

export interface NavItem {
  title: string;
  slug?: string;
  url: string;
  shortcut?: [string, string];
  icon?: ReactNode
  label?: string;
  description?: string;
  isActive?: boolean;
  items?: NavItem[];
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export type SidebarNavItem = NavItemWithChildren;


export interface RowActionItem {
  action: DataTableDialogType
  title: string
  icon: ReactNode
}

export interface TableActionDialogs {
  add?: TableActionDialogsItem
  update?: TableActionDialogsItem
  delete?: TableActionDialogsItem
}

export interface TableActionDialogsItem {
  action: DataTableDialogType
  key: string
}

export const userRoleColorAdmin = new Map<Role, string>([
  ['ADMIN', 'bg-teal-100/30 text-teal-900 dark:text-teal-200 border-teal-200'],
  ['SUPERADMIN', 'bg-red-300/40 border-red-300'],
])

export const userRoleTypeAdmin = [
  {
    title: 'Администратор',
    value: Role.ADMIN
  },
  {
    title: 'Супер-администратор',
    value: Role.SUPERADMIN
  },
]