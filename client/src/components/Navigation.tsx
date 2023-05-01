import HomeIcon from '@mui/icons-material/Home'
import SmartToyIcon from '@mui/icons-material/SmartToy'

function MobileNavigation() {
	return (
		<div className="md:hidden sm:block fixed bottom-0 left-0 w-full h-20 flex justify-center border-2 border-slate-800">
			<div className="flex justify-between items-center w-36 h-full mx-auto">
				<HomeIcon style={{ width: '3rem', height: '3rem' }} />
				<SmartToyIcon style={{ width: '3rem', height: '3rem' }} />
			</div>
		</div>
	)
}

function NormalSizeNavigation() {
	return (
		<div className="hidden md:block h-full px-6 pt-28">
			<div className="flex justify-start items-center w-28 cursor-pointer">
				<HomeIcon style={{ width: '2.15rem', height: '2.15rem' }} />
				<h2 className="text-2xl font-comme pl-7 font-thin">Home</h2>
			</div>
			<div className="flex justify-start items-center w-28 cursor-pointer pt-10">
				<SmartToyIcon style={{ width: '2.15rem', height: '2.15rem' }} />
				<h2 className="text-2xl font-comme pl-7 font-thin">Bots</h2>
			</div>
		</div>
	)
}

export default function Navigation() {
	return (
		<div className="md:w-80">
			<MobileNavigation />
			<NormalSizeNavigation />
		</div>
	)
}
