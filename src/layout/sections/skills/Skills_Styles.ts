import styled from "styled-components";
import {Theme} from "../../../styles/Theme";

const Skills = styled.section`
`

const Skill = styled.div`
  //max-width: 380px;
  //min-width: 330px;
  width: 330px;
  flex-grow: 1;
  padding: 54px 20px 45px;
  
  @media ${Theme.media.mobile} {
  padding: 62px 0 40px;
    
  }
`
const IconWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    display: inline-block;
    width: 80px;
    height: 80px;
    transform: rotate(45deg) translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.10);

    left: 50%;
    top: 50%;
    transform-origin: top left;
    
  }
`
const SkillTitle = styled.h3`
  text-transform: uppercase;
  margin: 70px 0 15px;

`

const SkillText = styled.p`
  text-align: center;
  line-height: 1.4;
`
export const S = {
    Skills,
    Skill,
    IconWrapper,
    SkillTitle,
    SkillText,
}