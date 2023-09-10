import React from 'react';
import {S} from "../HeaderMenu_Styles";
import {Menu} from "../menu/Menu";

export const MobileMenu: React.FC = () => {
    const [menuISOpen, setMenuIsOpen] = React.useState(false);
    const handleOpenMenu = () => setMenuIsOpen(!menuISOpen);


    return (
        <S.MobileMenu>
            <S.BurgerButton className={"burger-button"} onClick={handleOpenMenu} isOpen={menuISOpen}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={menuISOpen} onClick={() => {
                setMenuIsOpen(false)
            }}>
                <Menu/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};




