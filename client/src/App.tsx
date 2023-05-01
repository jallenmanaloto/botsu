import './App.css'
import Login from './pages/Login'
import Header from './components/Header'
import { useModeStore } from './utils/store'

function App() {
	const { mode } = useModeStore()
	return (
		<div
			className={`w-screen h-screen ${
				mode === 'dark'
					? 'bg-slate-900 text-white'
					: 'bg-slate-50 text-slate-900'
			}  flex justify-center`}>
			<div className="container xl flex flex-col">
				<Header />
				<Login />
			</div>
		</div>
	)
}

export default App
