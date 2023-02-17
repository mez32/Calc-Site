interface DispatchProps {
	type: string
	payload: {
		operation: string
	}
}

export interface Props {
	dispatch: (payload: DispatchProps) => void
	operation: string
}
