import { useState } from 'react'
import { useBotStore } from '../../utils/store'
import Modal from '@mui/material/Modal'
import { Box } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import ReactLoading from 'react-loading'

const seeds = [
	'Nala',
	'Snuggles',
	'Samantha',
	'Oreo',
	'Gizmo',
	'Fluffy',
	'Socks',
	'Rocky',
	'Baby',
	'Tiger',
	'Jasmine',
	'Bear',
	'Ginger',
	'Snickers',
	'Sassy',
	'Sheba',
	'Buster',
	'Boots',
	'Lolas',
	'Pepper',
]

export default function CreateBotModal() {
	const { newBot, setNewBot } = useBotStore()
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [quirk, setQuirk] = useState('')
	const randomSeed = seeds[Math.floor(Math.random() * seeds.length)]

	return (
		<>
			<Modal
				sx={{ position: 'absolute' }}
				open={newBot}
				onClose={() => setNewBot(false)}>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '100vh',
					}}>
					<div className="w-[18%] h-1/3 flex flex-col justify-start items-center bg-slate-800 rounded-md relative">
						<CloseIcon
							onClick={() => setNewBot(false)}
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
							src={`https://api.dicebear.com/6.x/bottts-neutral/svg?seed=${randomSeed}`}
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
								disabled={true}
							/>
						</div>
						<div className="mt-14 w-full flex justify-around">
							<button className="text-xl text-slate-200 bg-blue-950 w-[33%] h-12 font-comme font-semibold border-2 border-blue-950 rounded-md">
								{/* {updateLoading ? <ReactLoading type="cylon" /> : 'Create'} */}
								Create
							</button>
						</div>
					</div>
				</Box>
			</Modal>
		</>
	)
}
