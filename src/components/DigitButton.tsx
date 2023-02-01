import React from 'react'
import { ACTIONS } from '../reducers/calcReducer'

interface DispatchProps {
	type: string
	payload: {
		digit: string
	}
}

interface Props {
	dispatch: (payload: DispatchProps) => void
	digit: string
}

const DigitButton: React.FC<Props> = ({ dispatch, digit }) => {
	return (
		<button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}>
			{digit}
		</button>
	)
}

export default DigitButton
