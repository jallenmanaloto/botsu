import { useQuery } from 'react-query'
import axios from 'axios'
import { useLoginStore, useBotStore, usePaginationStore } from '../utils/store'
import BotDisplay from './BotDisplay'

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
		return <BotDisplay key={bot.id} botData={bot} />
	})

	return (
		<div className="w-8/12">
			<div className="grid grid-rows-3 grid-cols-3 place-items-center mt-8 gap-y-8">
				{botCollection}
			</div>
		</div>
	)
}
