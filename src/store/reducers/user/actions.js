export const ActionTypeForUser = {
  LOGIN: `LOGIN`,
  CHANGE_LOGIN: `CHANGE_LOGIN`
};

export const ActionCreatorForUser = {
  loggedIn: (loggedIn) => ({
    type: ActionTypeForUser.LOGIN,
    payload: loggedIn,
  }),
  changeLogin: (login) => ({
    type: ActionTypeForUser.CHANGE_LOGIN,
    payload: login,
  })
};
