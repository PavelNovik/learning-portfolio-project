import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

const socialList = ["instagram", "telegram", "vk", "linkedIn"]

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Svetlana</Name>
                <SocialIconsList>
                    {socialList.map((item) => {
                        return (
                            <SocialIconItem>
                                <SocialIconLink href={"#"}>
                                    <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={item}/>
                                </SocialIconLink>
                            </SocialIconItem>
                        )
                    })}
                </SocialIconsList>
                <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  min-height: 20vh;
  background-color: #ffe97d;
`

const Name = styled.span`

`

const SocialIconsList = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  
`

const SocialIconItem = styled.li``

const SocialIconLink = styled.a``

const Copyright = styled.small``