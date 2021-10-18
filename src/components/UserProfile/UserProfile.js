import React from 'react';
import "./UserProfile.css";
import useUserContext from '../../hooks/useUserContext';

const UserProfile = () => {
    const { user, logout } = useUserContext();
    return (
        <section className="profile container text-center">
            <div className="my-4">
                {user.photoURL ? <img src={user.photoURL} alt="" id="user-img" />
                    : <span className="gradient-text display-1">
                        <i className="fas fa-user-circle"></i>
                    </span>
                }
            </div>
            <h1 className="fw-bold"><span className="gradient-text">{user?.displayName}</span></h1>
            <h5><span className="gradient-text">{user?.email}</span></h5>
            <button onClick={logout}
                className="btn gradient-button fs-5 px-5 my-4">Sign Out</button>
        </section>
    );
};

export default UserProfile;