import { useLoginStore } from '../utils/store'

export default function Space() {
	const { name } = useLoginStore()
	return (
		<div className="flex-1">
			<div className=" w-5/6 pt-28 text">
				<h2 className="text-6xl font-semibold font-comme">{name}'s Space</h2>
				<p className="font-comme text-lg mt-10 pb-8 w-3/4 leading-8 border-b-2 border-slate-400">
					Welcome, this is your bot space where you can interact with various
					bots that you own. Remember, be nice to them!
				</p>
			</div>
		</div>
	)
}
