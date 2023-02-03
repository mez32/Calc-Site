import React, { useEffect, useState } from 'react'
import classes from './Header.module.css'

const getMql = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')

const getBrowserTheme = () => {
	const mql = getMql()
	return mql && mql.matches ? 'dark' : 'light'
}

const Header: React.FC = () => {
	const [theme, setTheme] = useState<string>('')

	const onClickHandler = () => {
		if (theme === 'dark') setTheme('light')
		if (theme === 'light') setTheme('dark')
	}

	useEffect(() => {
		if (theme == '') {
			setTheme(getBrowserTheme())
		}
	}, [])

	useEffect(() => {
		document.body.className = theme
	}, [theme])

	return (
		<header className={classes.header}>
			<h1>Px to REM</h1>
			<div className={classes.buttonWrapper}>
				<button className={classes.button} onClick={onClickHandler}>
					{theme === 'dark' ? (
						<svg xmlns='http://www.w3.org/2000/svg' height='24' width='24'>
							<path d='M12 21q-3.75 0-6.375-2.625T3 12q0-3.75 2.625-6.375T12 3q.35 0 .688.025.337.025.662.075-1.025.725-1.637 1.887Q11.1 6.15 11.1 7.5q0 2.25 1.575 3.825Q14.25 12.9 16.5 12.9q1.375 0 2.525-.613 1.15-.612 1.875-1.637.05.325.075.662Q21 11.65 21 12q0 3.75-2.625 6.375T12 21Zm0-2q2.2 0 3.95-1.212 1.75-1.213 2.55-3.163-.5.125-1 .2-.5.075-1 .075-3.075 0-5.238-2.162Q9.1 10.575 9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.162 2.55Q5 9.8 5 12q0 2.9 2.05 4.95Q9.1 19 12 19Zm-.25-6.75Z' />
						</svg>
					) : (
						<svg xmlns='http://www.w3.org/2000/svg' height='24' width='24'>
							<path d='M11 5V1h2v4Zm6.65 2.75-1.375-1.375 2.8-2.875 1.4 1.425ZM19 13v-2h4v2Zm-8 10v-4h2v4ZM6.35 7.7 3.5 4.925l1.425-1.4L7.75 6.35Zm12.7 12.8-2.775-2.875 1.35-1.35 2.85 2.75ZM1 13v-2h4v2Zm3.925 7.5-1.4-1.425 2.8-2.8.725.675.725.7ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Zm0-2q1.65 0 2.825-1.175Q16 13.65 16 12q0-1.65-1.175-2.825Q13.65 8 12 8q-1.65 0-2.825 1.175Q8 10.35 8 12q0 1.65 1.175 2.825Q10.35 16 12 16Zm0-4Z' />
						</svg>
					)}
				</button>
			</div>
		</header>
	)
}

export default Header
