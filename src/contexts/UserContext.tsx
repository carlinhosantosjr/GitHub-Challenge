import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface userProps {
  name: string,
  login: string,
  followers: number,
  avatarUrl: string,
  htmlUrl: string,
  company: string,
  bio: string
}

interface UserContextType {
  userInfo: userProps
}

interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextType)

export function UserProvider({ children }: UserProviderProps) {
  const [userInfo, setUserInfo] = useState<userProps>({} as userProps)

  const fetchUser = async () => {
    const response = await api.get('/users/carlinhosantosjr')
    const {
      name, login, followers,
      avatar_url: avatarUrl,
      html_url: htmlUrl,
      company,
      bio,
    } = response.data

    setUserInfo({
      name,
      login,
      followers,
      avatarUrl,
      htmlUrl,
      company,
      bio,
    })
    console.log(response.data)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <UserContext.Provider value={{
      userInfo,
    }}
    >
      {children}
    </UserContext.Provider>
  )
}
