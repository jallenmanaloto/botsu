import { useModeStore } from '../utils/store'

export default function Login() {
	const { mode } = useModeStore()

	return (
		<div className="container lg h-full text-lg flex justify-center items-center">
			<div className="flex flex-col pt-24 items-center w-10/12 h-3/4 md:h-5/6 md:w-5/6 lg:h-2/3 lg:w-4/6 xl:h-2/3 xl:w-7/12 2xl:h-2/3 2xl:w-5/12">
				<h2 className="text-4xl font-semibold font-comme py-4">Sign in</h2>
				<input
					className={`w-full h-20 my-4 pl-5 rounded-lg outline-none xs:max-mdtext-sm lg:text-xl font-comme ${
						mode === 'dark'
							? 'bg-gray-700 text-white placeholder-white'
							: 'border-2 border-b-slate-200'
					}`}
					placeholder="Email"
				/>
				<input
					className={`w-full h-20 my-4 pl-5 rounded-lg outline-none xs:max-mdtext-sm lg:text-xl font-comme ${
						mode === 'dark'
							? 'bg-gray-700 text-white placeholder-white'
							: 'border-2 border-b-slate-200'
					}`}
					placeholder="Password"
				/>
				<button
					className={`w-full h-20 my-4 bg-gray-800 rounded-lg text-xl font-semibold font-comme ${
						mode === 'dark'
							? 'text-slate-100 hover:bg-blue-950 bg-blue-900'
							: 'text-white hover:bg-gray-900 bg-slate-800'
					}`}>
					Sign in
				</button>
			</div>
		</div>
	)
}
