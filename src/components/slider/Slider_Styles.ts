import styled from "styled-components";
import {Theme} from "../../styles/Theme";

const Slider = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: grab;
//border: 1px solid white;
  &:active {
    cursor: grabbing;
  }

`

const Slide = styled.div`
  text-align: center;
`

const Text = styled.p`
  line-height: 1.4;
`

const Name = styled.span`
  display: inline-block;
  font-family: "Josefin Sans", sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 22px 0 30px;
`

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 20px;

    & + span {
      margin-left: 5px;
    }

    &.active {
      width: 20px;
      background-color: ${Theme.colors.accent};
    }
  }
`
export const S = {
    Slider,
    Slide,
    Name,
    Text,
    Pagination,
}