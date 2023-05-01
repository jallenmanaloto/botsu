import { useState } from 'react'
import { useBotStore } from '../../utils/store'
import Modal from '@mui/material/Modal'
import { Box } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

export default function BotModal() {
	const { collection, viewBot, setViewBot, viewBotDetails, setViewBotDetails } =
		useBotStore()

	const [name, setName] = useState(viewBotDetails.name)
	const [description, setDescription] = useState(viewBotDetails.description)
	const [quirk, setQuirk] = useState(viewBotDetails.quirkName)
	return (
		<div>
			<Modal
				sx={{ position: 'absolute' }}
				open={viewBot}
				onClose={() => setViewBot(false)}>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '100vh',
					}}>
					<div className="w-[18%] h-1/3 flex flex-col justify-start items-center bg-slate-800 rounded-md relative">
						<CloseIcon
							onClick={() => setViewBot(false)}
							sx={{
								position: 'absolute',
								right: 10,
								top: 10,
								color: 'darkgray',
								cursor: 'pointer',
							}}
						/>
						<img
							className="h-20 w-20 mt-14 rounded-md"
							src={`https://api.dicebear.com/6.x/bottts-neutral/svg?seed=${viewBotDetails.styleName}`}
						/>
						<div className="flex items-center justify-start w-2/4 mt-10 h-10">
							<h2 className="text-slate-300 pr-3">Name</h2>
							<input
								className="flex-1 h-5/6 pl-4 bg-slate-700 rounded-md outline-none text-slate-400"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="flex items-center justify-start w-2/4 mt-3 h-10">
							<h2 className="text-slate-300 pr-3">Description</h2>
							<input
								className="flex-1 h-5/6 pl-4 bg-slate-700 rounded-md outline-none text-slate-400"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>
						</div>
						<div className="flex items-center justify-start w-2/4 mt-3 h-10">
							<h2 className="text-slate-300 pr-3">Quirk</h2>
							<input
								className="flex-1 h-5/6 pl-4 bg-slate-700 rounded-md outline-none text-slate-400"
								value={quirk}
								onChange={(e) => setQuirk(e.target.value)}
							/>
						</div>
						<div className="mt-14 w-full flex justify-around">
							<button className="text-xl text-slate-200 bg-blue-950 w-[33%] h-12 font-comme font-semibold border-2 border-blue-950 rounded-md">
								Save
							</button>
							<button className="text-xl text-slate-200 bg-red-950 w-[33%] h-12 font-comme font-semibold border-2 border-red-950 rounded-md">
								Delete
							</button>
						</div>
					</div>
				</Box>
			</Modal>
		</div>
	)
}
