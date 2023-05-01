import { useBotStore } from '../../utils/store'
import BotDisplay from './BotDisplay'

export default function MyBots() {
	const { collection } = useBotStore()
	const botCollection = collection.map((bot) => {
		return <BotDisplay key={bot.id} botData={bot} command="View" />
	})

	return (
		<div className="w-8/12">
			<div className="border-2 border-slate-800 h-14 w-40 mt-4 rounded-md text-slate-700 flex justify-center items-center cursor-pointer">
				<h2 className="text-xl">+&nbsp;</h2>
				<h2 className="text-xl"> Add a bot</h2>
			</div>
			<div className="grid grid-rows-3 grid-cols-3 place-items-center mt-8 gap-y-8">
				{botCollection}
			</div>
		</div>
	)
}
