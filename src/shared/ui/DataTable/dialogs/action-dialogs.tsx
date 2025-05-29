"use client"
import { useDataTable } from '@/shared/context/data-table-context'
import { TableActionDialogs } from '@/shared/types/admin'
import { OrderUpdateDialog } from './orders-action-dialog'

export function ActionDialogs({data}: {data: TableActionDialogs}) {
  const { open, setOpen, currentRow, setCurrentRow } = useDataTable()
  return (
    <>

      {currentRow && (
        <>
         <OrderUpdateDialog
            key={`order-orders-${currentRow.id}`}
            open={open === 'updateOrder'}
            onOpenChange={() => {
              setOpen('updateOrder')
              setTimeout(() => {
                setCurrentRow(null)
              }, 500)
            }}
            currentRow={currentRow}
          />

        </>
      )}
    </>
  )
}