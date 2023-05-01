import { useLoginStore, useNavigationStore } from '../../utils/store'
import MyBots from '../bots/MyBots'
import Collection from './Collection'
import CreateBotModal from '../bots/CreateBotModal'

export default function Space() {
	const { name } = useLoginStore()
	const { activeNav } = useNavigationStore()

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
