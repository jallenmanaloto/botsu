import { useState } from 'react'
import {
	QuirkData,
	useBotStore,
	useLoginStore,
	useModeStore,
	useQuirkStore,
} from '../../utils/store'
import Modal from '@mui/material/Modal'
import { Box } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useMutation } from 'react-query'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

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
	const { mode } = useModeStore()
	const { newBot, setNewBot } = useBotStore()
	const { id, token } = useLoginStore()
	const { quirks } = useQuirkStore()
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const randomSeed = seeds[Math.floor(Math.random() * seeds.length)]
	const randomQuirk: QuirkData =
		quirks[Math.floor(Math.random() * quirks.length)]

	const botData = {
		userId: id,
		name: name,
		description: description,
		styleName: randomSeed,
		quirkName: randomQuirk?.name,
		quirkFlag: randomQuirk?.flag,
		quirkId: randomQuirk?.id,
	}

	const url = import.meta.env.VITE_ALL_BOTS_URL
	const { mutate } = useMutation({
		mutationFn: async () => {
			axios.post(url, botData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
		},

		onSuccess: () => {
			setName('')
			setDescription('')
			setNewBot(false)
			toast.success('Successfully created a new bot', {
				duration: 5000,
				position: 'top-center',
				style: {
					backgroundColor: mode === 'dark' ? 'rgb(3 7 18)' : '',
					color: mode === 'dark' ? 'white' : '',
					width: '450px',
				},
			})
		},
	})

	const handleCreateBot = (e: React.MouseEvent) => {
		e.preventDefault()
		mutate()
	}

	return (
		<>
			<Toaster />
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
								value="A randome one for you"
								disabled={true}
							/>
						</div>
						<div className="mt-14 w-full flex justify-around">
							<button
								onClick={(e) => handleCreateBot(e)}
								className="text-xl text-slate-200 bg-blue-950 w-[33%] h-12 font-comme font-semibold border-2 border-blue-950 rounded-md">
								Create
							</button>
						</div>
					</div>
				</Box>
			</Modal>
		</>
	)
}
