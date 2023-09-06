import * as AuthApi from '../api/AuthRequests';

export const logIn = (userDetails, navigate) => async (dispatch) => {

    dispatch({ type: "AUTH_START" })
    try {
        const { data } = await AuthApi.logIn(userDetails);
        dispatch({ type: "AUTH_SUCCESS", data: data });
        navigate("../dashboarduser", { replace: true });
    } catch (error) {
        console.log(error)
        dispatch({ type: "AUTH_FAIL" })
    }
}

export const signUp = (userDetails) => async (dispatch) => {
    
    dispatch({ type: "AUTH_START" })
    try {
        const { data } = await AuthApi.signUp(userDetails);
        dispatch({ type: "AUTH_SUCCESS", data: data })
    } catch (error) {
        console.log(error)
        dispatch({ type: "AUTH_FAIL" })
    }
}