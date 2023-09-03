import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Theme} from "../../styles/Theme";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {MobileMenu} from "./mobileMenu/MobileMenu";

const items = ["home", "skills", "works", "testimony", "contacts"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                    <MobileMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: ${Theme.colors.primaryBg};
  padding: 20px 0 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;



`