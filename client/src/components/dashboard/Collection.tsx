import { useQuery } from 'react-query'
import axios from 'axios'
import {
	useLoginStore,
	useBotStore,
	usePaginationStore,
} from '../../utils/store'
import BotDisplay from '../bots/BotDisplay'

export default function Collection() {
	const { id, token } = useLoginStore()
	const { collection, setCollection } = useBotStore()
	const { setCurrentPage, setTotal, setLastPage } = usePaginationStore()

	const url = import.meta.env.VITE_ALL_BOTS_URL
	const params = {
		userId: id,
		limit: 6,
		page: 1,
	}

	useQuery({
		queryFn: async () => {
			await axios
				.get(url, {
					headers: { Authorization: `Bearer ${token}` },
					params: params,
				})
				.then((res) => {
					setCollection(res.data.data)
					setCurrentPage(res.data.currentPage)
					setTotal(res.data.total)
					setLastPage(res.data.lastPage)
				})
		},
	})

	const botCollection = collection.map((bot) => {
		return <BotDisplay key={bot.id} botData={bot} command="Use" />
	})

	return (
		<>
			{collection.length < 1 ? (
				<div className="border-2 border-slate-800 h-20 w-72 mt-10 rounded-md text-slate-700 flex justify-center items-center cursor-pointer">
					<h2 className="text-xl">+&nbsp;</h2>
					<h2 className="text-xl"> Add a bot</h2>
				</div>
			) : (
				<div className="w-8/12">
					<div className="grid grid-rows-3 grid-cols-3 place-items-center mt-8 gap-y-8">
						{botCollection}
					</div>
				</div>
			)}
		</>
	)
}
