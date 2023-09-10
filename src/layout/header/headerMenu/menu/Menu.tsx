import React from 'react';
import {S} from "../HeaderMenu_Styles";


const items = [
    {
        title: "home",
        href: "home",
    },
    {
        title: "skills",
        href: "skills",
    },
    {
        title: "works",
        href: "works",
    },
    {
        title: "testimony",
        href: "testimony",
    },
    {
        title: "contacts",
        href: "contacts",
    }
]

export const Menu: React.FC = () => {
    return (
        <ul>
            {items.map((item, index) => {
                return <S.MenuItem key={index}>
                    <S.NavLink activeClass="active" to={item.href} smooth={true} spy={true}>
                        {item.title}
                        <S.Mask><span>{item.title}</span></S.Mask>
                        <S.Mask><span>{item.title}</span></S.Mask>
                    </S.NavLink>
                </S.MenuItem>
            })}
        </ul>
    );
};

