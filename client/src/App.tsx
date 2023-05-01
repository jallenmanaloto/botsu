import './App.css'
import Sign from './pages/Sign'
import { Routes, Route, Link } from 'react-router-dom'
import Login from './components/Login'

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Sign />} />
				<Route path="/signin" element={<Login />} />
			</Routes>
		</>
	)
}

export default App
