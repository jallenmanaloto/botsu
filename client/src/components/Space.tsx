import { useLoginStore } from '../utils/store'
import Collection from './Collection'

export default function Space() {
	const { name } = useLoginStore()
	return (
		<div className="md:flex-1">
			<div className="md:w-5/6 pt-28 text">
				<h2 className="sm:pl-2 text-6xl font-semibold font-comme">
					{name}'s Space
				</h2>
				<p className="sm:pl-2 font-comme text-lg mt-10 pb-8 sm:h-full md:w-4/5 leading-8 border-b-2 border-slate-400">
					Welcome, this is your bot space where you can interact with various
					bots that you own. Remember, be nice to them!
				</p>
			</div>
			<Collection />
		</div>
	)
}
