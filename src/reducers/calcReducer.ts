import { Action, State } from '../types/calculator'

export const ACTIONS = {
	ADD_DIGIT: 'add-digit',
	CHOOSE_OPERATION: 'choose-operation',
	CLEAR: 'clear',
	DELETE_DIGIT: 'delete-digit',
	EVALUATE: 'evaluatte',
}

const evaluate = ({ currentOperand, previousOperand, operation }: State): string => {
	const prev = parseFloat(previousOperand!)
	const curr = parseFloat(currentOperand!)

	if (isNaN(prev) || isNaN(curr)) return ''

	let computation: number = 0
	switch (operation) {
		case '+':
			computation = prev + curr
			break
		case '-':
			computation = prev - curr
			break
		case '*':
			computation = prev * curr
			break
		case '/':
			computation = prev / curr
			break
	}

	return computation.toString()
}

export const reducer = (state: State, { type, payload }: Action): State => {
	switch (type) {
		case ACTIONS.ADD_DIGIT:
			if (state.overwrite && state.currentOperand === '-') {
				return {
					...state,
					currentOperand: `${state.currentOperand}${payload?.digit}`,
					overwrite: false,
				}
			}

			if (state.overwrite) {
				return {
					...state,
					currentOperand: payload?.digit,
					overwrite: false,
				}
			}

			if (payload?.digit === '0' && state.currentOperand === '0') return state

			if (payload?.digit === '.' && state.currentOperand?.includes('.')) return state

			return {
				...state,
				currentOperand: `${state.currentOperand || ''}${payload?.digit}`,
			}

		case ACTIONS.CLEAR:
			return {}

		case ACTIONS.CHOOSE_OPERATION:
			if (payload?.operation === '-' && state.currentOperand == null) {
				return {
					...state,
					currentOperand: '-',
				}
			}

			if (state.currentOperand == null && state.previousOperand == null) return state

			if (state.currentOperand == null) {
				return {
					...state,
					operation: payload?.operation,
				}
			}

			if (state.previousOperand == null) {
				return {
					...state,
					operation: payload?.operation,
					previousOperand: state.currentOperand,
					currentOperand: null,
				}
			}

			return {
				...state,
				previousOperand: evaluate(state),
				currentOperand: null,
				operation: payload?.operation,
			}

		case ACTIONS.DELETE_DIGIT:
			if (state.overwrite) {
				return {
					...state,
					overwrite: false,
					currentOperand: null,
				}
			}

			if (state.currentOperand == null) return state

			if (state.currentOperand.length === 1) {
				return {
					...state,
					currentOperand: null,
				}
			}

			return {
				...state,
				currentOperand: state.currentOperand.slice(0, -1),
			}

		case ACTIONS.EVALUATE:
			if (state.operation == null || state.currentOperand == null || state.previousOperand == null)
				return state

			return {
				...state,
				overwrite: true,
				operation: null,
				previousOperand: null,
				currentOperand: evaluate(state),
			}

		default:
			return state
	}
}
