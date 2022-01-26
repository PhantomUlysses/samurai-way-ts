import React from 'react';
import s from './Header.module.css';

type HeaderPropsType = {
    imageSource: string;
}

const Header:React.FC<HeaderPropsType> = (props) => {
    return (
        <header className={s.header}>
            <img
                src={props.imageSource}
                alt=""/>
        </header>
    );
}

export default Header;