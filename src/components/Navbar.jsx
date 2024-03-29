import { Link, useNavigate } from 'react-router-dom'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

function Navbar() {
	const { logout } = useLogout()
	const { user } = useAuthContext()

	const handleClick = (e) => {
		logout()
	}

	return (
		<>
			<header className='flex justify-between items-center p-5 bg-slate-900'>
				<div className='text-2xl text-white font-bold'>
					<Link to='/'>WishBoard</Link>
				</div>

				<>
					{user && (
						<>
							<ul className='flex space-x-2'>
								<li>
									<button className='bg-blue-500 p-3 rounded-md text-white hover:bg-blue-300 hover:-translate-y-0.5 hover:text-black transition duration-150'>
										<Link to={'/add'}>Add New Product</Link>
									</button>
								</li>
								<li>
									<button className='bg-blue-500 p-3 rounded-md text-white hover:bg-blue-300 hover:-translate-y-0.5 hover:text-black transition duration-150'>
										<Link to={'/update'}>Update Product</Link>
									</button>
								</li>
							</ul>
							<div className='text-white'>
								<span>{user.email}</span>
								<button
									className='flex items-center space-x-1 hover:-translate-y-0.5'
									onClick={handleClick}
								>
									<FaSignOutAlt /> Logout
								</button>
							</div>
						</>
					)}
					{!user && (
						<div className='text-white flex space-x-3'>
							<Link
								to='/login'
								className='flex items-center space-x-1 hover:-translate-y-0.5'
							>
								<FaSignInAlt /> Login
							</Link>
							<Link
								to='/register'
								className='flex items-center space-x-1 hover:-translate-y-0.5'
							>
								<FaUser /> Register
							</Link>
						</div>
					)}
				</>
			</header>
		</>
	)
}
export default Navbar
