import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Theme} from "../../../../styles/Theme";

type SkillPropsType = {
    iconId: string,
    title: string,
    description: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <IconWrapper>
                    <Icon iconId={props.iconId}/>
                </IconWrapper>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.description}</SkillText>
            </FlexWrapper>

        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  //max-width: 380px;
  //min-width: 330px;
  width: 330px;
  flex-grow: 1;
  padding: 62px 20px 40px;
  
  @media ${Theme.media.mobile} {
  padding: 62px 0 40px;
    
  }
`
export const IconWrapper = styled.div`
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