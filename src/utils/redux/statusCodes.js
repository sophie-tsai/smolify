const statusCodeState = {
  signIn: 0,
  logIn: 0,
};

export function setSignInCode(code) {
  return {
    type: "SET_SIGN_IN_CODE",
    payload: code,
  };
}

export function setLogInCode(code) {
  return {
    type: "SET_LOG_IN_CODE",
    payload: code,
  };
}

export default function statusCodeReducer(
  statusCode = statusCodeState,
  action
) {
  switch (action.type) {
    case "SET_SIGN_IN_CODE":
      return {
        ...statusCode,
        signIn: action.payload,
      };
    case "SET_LOG_IN_CODE":
      return {
        ...statusCode,
        logIn: action.payload,
      };
    default:
      return statusCode;
  }
}
