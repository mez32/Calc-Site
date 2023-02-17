import React, { useReducer } from 'react'
import { ACTIONS, reducer } from '../reducers/calcReducer'
import DigitButton from './DigitButton'
import OperationButton from './OperationButton'

import classes from './Calculator.module.css'

const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
	maximumFractionDigits: 0,
})

const formatOperand = (operand: string | null | undefined) => {
	if (operand == null) return

	if (operand === '-') return operand

	const [integer, decimal] = operand.split('.')

	if (decimal == null) return INTEGER_FORMATTER.format(Number(integer))

	if (decimal.length > 6) {
		const formattedDecimal = decimal.slice(0, 6)
		return `${INTEGER_FORMATTER.format(Number(integer))}.${formattedDecimal}`
	}

	return `${INTEGER_FORMATTER.format(Number(integer))}.${decimal}`
}

const Calculator: React.FC = () => {
	const [{ previousOperand, currentOperand, operation }, dispatch] = useReducer(reducer, {})

	return (
		<div className={classes.calcBody}>
			<div className={classes.calcGrid}>
				<div className={classes.output}>
					<div className={classes.prevOp}>
						{formatOperand(previousOperand)} {operation}
					</div>
					<div className={classes.currOp}>{formatOperand(currentOperand)}</div>
				</div>
				<button className={classes.spanTwo} onClick={() => dispatch({ type: ACTIONS.CLEAR })}>
					AC
				</button>
				<button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>DEL</button>
				<OperationButton operation='/' dispatch={dispatch} />
				<DigitButton digit='1' dispatch={dispatch} />
				<DigitButton digit='2' dispatch={dispatch} />
				<DigitButton digit='3' dispatch={dispatch} />
				<OperationButton operation='*' dispatch={dispatch} />
				<DigitButton digit='4' dispatch={dispatch} />
				<DigitButton digit='5' dispatch={dispatch} />
				<DigitButton digit='6' dispatch={dispatch} />
				<OperationButton operation='+' dispatch={dispatch} />
				<DigitButton digit='7' dispatch={dispatch} />
				<DigitButton digit='8' dispatch={dispatch} />
				<DigitButton digit='9' dispatch={dispatch} />
				<OperationButton operation='-' dispatch={dispatch} />
				<DigitButton digit='.' dispatch={dispatch} />
				<DigitButton digit='0' dispatch={dispatch} />
				<button className={classes.spanTwo} onClick={() => dispatch({ type: ACTIONS.EVALUATE })}>
					=
				</button>
			</div>
		</div>
	)
}

export default Calculator
