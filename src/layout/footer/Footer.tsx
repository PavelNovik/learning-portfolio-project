import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from "./Footer_Styles";

const socialList = ["instagram", "telegram", "vk", "linkedIn"]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Svetlana</S.Name>
                <S.SocialIconsList>
                    {socialList.map((item) => {
                        return (
                            <S.SocialIconItem>
                                <S.SocialIconLink href={"#"}>
                                    <Icon height={"21"} width={"21"} viewBox={"0 0 21 21"} iconId={item}/>
                                </S.SocialIconLink>
                            </S.SocialIconItem>
                        )
                    })}
                </S.SocialIconsList>
                <S.Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};

