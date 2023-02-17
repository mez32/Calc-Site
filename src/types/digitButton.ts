interface DispatchProps {
	type: string
	payload: {
		digit: string
	}
}

export interface Props {
	dispatch: (payload: DispatchProps) => void
	digit: string
}
