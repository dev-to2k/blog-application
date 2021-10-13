import { IAlert } from '../../utils/TypeScript'
import { ALERT, IAlertType } from '../types/alertTye'

const alertReducer = (state: IAlert = {}, action: IAlertType): IAlert => {
  switch (action.type) {
    case ALERT:
      return action.payload
    default:
      return state
  }
}

export default alertReducer
