import GitHubIcon from '@mui/icons-material/GitHub'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { useModeStore, useLoginStore } from '../utils/store'

export default function Header() {
	const { mode, setMode } = useModeStore()
	const { token, email } = useLoginStore()
	const handleChangeMode = (): void => {
		const newMode = mode === 'dark' ? 'light' : 'dark'
		setMode(newMode)
	}

	const openGithub = (): void => {
		window.open('https://github.com/jallenmanaloto/botsu', '_blank')
	}

	return (
		<div className="container lg py-12 h-14 w-full text-lg flex justify-between items-center">
			<h1 className="p-5 text-5xl font-comfortaa font-semibold">Botsu</h1>
			<div className="flex items-center">
				<div>
					<GitHubIcon
						onClick={() => openGithub()}
						className="cursor-pointer w-7 h-7 mr-2"
					/>
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
				<div>
					{token ? (
						<div className="w-full p-5 flex items-center cursor-pointer">
							<h2>{email}</h2>
							<ArrowDropDownIcon style={{ marginTop: 3 }} />
						</div>
					) : (
						''
					)}
				</div>
			</div>
		</div>
	)
}

{
	/* <div className="w-18 p-5 flex justify-around items-center">
					<GitHubIcon
						onClick={() => openGithub()}
						className="cursor-pointer w-7 h-7 mr-2"
					/>
					{mode === 'dark' ? (
						<DarkModeIcon
							onClick={() => handleChangeMode()}
							className="cursor-pointer w-7 h-7 mr-2"
						/>
					) : (
						<LightModeIcon
							onClick={() => handleChangeMode()}
							className="cursor-pointer w-7 h-7 mr-2"
						/>
					)}
				</div>
				<div className="w-28 ">
					{token ? (
						<div className="w-full p-5 flex justify-around items-center cursor-pointer">
							<h2 className="mr-1">{email}</h2>
							<ArrowDropDownIcon />
						</div>
					) : (
						''
					)}
				</div> */
}
