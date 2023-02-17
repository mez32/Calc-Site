import React from 'react'
import { ACTIONS } from '../reducers/calcReducer'
import { Props } from '../types/operationsButton'

const OperationButton: React.FC<Props> = ({ operation, dispatch }) => {
	return (
		<button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}>
			{operation}
		</button>
	)
}

export default OperationButton
