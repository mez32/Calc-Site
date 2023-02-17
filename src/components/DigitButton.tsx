import React from 'react'
import { ACTIONS } from '../reducers/calcReducer'
import { Props } from '../types/digitButton'

const DigitButton: React.FC<Props> = ({ dispatch, digit }) => {
	return (
		<button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}>
			{digit}
		</button>
	)
}

export default DigitButton
