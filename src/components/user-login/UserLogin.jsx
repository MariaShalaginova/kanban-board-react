import React from "react";
import { useState } from 'react';
import Avatar from '../../assets/user-avatar.svg';
import Arrow from '../../assets/arrowDown.svg';
import css from './UserLogin.module.css'

const UserLogin = () => {

	const [isProfileOpen, setIsProfileOpen] = useState(false);

	return (
        <div className={css.userMenu}>
            <div className={css.userButton} onClick={() => setIsProfileOpen(!isProfileOpen)} >

			    <img src={Avatar} className={css.userAvatar} alt="avatar" />
                <img src={Arrow} className={isProfileOpen ? css.chevronOpen : ""} alt="Arrow" />
                
            </div>

            {isProfileOpen && (
                <ul className={css.userMenuOpen}>
                    <li>Profile</li>
                    <li>Log out</li>
                </ul>
            )}
        </div>
    )
}

export default UserLogin