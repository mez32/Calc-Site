import React from 'react'
import Header from './components/Header'
import Calculator from './components/Calculator'
import Converter from './components/Converter'

import classes from './App.module.css'

const App: React.FC = () => {
	return (
		<>
			<Header />
			<div className={classes.bodyWrapper}>
				<Converter />
			</div>
			<div className={classes.bodyWrapper}>
				<Calculator />
			</div>
		</>
	)
}

export default App
