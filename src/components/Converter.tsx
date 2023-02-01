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
					<p className={classes.arrow}>{'<=>'}</p>
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
