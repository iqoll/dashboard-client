import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { useRegister } from '../hooks/useRegister'
import Spinner from '../components/Spinner'

function Register() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { register, error, isLoading } = useRegister()

	const handleSubmit = async (e) => {
		e.preventDefault()

		await register(name, email, password)
	}

	if (isLoading) {
		return <Spinner />
	}

	return (
		<>
			<section className='flex flex-col items-center text-2xl font-bold my-12 px-0 py-4'>
				<h1 className='flex flex-col justify-center items-center text-4xl mb-2'>
					<FaUser /> Register
				</h1>
				<p className='text-slate-500'>Please create an account</p>
			</section>

			<section className='flex justify-center'>
				<form onSubmit={handleSubmit} className='flex flex-col space-y-3 '>
					<input
						className='p-2 rounded-md'
						id='name'
						type='text'
						name='name'
						placeholder='Enter your name'
						value={name}
						onChange={(e) => setName(e.target.value)}
						autoComplete='off'
					/>
					<input
						className='p-2 rounded-md'
						id='email'
						type='email'
						name='email'
						placeholder='Enter your email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						autoComplete='off'
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
							Submit
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
export default Register
