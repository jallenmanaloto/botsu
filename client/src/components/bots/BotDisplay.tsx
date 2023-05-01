import { useState } from 'react'
import {
	BotData,
	useModeStore,
	useLoginStore,
	useBotStore,
} from '../../utils/store'
import { useQuery } from 'react-query'
import axios from 'axios'
import ReactLoading from 'react-loading'

export default function BotDisplay({
	botData,
	command,
}: {
	botData: BotData
	command: string
}) {
	const { mode } = useModeStore()
	const { token } = useLoginStore()
	const { setViewBot, setViewBotDetails, viewBotDetails } = useBotStore()
	const [quirk, setQuirk] = useState('')
	const [activeStyleName, setActiveStyleName] = useState('')
	const baseUrl = import.meta.env.VITE_GET_QUIRK
	const requestUrl = `${baseUrl}/${botData.quirkFlag}`

	const { data, refetch, isFetching } = useQuery({
		queryKey: ['botQuirk'],
		queryFn: async () => {
			const { data } = await axios(requestUrl, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})

			return data
		},
		refetchOnWindowFocus: false,
		enabled: false,
		onSuccess: () => {
			setQuirk(data as string)
		},
	})
	const handleQuirk = () => {
		refetch()
		setActiveStyleName(botData.styleName)

		setTimeout(() => {
			setQuirk('')
		}, 5000)
	}

	const handleView = () => {
		setViewBot(true)
		setViewBotDetails({
			name: botData.name,
			description: botData.description,
			id: botData.id,
			quirkFlag: botData.quirkFlag,
			quirkName: botData.quirkName,
			styleName: botData.styleName,
		})
	}

	return (
		<div
			className={`w-5/6 h-60 bg-slate-800 rounded-lg flex flex-col items-center ${
				mode === 'dark' ? '' : 'bg-slate-300'
			}`}>
			<img
				className="h-16 w-16 mt-4 rounded-md"
				src={`https://api.dicebear.com/6.x/bottts-neutral/svg?seed=${botData.styleName}`}
			/>
			<div
				className={`text-xl mt-6 font-semibold font-comme ${
					mode === 'dark' ? 'text-slate-400' : ''
				}`}>
				{botData.name}
			</div>
			<div
				className={`text-sm pt-1 font-semibold font-comme ${
					mode === 'dark' ? 'text-slate-400' : ''
				}`}>
				{botData.quirkName}
			</div>
			<div
				onClick={command === 'Use' ? () => handleQuirk() : () => handleView()}
				className={`h-10 w-10/12 mt-4 font-semibold font-comme flex justify-center items-center text-lg rounded-md border-2  cursor-pointer ${
					mode === 'dark'
						? 'border-slate-500 text-slate-400'
						: 'border-black text-black'
				}`}>
				{activeStyleName === botData.styleName && isFetching ? (
					<ReactLoading type="cylon" />
				) : (
					command
				)}
			</div>
			{activeStyleName === botData.styleName && quirk}
		</div>
	)
}
