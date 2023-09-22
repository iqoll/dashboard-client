import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'

function Register() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	})

	const { name, email, password, password2 } = formData

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
						onChange={handleChange}
					/>
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
					<input
						className='p-2 rounded-md'
						id='password2'
						type='text'
						name='password2'
						placeholder='Confirm password'
						value={password2}
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
export default Register
