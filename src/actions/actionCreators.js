export const FORM_SAVE_SUCCESS = "FORM_SAVE_SUCCESS";
export const UPDATE_SCORE = "UPDATE_SCORE";

export const setUserInfo = userinfo => ({ type: 'SET_USERINFO', userinfo: userinfo })
export const setUserId = uid => ({ type: 'SET_USERID', uid })
export const updateUserList = userlist => ({ type: 'UPDATE_USERLIST', userlist })
export const updateMessages = messages => ({ type: 'UPDATE_MESSAGE', messages })
export const clearMessages = () => ({ type: 'CLEAR_MESSAGE' })
export const leaveChatRoom = () => ({ type: 'LEAVE_CHATROOM' })
/* export const changeMessageBoxColor = color => ({ type: 'CHANGE_MESSAGEBOXCOLOR', color }) */
export const setErrorInfo = error => ({ type: 'SET_ERRORINFO', error })

export function refreshform() {
  console.log('dddddddd');
  return {
    type: FORM_SAVE_SUCCESS
  };
}
export function updateScore(score) {
  
  return {
    type: UPDATE_SCORE
  };
}