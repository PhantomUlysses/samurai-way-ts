import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props: any) => {
    if (!props.profile) {
        return <Preloader />
    }
    debugger;
    return (
        <div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg" alt="avatar"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;