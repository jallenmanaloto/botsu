import { useModeStore } from '../utils/store'
import { useState } from 'react'
import axios from 'axios'
import { useMutation } from 'react-query'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import z, { ZodError } from 'zod'
import toast, { Toaster } from 'react-hot-toast'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import ReactLoading from 'react-loading'

const signUpSchema = z.object({
	email: z.string().email('Not a valid email').min(1, "Email can't be empty"),
	name: z.string().min(1, "Name can't be empty"),
	password: z
		.string()
		.min(8, 'Password must be at least 8 characters long')
		.regex(
			/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
			'Password must contain at least one letter, one number, and one special character'
		)
		.min(1, "Password can't be empty"),
})

export default function SignUpForm() {
	const { mode } = useModeStore()
	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	const [visible, setVisible] = useState(false)
	const navigate = useNavigate()

	const signUpData = {
		email: email,
		name: name,
		password: password,
	}

	const config = {
		method: 'POST',
		url: import.meta.env.VITE_SIGNUP_URL,
		data: signUpData,
	}

	const { mutate, isLoading, isSuccess } = useMutation({
		mutationFn: async () => await axios(config),
		onSuccess: () => {
			toast.success('Successfully created your account!')
			setEmail('')
			setName('')
			setPassword('')
		},
	})

	const handleSignUp = async (e: React.MouseEvent) => {
		e.preventDefault()
		try {
			signUpSchema.parse(signUpData)
			mutate()

			if (isSuccess) {
				setTimeout(() => {
					navigate('/signin')
				}, 3500)
			}
		} catch (error) {
			if (error instanceof ZodError) {
				error.errors.forEach((err) => {
					toast.error(err.message, {
						duration: 5000,
						position: 'top-center',
						style: {
							backgroundColor: mode === 'dark' ? 'rgb(3 7 18)' : '',
							color: mode === 'dark' ? 'white' : '',
							width: '450px',
						},
					})
				})
			}
		}
	}

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			try {
				e.preventDefault()
				signUpSchema.parse(signUpData)
				mutate()

				if (isSuccess) {
					setTimeout(() => {
						navigate('/signin')
					}, 3500)
				}
			} catch (error) {
				if (error instanceof ZodError) {
					error.errors.forEach((err) => {
						toast.error(err.message, {
							duration: 5000,
							position: 'top-center',
							style: {
								backgroundColor: mode === 'dark' ? 'rgb(3 7 18)' : '',
								color: mode === 'dark' ? 'white' : '',
								width: '450px',
							},
						})
					})
				}
			}
		}
	}

	return (
		<div className="container lg h-full text-lg flex justify-center items-center">
			<Toaster containerClassName="react-hot-toast-container" />
			<div className="flex flex-col pt-24 items-center w-10/12 h-3/4 md:h-5/6 md:w-5/6 lg:h-2/3 lg:w-4/6 xl:h-2/3 xl:w-7/12 2xl:h-2/3 2xl:w-5/12">
				<h2 className="text-4xl font-semibold font-comme py-4">Sign me up</h2>
				<input
					onChange={(e) => setEmail(e.target.value)}
					onKeyDown={(e) => handleKeyDown(e)}
					value={email}
					className={`w-full h-20 my-4 pl-5 rounded-lg outline-none xs:max-mdtext-sm lg:text-xl font-comme ${
						mode === 'dark'
							? 'bg-gray-700 text-white placeholder-slate-500'
							: 'border-2 border-b-slate-200'
					}`}
					placeholder="Email"
				/>
				<input
					onChange={(e) => setName(e.target.value)}
					onKeyDown={(e) => handleKeyDown(e)}
					value={name}
					className={`w-full h-20 my-4 pl-5 rounded-lg outline-none xs:max-mdtext-sm lg:text-xl font-comme ${
						mode === 'dark'
							? 'bg-gray-700 text-white placeholder-slate-500'
							: 'border-2 border-b-slate-200'
					}`}
					placeholder="Name"
				/>
				<div className="w-full relative h-20 my-4 rounded-lg ">
					<input
						onChange={(e) => setPassword(e.target.value)}
						onKeyDown={(e) => handleKeyDown(e)}
						value={password}
						className={`w-full h-20 pl-5 rounded-lg outline-none xs:max-mdtext-sm lg:text-xl font-comme ${
							mode === 'dark'
								? 'bg-gray-700 text-white placeholder-slate-500'
								: 'border-2 border-b-slate-200'
						}`}
						placeholder="Password"
						type={`${visible ? 'text' : 'password'}`}
					/>
					{visible ? (
						<VisibilityIcon
							onClick={() => setVisible(!visible)}
							className="absolute right-5 top-1/2 transform -translate-y-1/2 text-slate-500 cursor-pointer"
						/>
					) : (
						<VisibilityOffIcon
							onClick={() => setVisible(!visible)}
							className="absolute right-5 top-1/2 transform -translate-y-1/2 text-slate-500 cursor-pointer"
						/>
					)}
				</div>
				<div className="w-full my-4 relative">
					<button
						onClick={(e) => handleSignUp(e)}
						className={`w-full h-20 bg-gray-800 rounded-lg text-xl font-semibold font-comme outline-none ${
							mode === 'dark'
								? 'text-slate-100 hover:bg-blue-950 bg-blue-900'
								: 'text-white hover:bg-gray-900 bg-slate-800'
						}`}>
						{`${isLoading ? '' : 'Sign up'}`}
					</button>
					{isLoading ? (
						<ReactLoading
							type="spin"
							className="absolute top-6 left-1/2 transform -translate-x-1/2 h-2 w-2"
							height={'5%'}
							width={'5%'}
						/>
					) : (
						''
					)}
				</div>
				<div className="w-full flex text-center justify-center text-md font-comme">
					<p>Already have an account?&nbsp;</p>
					<Link to="/signin">Log in</Link>
				</div>
			</div>
		</div>
	)
}
