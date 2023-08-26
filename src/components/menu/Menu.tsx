import React from 'react';
import styled from "styled-components";

// type MenuPropsType = {
//     menuItems: Array<string>
// }
export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <li key={index}><a href="#">{item}</a></li>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    list-style: none;
    gap: 30px;
    justify-content: center;

    li {

      a {
        text-decoration: none;
        text-transform: capitalize;
      }
    }
  }

`