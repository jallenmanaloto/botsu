import {
	useLoginStore,
	useNavigationStore,
	useQuirkStore,
} from '../../utils/store'
import MyBots from '../bots/MyBots'
import Collection from './Collection'
import CreateBotModal from '../bots/CreateBotModal'
import { useQuery } from 'react-query'
import axios from 'axios'

export default function Space() {
	const { name, token } = useLoginStore()
	const { activeNav } = useNavigationStore()
	const { setQuirks } = useQuirkStore()

	const url = import.meta.env.VITE_GET_QUIRK
	useQuery({
		queryFn: async () => {
			await axios
				.get(url, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then((res) => setQuirks(res.data))
		},
	})

	return (
		<>
			<CreateBotModal />
			{activeNav === 'home' ? (
				<div className="md:flex-1">
					<div className="md:w-5/6 pt-28 text">
						<h2 className="sm:pl-2 text-6xl font-semibold font-comme">
							{name}'s Space
						</h2>
						<p className="sm:pl-2 font-comme text-lg mt-10 pb-8 sm:h-full md:w-4/5 leading-8 border-b-2 border-slate-400">
							Welcome, this is your bot space where you can interact with
							various bots that you own. Remember, be nice to them!
						</p>
					</div>
					<Collection />
				</div>
			) : (
				<div className="md:flex-1">
					<div className="md:w-5/6 pt-28 text">
						<h2 className="sm:pl-2 text-6xl font-semibold font-comme">
							{name}'s bots
						</h2>
						<p className="sm:pl-2 font-comme text-lg mt-10 pb-8 sm:h-full md:w-4/5 leading-8 border-b-2 border-slate-400">
							In here, you can create, view or throw away your bots.
						</p>
					</div>
					<MyBots />
				</div>
			)}
		</>
	)
}
