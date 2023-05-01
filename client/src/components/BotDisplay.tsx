import { BotData, useModeStore } from '../utils/store'

export default function BotDisplay({ botData }: { botData: BotData }) {
	const { mode } = useModeStore()
	const handleQuirk = () => {}
	return (
		<div
			className={`w-5/6 h-60 bg-slate-800 rounded-lg flex flex-col items-center ${
				mode === 'dark' ? '' : 'bg-slate-300'
			}`}>
			<img
				className="h-24 w-24 mt-4 rounded-md"
				src={`https://api.dicebear.com/6.x/bottts-neutral/svg?seed=${botData.styleName}`}
			/>
			<div
				className={`text-xl pt-5 font-semibold font-comme ${
					mode === 'dark' ? 'text-slate-400' : ''
				}`}>
				{botData.name}
			</div>
			<div
				className={`h-10 w-10/12 mt-4 font-semibold font-comme flex justify-center items-center text-lg rounded-md border-2  cursor-pointer ${
					mode === 'dark'
						? 'border-slate-500 text-slate-400'
						: 'border-black text-black'
				}`}>
				Use
			</div>
		</div>
	)
}
