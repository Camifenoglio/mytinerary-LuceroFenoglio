import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import userAction from '../redux/actions/userAction';
import { toast } from 'react-hot-toast';

export default function GoogleSignUp() {
    const dispatch = useDispatch();

    async function handleCallBackResponse(response) {
        let userObject = jwt_decode(response.credential);
        const res = await dispatch(userAction.signUpUser({
            firstName: userObject.given_name,
            lastName: userObject.family_name,
            email: userObject.email,
            image: userObject.picture,
            password: userObject.sub,
            from: 'google'
        }))
        
        if (res.data.from === "validator") {
            errormsg.forEach(e => {
                toast.error(e.message)
            })
        }
        if (res.data.success) {
                toast.success(res.data.message)
            } else {
                toast.error(res.data.message)
            }





    }

    useEffect(() => {
        /* global google*/
        google.accounts.id.initialize({
            client_id: '470091252995-1g8bn7svaja6kniip320apitapb5aum7.apps.googleusercontent.com',
            callback: handleCallBackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById('buttonDiv'),
            { theme: "outline", size: "medium", type: "icon", shape:"circle", size: "medium" }
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