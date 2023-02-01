import React from 'react'
import { ACTIONS } from '../reducers/calcReducer'

interface DispatchProps {
	type: string
	payload: {
		operation: string
	}
}

interface Props {
	dispatch: (payload: DispatchProps) => void
	operation: string
}

const OperationButton: React.FC<Props> = ({ operation, dispatch }) => {
	return (
		<button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}>
			{operation}
		</button>
	)
}

export default OperationButton
