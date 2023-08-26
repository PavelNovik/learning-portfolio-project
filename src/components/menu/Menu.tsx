import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href="#">home</a></li>
                <li><a href="#">slills</a></li>
                <li><a href="#">works</a></li>
                <li><a href="#">testimony</a></li>
                <li><a href="#">contacts</a></li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
      display: flex;
      list-style: none;
      gap: 30px;
      
      li {
        
        a {
          text-decoration: none;
          text-transform: capitalize;
        }
      }
    }

`