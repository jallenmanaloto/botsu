import { useState, useEffect } from 'react'
import { useBotStore, useLoginStore } from '../../utils/store'
import Modal from '@mui/material/Modal'
import { Box } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import axios from 'axios'
import { useMutation, useQuery } from 'react-query'
import ReactLoading from 'react-loading'

export default function BotModal() {
	const { viewBot, setViewBot, viewBotDetails } = useBotStore()
	const { id, token } = useLoginStore()

	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [quirk, setQuirk] = useState('')

	useEffect(() => {
		if (viewBotDetails) {
			setName(viewBotDetails.name)
			setDescription(viewBotDetails.description)
			setQuirk(viewBotDetails.quirkName)
		}
	}, [viewBotDetails])
	console.log(viewBotDetails.name)
	const baseUrl = import.meta.env.VITE_ALL_BOTS_URL
	const url = `${baseUrl}/${viewBotDetails.id}`

	const { mutate: deleteBot, isLoading: deleteLoading } = useMutation({
		mutationFn: async () => {
			axios.delete(url, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
		},
		onSuccess: () => setViewBot(false),
	})

	const updateBotData = {
		name: name,
		description: description,
	}

	const { mutate: updateBot, isLoading: updateLoading } = useMutation({
		mutationFn: async () => {
			axios.patch(url, updateBotData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
		},
		onSuccess: () => {
			setViewBot(false)
		},
	})

	const handleDeleteBot = (e: React.MouseEvent) => {
		e.preventDefault()
		deleteBot()
	}

	const handleUpdateBot = (e: React.MouseEvent) => {
		e.preventDefault()
		updateBot()
	}

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
								value={name === '' ? viewBotDetails.name : name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="flex items-center justify-start w-2/4 mt-3 h-10">
							<h2 className="text-slate-300 pr-3">Description</h2>
							<input
								className="flex-1 h-5/6 pl-4 bg-slate-700 rounded-md outline-none text-slate-400"
								value={
									description === '' ? viewBotDetails.description : description
								}
								onChange={(e) => setDescription(e.target.value)}
							/>
						</div>
						<div className="flex items-center justify-start w-2/4 mt-3 h-10">
							<h2 className="text-slate-300 pr-3">Quirk</h2>
							<input
								className="flex-1 h-5/6 pl-4 bg-slate-700 rounded-md outline-none text-slate-400"
								value={quirk === '' ? viewBotDetails.quirkName : quirk}
								onChange={(e) => setQuirk(e.target.value)}
								disabled={true}
							/>
						</div>
						<div className="mt-14 w-full flex justify-around">
							<button
								onClick={(e) => handleUpdateBot(e)}
								className="text-xl text-slate-200 bg-blue-950 w-[33%] h-12 font-comme font-semibold border-2 border-blue-950 rounded-md">
								{updateLoading ? <ReactLoading type="cylon" /> : 'Save'}
							</button>
							<button
								onClick={(e) => handleDeleteBot(e)}
								className="text-xl text-slate-200 bg-red-950 w-[33%] h-12 font-comme font-semibold border-2 border-red-950 rounded-md">
								{deleteLoading ? <ReactLoading type="cylon" /> : 'Delete'}
							</button>
						</div>
					</div>
				</Box>
			</Modal>
		</div>
	)
}
