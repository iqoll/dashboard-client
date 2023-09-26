import { useState } from "react"
import { useAuthContext } from './useAuthContext'
import axios from 'axios'

export const useRegister = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const register = async (name, email, password) => {
    setIsLoading(true)
    setError(null)

    const userData = {
      name,
      email,
      password
    }

    try {
      const res = await axios.post('http://localhost:5000/users', userData)
      
      if(res.data) {
        // Save the user to localStorage
        localStorage.setItem('user', JSON.stringify(res.data))

        // Update the auth context
        dispatch({type: 'LOGIN', payload: res.data})

        setIsLoading(false)
      }
    } catch (error) {
      setIsLoading(false)
      setError(error.response.data.error)
    }
  }
  return {register, isLoading, error}
} 