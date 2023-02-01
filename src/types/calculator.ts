export interface State {
	currentOperand?: string | null
	previousOperand?: string | null
	operation?: string | null
	overwrite?: boolean | null
}

export interface Action {
	type: string
	payload?: {
		digit?: string
		operation?: string
	}
}
