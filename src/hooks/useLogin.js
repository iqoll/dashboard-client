import { useState } from "react"
import { useAuthContext } from './useAuthContext'
import axios from 'axios'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setIsLoading(true)
    setError(null)

    const userData = {
      email,
      password
    }

    try {
      const res = await axios.post('https://dashboard-crud-57e7ed374405.herokuapp.com/users/login', userData)
      
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
  return {login, isLoading, error}
} 