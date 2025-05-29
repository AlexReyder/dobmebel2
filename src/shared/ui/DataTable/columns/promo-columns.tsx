"use client"
import { promoRowActions } from '@/shared/constants/admin-columns-row'
import { PromoType } from '@/shared/types/validation/promo'
import LongText from '@/shared/ui/long-text'
import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale/ru'
import { DataTableColumnHeader } from '../data-table-column-header'
import { DataTableRowActions } from '../data-table-row-action'

export const promoColumns: ColumnDef<PromoType>[] = [
	{
      id: 'identifier',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Идентификатор' />
      ),
      cell: ({ row }) => {
        const cell= row.original.identifier
        return <LongText className='w-full'>{cell}</LongText>
      },
      meta: { className: 'w-36' },
  },
  {
    id:'createdAt',
    accessorKey:'createdAt',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Дата создания' />
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
      <DataTableRowActions row={row} actionsData={promoRowActions} key={row.id}/>
    ),
  },
]