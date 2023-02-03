import React, { useEffect, useState } from 'react'

import classes from './Converter.module.css'

const Converter: React.FC = () => {
	const [px, setPx] = useState<number>(16)
	const [rem, setRem] = useState<number>(1)
	const [root, setRoot] = useState<number>(16)

	const convertPx = (px: number): void => {
		setRem(px / root)
		setPx(px)
	}

	const convertRem = (rem: number): void => {
		setPx(rem * root)
		setRem(rem)
	}

	useEffect(() => {
		convertRem(rem)
	}, [root])

	return (
		<>
			<div className={classes.converterWrapper}>
				<div className={classes.inputGroup__main}>
					<div className={classes.inputGroup}>
						<label className={classes.label} htmlFor='px'>
							Px
						</label>
						<input
							className={classes.input}
							id='px'
							type='number'
							value={px || ''}
							onChange={(e) => convertPx(parseFloat(e.target.value))}
						/>
					</div>
					<div className={classes.arrowWrapper}>
						<svg
							className={classes.arrow}
							xmlns='http://www.w3.org/2000/svg'
							height='48'
							width='48'
						>
							<path d='M13.55 42 4 32.45l9.6-9.6 2.1 2.1-6 6h32.45v3H9.7l5.95 5.95Zm20.9-16.85-2.1-2.1 5.95-5.95H5.85v-3H38.3l-6-6L34.4 6l9.6 9.6Z' />
						</svg>
					</div>

					<div className={classes.inputGroup}>
						<label className={classes.label} htmlFor='rem'>
							REM
						</label>
						<input
							className={classes.input}
							id='rem'
							type='number'
							value={rem || ''}
							onChange={(e) => convertRem(parseFloat(e.target.value))}
						/>
					</div>
				</div>
				<div className={classes.convertValue}>
					<p>
						Root font size:{' '}
						<input
							type='number'
							value={root}
							onChange={(e) => setRoot(parseFloat(e.target.value))}
							className={classes.rootInput}
						/>{' '}
						pixels. Default is 16px.
					</p>
				</div>
			</div>
		</>
	)
}

export default Converter
