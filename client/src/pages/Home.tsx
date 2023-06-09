import { useModeStore } from '../utils/store'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Space from '../components/dashboard/Space'

export default function Home() {
	const { mode } = useModeStore()

	return (
		<>
			<div
				className={`w-screen h-screen ${
					mode === 'dark'
						? 'bg-slate-900 text-white'
						: 'bg-slate-100 text-gray-700'
				}  flex justify-center`}>
				<div className="container lg">
					<Header />
					<div className="flex h-5/6 sm:justify-center">
						<Navigation />
						<Space />
					</div>
				</div>
			</div>
		</>
	)
}
