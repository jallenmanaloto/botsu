import GitHubIcon from '@mui/icons-material/GitHub'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { useModeStore } from '../utils/store'

export default function Header() {
	const { mode, setMode } = useModeStore()
	const handleChangeMode = () => {
		const newMode = mode === 'dark' ? 'light' : 'dark'
		setMode(newMode)
	}

	return (
		<div className="container lg text-lg flex justify-between">
			<h1 className="p-5 text-5xl font-comfortaa font-semibold">Botsu</h1>
			<div className="w-28 p-5 flex justify-around items-center">
				<GitHubIcon className="cursor-pointer w-7 h-7" />
				{mode === 'dark' ? (
					<DarkModeIcon
						onClick={() => handleChangeMode()}
						className="cursor-pointer w-7 h-7"
					/>
				) : (
					<LightModeIcon
						onClick={() => handleChangeMode()}
						className="cursor-pointer w-7 h-7"
					/>
				)}
			</div>
		</div>
	)
}
