"use client"
import useDialogState from '@/shared/hooks/use-dialog-state'
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

export type DataTableDialogType = 'addUser' | 'deleteUser' | 'openOrderQuizData' | 'addCase' | 'updateCase' | 'deleteCase' | 'addTestimonial' | 'updateTestimonial' | 'deleteTestimonial' |
'addPromo' | 'updatePromo' | 'deletePromo'

interface ContextType {
	open: DataTableDialogType | null
	setOpen: (str: DataTableDialogType | null) => void
	currentRow: any | null
	setCurrentRow: Dispatch<SetStateAction<any | null>>
}

const DataTableContext = createContext<ContextType | null>(null)

interface Props {
	children: ReactNode
}

export default function DataTableProvider({ children }: Props) {
	const [open, setOpen] = useDialogState<DataTableDialogType>(null)
	const [currentRow, setCurrentRow] = useState<any | null>(null);

	return(
		<DataTableContext value={{ open, setOpen, currentRow, setCurrentRow}}>
			{children}
	  </DataTableContext>
	)
}

// eslint-disable-next-line react-refresh/only-export-components
export const useDataTable = () => {
	const dataTableContext = useContext(DataTableContext)

	if (!dataTableContext) {
		throw new Error('useDataTable has to be used within <dataTableContext>')
	}

	return dataTableContext
}