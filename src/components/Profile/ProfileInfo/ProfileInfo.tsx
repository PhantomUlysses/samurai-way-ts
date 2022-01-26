import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg" alt="avatar"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;