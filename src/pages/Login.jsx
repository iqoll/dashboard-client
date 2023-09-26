import { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useLogin } from '../hooks/useLogin'

function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { login, error, isLoading } = useLogin()

	const handleSubmit = async (e) => {
		e.preventDefault()

		await login(email, password)

		// 	try {
		// 		const response = await axios.post(
		// 			'http://localhost:5000/users/login',
		// 			userData
		// 		)

		// 		if (response.data) {
		// 			localStorage.setItem('user', JSON.stringify(response.data))
		// 		}

		// 		return response.data
		// 	} catch (error) {
		// 		throw error
		// 	}
	}

	return (
		<>
			<section className='flex flex-col items-center text-2xl font-bold my-12 px-0 py-4'>
				<h1 className='flex flex-col justify-center items-center text-4xl mb-2'>
					<FaSignInAlt /> Login
				</h1>
				<p className='text-slate-500'>Log in to your account</p>
			</section>

			<section className='flex justify-center'>
				<form onSubmit={handleSubmit} className='flex flex-col space-y-3 '>
					<input
						className='p-2 rounded-md'
						id='email'
						type='email'
						name='email'
						placeholder='Enter your email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						className='p-2 rounded-md'
						id='password'
						type='password'
						name='password'
						placeholder='Enter password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<div>
						<button
							disabled={isLoading}
							type='submit'
							className='bg-black text-white p-2 w-full rounded-md'
						>
							Login
						</button>
					</div>
					{error && (
						<div className='p-2 my-5 text-[#e7195a] border border-[#e7195a] rounded-md bg-[#ffefef]'>
							{error}
						</div>
					)}
				</form>
			</section>
		</>
	)
}
export default Login
