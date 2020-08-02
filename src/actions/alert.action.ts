interface SuccessAlertAction {
  type: typeof alertConstants.SUCCESS;
  message: string;
}

interface ErrorAlertAction {
  type: typeof alertConstants.ERROR;
  message: string;
}

interface ClearAlertAction {
  type: typeof alertConstants.CLEAR;
  message: string;
}

export type AlertActionTypes = SuccessAlertAction | ErrorAlertAction | ClearAlertAction;

export const successAlert = (message: string): AlertActionTypes => {
  return {
    type: alertConstants.SUCCESS,
    message: message
  };
};

export function errorAlert(message: string): AlertActionTypes {
  return {
    type: alertConstants.ERROR,
    message: message
  };
}

export const clearAlert = (message: string): AlertActionTypes => {
  return {
    type: alertConstants.CLEAR,
    message: message
  };
};

export const alertConstants = {
  SUCCESS: 'ALERT_SUCCESS',
  ERROR: 'ALERT_ERROR',
  CLEAR: 'ALERT_CLEAR'
};

export type AlertState = {
  type?: string;
  message?: string;
};


