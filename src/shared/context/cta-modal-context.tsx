"use client"
import useDialogState from '@/shared/hooks/use-dialog-state'
import { createContext, ReactNode, useContext } from 'react'

export type CtaDialogType = 'MEASURER' | 'ADVICE' | 'DESIGNER'

interface ContextType {
	open: CtaDialogType | null
	setOpen: (str: CtaDialogType | null) => void
}

const CtaModalContext = createContext<ContextType | null>(null)

interface Props {
	children: ReactNode
}

export default function CtaModalProvider({ children }: Props) {
	const [open, setOpen] = useDialogState<CtaDialogType>(null)

	return(
		<CtaModalContext value={{ open, setOpen}}>
			{children}
		</CtaModalContext>
	)
}

export const useCtaModal = () => {
	const ctaModalContext = useContext(CtaModalContext)

	if (!ctaModalContext) {
		throw new Error('ctaModalContext has to be used within <ctaModalContext>')
	}

	return ctaModalContext
}