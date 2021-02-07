import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { USER_LOGIN_SUCCESS } from "../../constants/userConstants";

const ThirdPartyHandler = ({ history }) => {
    const { token } = useParams();

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            history.replace('/lists');
        }
        else {
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: { token },
            });
            localStorage.setItem('userInfo', JSON.stringify({ token }));
        }
    }, [userInfo, history]);

    return (<></>);
}

export default ThirdPartyHandler;