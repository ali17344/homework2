import "./userInfo.css"
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { get_user_info } from "../../redux/reducer";
import '../UserName/userName.css'
const UserInfo = () => {
    const { id } = useParams();
    const user = useSelector(s => s.reducer.userInfo);     
    console.log(user);
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(get_user_info(id))
      console.log(id);
      
    }, []);
    
    
    return (
        <div className='userInfo'>
            {
                user? (
                    <div key={user.id}>
                        <h1>{user?.name}</h1>  
                        <p><b>Username:</b> {user?.username}</p>
                        <p><b>Phone:</b> {user?.phone}</p>
                        <p><b>Email:</b> {user?.email}</p>
                        <p><b>City: </b>{user?.address?.city}</p>
                        <p><b>Company name:</b> {user?.company?.name}</p>
                        <Link to={'/'} className="link">Go to home?</Link>
                    </div>
                ) :(
                    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                )
            }
        </div>
    );
}

export default UserInfo;

