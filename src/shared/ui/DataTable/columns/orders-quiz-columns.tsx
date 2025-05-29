"use client"
import { useDataTable } from '@/shared/context/data-table-context'
import { OrderQuizType } from '@/shared/types/validation/orders'
import LongText from '@/shared/ui/long-text'
import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale/ru'
import { Button } from '../../button'
import { DataTableColumnHeader } from '../data-table-column-header'

export const ordersQuizColumns: ColumnDef<OrderQuizType>[] = [
		{
    id: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Имя' />
    ),
    cell: ({ row }) => {
      const cell= row.original.name
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
    id: 'data',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Ответы на вопросы' />
    ),
    cell: ({ row }) => {
     const { setOpen, setCurrentRow } = useDataTable()
               return(
               <Button 
               variant={'outline'} 
               className='w-fit text-nowrap' 
               onClick={() => {
                 setCurrentRow(row.original)
                 setOpen('openOrderQuizData')
               }}>
                 Посмотреть
               </Button>
           )
    },
    meta: { className: 'w-36' },
  },
  {
    id:'createdAt',
    accessorKey:'createdAt',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Дата заявки' />
    ),
    cell: ({ row }) => {
      const cell = row.original.createdAt
      return(
       <div>{format(cell,"d.MM.yyyy h:mm ", {locale: ru})}</div>
      )
  	},
  },
]