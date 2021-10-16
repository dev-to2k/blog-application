import { IComment } from '../../utils/TypeScript'

export const CREATE_COMMENT = 'CREATE_COMMENT'
export const GET_COMMENTS = 'GET_COMMENTS'
export const REPLY_COMMENT = 'REPLY_COMMENT'

export interface ICommentState {
  data: IComment[]
  total: number
}

export interface ICreateCommentType {
  type: typeof CREATE_COMMENT
  payload: IComment
}

export interface IGetCommentsType {
  type: typeof GET_COMMENTS
  payload: ICommentState
}

export interface IReplyCommentType {
  type: typeof REPLY_COMMENT
  payload: IComment
}

export type ICommentType =
  | ICreateCommentType
  | IGetCommentsType
  | IReplyCommentType
