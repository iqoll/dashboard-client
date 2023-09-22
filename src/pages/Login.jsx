import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

function Login() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

	const { email, password } = formData

	const handleChange = (e) => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
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
						onChange={handleChange}
					/>
					<input
						className='p-2 rounded-md'
						id='password'
						type='text'
						name='password'
						placeholder='Enter password'
						value={password}
						onChange={handleChange}
					/>
					<div>
						<button
							type='submit'
							className='bg-black text-white p-2 w-full rounded-md'
						>
							Submit
						</button>
					</div>
				</form>
			</section>
		</>
	)
}
export default Login
