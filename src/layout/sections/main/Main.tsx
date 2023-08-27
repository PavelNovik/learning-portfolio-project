import React from 'react';
// import photoUrlWeb from '../../../assets/images/photo.webp';
import photoUrlJpg from '../../../assets/images/photo.jpg';
import styled from 'styled-components';
import {FlexWrapper} from "../../../components/FlexWrapper";


export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                <span>Hi There</span>
                    <Name>I am Svetlana Dyablo</Name>
                    <MainTitle>A Web Developer.</MainTitle>

                </div>
            <Photo src={photoUrlJpg} alt='my photo' />
            </FlexWrapper>
        </StyledMain>
    )
}

const StyledMain = styled.section`
min-height: 100vh;
  background-color: beige;
`

const Photo = styled.img`
width: 350px;
height: 430px;
object-fit: cover
`
const MainTitle = styled.h1``

const Name = styled.h2``