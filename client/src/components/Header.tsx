import GitHubIcon from '@mui/icons-material/GitHub'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { useModeStore, useLoginStore } from '../utils/store'
import { useRef, useState } from 'react'
import { Menu, MenuItem, Paper } from '@mui/material'
import { useNavigate } from 'react-router'

export default function Header() {
	const { mode, setMode } = useModeStore()
	const { token, setToken, email } = useLoginStore()
	const handleChangeMode = (): void => {
		const newMode = mode === 'dark' ? 'light' : 'dark'
		setMode(newMode)
	}

	const [menu, setMenu] = useState(false)
	const anchor = useRef(null)
	const handleMenuToggle = () => {
		setMenu(!menu)
	}

	const navigate = useNavigate()
	const handleLogout = () => {
		setToken('')
		navigate('/signin')
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
						<>
							<div className="w-full p-5 flex items-center cursor-pointer">
								<h2>{email}</h2>
								<ArrowDropDownIcon
									ref={anchor}
									onClick={() => handleMenuToggle()}
									style={{ marginTop: 3 }}
								/>
								<Paper>
									<Menu
										anchorEl={anchor.current}
										open={menu}
										onClose={() => setMenu(!menu)}>
										<MenuItem>Profile</MenuItem>
										<MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
									</Menu>
								</Paper>
							</div>
						</>
					) : (
						''
					)}
				</div>
			</div>
		</div>
	)
}
