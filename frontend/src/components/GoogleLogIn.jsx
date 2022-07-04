import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import userAction from '../redux/actions/userAction';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function GoogleLogIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function handleCallBackResponse(response) {

        let userObject = jwt_decode(response.credential);

        const res = await dispatch(userAction.logInUser({
            email: userObject.email,
            password: userObject.sub,
            from: 'google'
        }))

        if (res.data.success) {
            toast.success(res.data.message)
            navigate('/login')
        } else {
            toast.error(res.data.message)
            navigate('/signup')
        }

    }

    useEffect(() => {
        /* global google*/
        google.accounts.id.initialize({
            client_id: '768882882778-flin70kqbu8o9udhua7gok9a8dvntlpg.apps.googleusercontent.com',
            callback: handleCallBackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById('buttonDiv'),
            { theme: "outline", size: "medium", type: "icon", shape: "circle", size: "medium" }
        )
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <div className="g_id_signin"
                id='buttonDiv'
                data-text="signup_with"
            >
            </div>
        </div>
    )
}