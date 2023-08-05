import auth0 from 'auth0-js'
import { authConfig } from '../../shares/apiClient'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const useAuth = () => {
  const router = useRouter()
  const [session, setSession] = useState('')

  const auth = new auth0.WebAuth({
    domain: authConfig.domain,
    clientID: authConfig.clientId,
    redirectUri: authConfig.callbackUrl,
    responseType: 'token id_token',
    scope: 'openid'
  })
  const auth1 = new auth0.Management({
    domain: authConfig.domain,
    token: session
  })

  const login = () => {
    auth.authorize()
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('isLoggedIn')
    auth.logout({
      returnTo: window.location.origin
    })
    // navigate to the home route
    router.push('/')
  }
  useEffect(() => {
    auth.parseHash((err: any, authResult: any) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        setSession(authResult.accessToken)
        console.log(authResult)
        localStorage.setItem('isLoggedIn', 'true')
        localStorage.setItem('token', authResult.idToken)
        localStorage.setItem('user', authResult)
      } else if (err) {
        router.push('/')
      }
    })
  }, [router])

  const handleAuthentication = () => {}

  return {
    login: login,
    logout: logout,
    handleAuthentication: handleAuthentication,
    session
  }
}
