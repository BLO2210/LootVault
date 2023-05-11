import { connect } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";

import { authActions } from "../store/store";

function ProtectedRoute(props) {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const isAuthenticated = useSelector(state => state.auth)

    useEffect(() => {

        if(!props.isAuth) {
            navigate('/login')
        }
    })
    return props.children

}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps)(ProtectedRoute)