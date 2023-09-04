import styled from "styled-components";
import {Theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Link} from "../../../components/Link";
import {Button} from "../../../components/Button";


const Works = styled.section`
  ${FlexWrapper} {
    gap: 30px;
  }
`

const Work = styled.div`
  //width: 100%;
  width: 330px;
  background-color: ${Theme.colors.secondaryBg};
  flex-grow: 1;

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }

    &::before {
      bottom: 7px;
    }
  }

  @media ${Theme.media.desktop} {
    max-width: 540px;
  }

`
const Description = styled.div`
  padding: 25px 20px;
`
const ImageWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: rgba(0, 0, 0, 0.30);
    backdrop-filter: blur(4px);
    opacity: 0;
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -25%);

    &::before {
      width: 100%;
      height: 100%;
    }
  }

  @media ${Theme.media.tablet} {
    &::before {
      opacity: 1;
    }
    ${Button} {
      opacity: 1;
    }
  }
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`
const Title = styled.h3``
const Text = styled.p`
  margin: 14px 0 10px;
  line-height: 1.4;
`

const TabMenu = styled.nav`
  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    margin: 0 auto 50px;

  }
`
const ListItem = styled.li`

`

export const S = {
    Works,
    Work,
    Description,
    ImageWrapper,
    Image,
    Title,
    Text,
    TabMenu,
    ListItem
}