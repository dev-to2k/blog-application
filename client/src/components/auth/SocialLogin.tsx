import React from 'react'
import { GoogleLogin, GoogleLoginResponse } from 'react-google-login-lite'
import {
  FacebookLogin,
  FacebookLoginAuthResponse,
} from 'react-facebook-login-lite'
import { useDispatch } from 'react-redux'
import { facebookLogin, googleLogin } from '../../redux/actions/authAction'

const SocialLogin = () => {
  const dispatch = useDispatch()

  const onSuccess = (googleUser: GoogleLoginResponse) => {
    const id_token = googleUser.getAuthResponse().id_token
    dispatch(googleLogin(id_token))
  }

  const onFBSuccess = (response: FacebookLoginAuthResponse) => {
    const { accessToken, userID } = response.authResponse
    dispatch(facebookLogin(accessToken, userID))
  }

  return (
    <>
      <div className="my-2 rounded-lg overflow-hidden shadow-md">
        <GoogleLogin
          client_id="561066546744-jclu1alk644t1errffioi17g96d393vu.apps.googleusercontent.com"
          cookiepolicy="single_host_origin"
          onSuccess={onSuccess}
          theme="light"
        />
      </div>
      <div className="my-2 rounded-lg overflow-hidden shadow-md">
        <FacebookLogin
          appId="1076352126460518"
          onSuccess={onFBSuccess}
          theme="light"
        />
      </div>
    </>
  )
}

export default SocialLogin
