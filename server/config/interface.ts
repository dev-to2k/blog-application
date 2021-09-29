export interface INewUser {
  name: string
  password: string
  account: string
}

export interface IDecodedToken {
  newUser?: INewUser
  iat: number
  exp: number
}