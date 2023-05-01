import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import { useLoginStore } from './utils/store'
import NotFound from './pages/NotFound'

function App() {
	const { token } = useLoginStore()

	return (
		<Routes>
			<Route path="/signin" element={<SignIn />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/" element={token ? <Home /> : <Navigate to="/signin" />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}

export default App
