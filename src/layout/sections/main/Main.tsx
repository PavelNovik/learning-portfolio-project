import React from 'react';
import photoUrlWeb from '../../../assets/images/photo.webp';
// import photoUrlJpg from '../../../assets/images/photo.jpg';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "./Main_Styles";


export const Main: React.FC= () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Svetlana Dyablo</span></S.Name>
                        <S.MainTitle>A Web Developer.</S.MainTitle>
                    </div>
                    <S.PhotoWrapper>
                    <S.Photo src={photoUrlWeb} alt='my photo'/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    )
}
