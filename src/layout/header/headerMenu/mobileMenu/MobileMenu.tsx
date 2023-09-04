import React from 'react';
import {S} from "../HeaderMenu_Styles";
import {Menu} from "../menu/Menu";

export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    const [menuStatus, setMenuStatus] = React.useState(false);
    const handleOpenMenu = () => menuStatus ? setMenuStatus(false) : setMenuStatus(true);



    return (
        <S.MobileMenu>
            <S.BurgerButton className={"burger-button"} onClick={handleOpenMenu} isOpen={menuStatus}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={menuStatus}>
                <Menu menuItems={props.menuItems}/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};




