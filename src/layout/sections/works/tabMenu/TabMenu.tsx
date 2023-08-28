import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";

// type MenuPropsType = {
//     menuItems: Array<string>
// }
export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}><Link href="#">{item}</Link></ListItem>
                })}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
  ul {
    margin-bottom: 40px;
    display: flex;
    list-style: none;
    gap: 20px;
    justify-content: center;
  }
`
const ListItem = styled.li`
`

