import React from 'react';
import useUserContext from '../../hooks/useUserContext';

const ContactPage = () => {
    const { user } = useUserContext();
    return (
        <div>
            <form className="text-center" >
                <div className="form-heading fw-bold">
                    <i className="fas fa-contact"></i> <br />
                    <span className="fs-2 gradient-text">Contact Us</span>
                </div>
                <div className="auth-form-input-wrapper">
                    <input type="text" name="name" id="nameInput" placeholder="Name" defaultValue={user?.displayName} required />
                    <label>Name</label>
                </div>
                <div className="auth-form-input-wrapper">
                    <input type="email" name="email" id="emailInput" placeholder="Email" defaultValue={user?.email} required />
                    <label>Email</label>
                </div>
                <div className="auth-form-input-wrapper">
                    <textarea name="message" id="messageInput" rows="10" placeholder="Message"></textarea>
                    <label>Type Your Message Here</label>
                </div>
                <input type="submit" className="gradient-button btn text-white fs-5 px-4" value="Submit" />
            </form>
        </div>
    );
};

export default ContactPage;