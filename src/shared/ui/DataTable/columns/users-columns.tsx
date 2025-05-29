"use client"
import { userRowActions } from '@/shared/constants/admin-columns-row'
import { userRoleColorAdmin, userRoleTypeAdmin } from '@/shared/types/admin'
import { UserDbType } from '@/shared/types/admin/user'
import LongText from '@/shared/ui/long-text'
import { cn } from '@/shared/utils/common'
import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale/ru'
import { Badge } from '../../badge'
import { DataTableColumnHeader } from '../data-table-column-header'
import { DataTableRowActions } from '../data-table-row-action'

export const userColumns: ColumnDef<UserDbType>[] = [
		{
    id: 'lastName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Фамилия' />
    ),
    cell: ({ row }) => {
      const cell= row.original.lastName
      return <LongText className='w-full'>{cell}</LongText>
    },
    meta: { className: 'w-36' },
  },
   {
    id: 'firstName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Имя' />
    ),
    cell: ({ row }) => {
      const cell= row.original.firstName
      return <LongText className='w-full'>{cell}</LongText>
    },
    meta: { className: 'w-36' },
  },
	{
    id: 'middleName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Отчество' />
    ),
    cell: ({ row }) => {
      const cell= row.original.middleName
      return <LongText className='w-full'>{cell}</LongText>
    },
    meta: { className: 'w-36' },
  },
	{
    id: 'email',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Электронная почта' />
    ),
    cell: ({ row }) => {
      const cell= row.original.email
      return <LongText className='w-full'>{cell}</LongText>
    },
    meta: { className: 'w-36' },
  },
	{
    id: 'phone',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Номер телефона' />
    ),
    cell: ({ row }) => {
      const cell= row.original.phone
      return <LongText className='w-full'>{cell}</LongText>
    },
    meta: { className: 'w-36' },
  },
  {
      id:'role',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Уровень доступа' />
      ),
      cell: ({ row }) => {
        const role = row.original.role
        const statusObj = userRoleTypeAdmin.find(({ value }) => value === role)
        const badgeColor = userRoleColorAdmin.get(role)
        return (
          <div className='flex space-x-2'>
            <Badge variant='outline' className={cn(badgeColor)}>
              {statusObj?.title}
            </Badge>
          </div>
        )
      },
  },     
  {
    id:'createdAt',
    accessorKey:'createdAt',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Дата регистрации' />
    ),
    cell: ({ row }) => {
      const cell = row.original.createdAt
      return(
       <div>{format(cell,"d.MM.yyyy h:mm ", {locale: ru})}</div>
      )
  	},
  },
  {
    id: 'actions',
    cell: ({row}) => (
      <DataTableRowActions row={row} actionsData={userRowActions} key={row.id}/>
    ),
  },
]