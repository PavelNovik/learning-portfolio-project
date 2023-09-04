import styled from "styled-components";
import {Theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

const Footer = styled.footer`
  background-color: ${Theme.colors.primaryBg};
  padding: 40px 0;
`

const Name = styled.span`
  ${font({
    family: '"Josefin Sans", sans-serif',
    weight: 700,
    Fmax: 22,
    Fmin: 16
})} //font-family: "Josefin Sans", sans-serif;
          //font-size: 22px;
          //font-weight: 700;
  letter-spacing: 3px;

    // @media ${Theme.media.mobile} {
  //   font-size: 16px;
  // }
`

const SocialIconsList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 30px 0;
`

const SocialIconItem = styled.li``

const SocialIconLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.10);

  color: ${Theme.colors.accent};

  &:hover {
    color: ${Theme.colors.primaryBg};
    background-color: ${Theme.colors.accent};
    transform: translateY(-4px);
  }
`

const Copyright = styled.small`
  text-align: center;
  opacity: 0.5;
  font-size: 12px;
  font-weight: 400;
`

export const S = {
    Footer,
    SocialIconItem,
    SocialIconLink,
    SocialIconsList,
    Name,
    Copyright,
}