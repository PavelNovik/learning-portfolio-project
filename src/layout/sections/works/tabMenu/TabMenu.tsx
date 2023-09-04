import React from 'react';
import {Link} from "../../../../components/Link";
import {S} from "./../Works_Styles";

// type MenuPropsType = {
//     menuItems: Array<string>
// }
export const TabMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <S.TabMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <S.ListItem key={index}><Link href="#">{item}</Link></S.ListItem>
                })}
            </ul>
        </S.TabMenu>
    );
};



