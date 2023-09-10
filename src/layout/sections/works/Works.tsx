import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/proj-1.webp"
import timerImg from "../../../assets/images/proj-2.webp"
import {Container} from "../../../components/Container";
import {S} from "./Works_Styles";

// const tabsItems = ["All", "landing page", "React", "spa"];

const tabsItems: Array<{ title: string, status: TabsStatusType }> = [
    {
        title: "All",
        status: "all",
    },
    {
        title: "landing page",
        status: "landing",
    },
    {
        title: "React",
        status: "react",
    },
    {
        title: "spa",
        status: "spa",
    },
]

const workData = [
    {
        title: "Social Network",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        src: socialImg,
        type: "spa",
    },
    {
        title: "Timer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        src: timerImg,
        type: "react",
    }
]

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = React.useState('all');
    let filteredWorks = workData;
    if (currentFilterStatus === "landing") {
        filteredWorks = workData.filter(work => work.type === 'landing')
    }

    if (currentFilterStatus === "react") {
        filteredWorks = workData.filter(work => work.type === 'react')
    }

    if (currentFilterStatus === "spa") {
        filteredWorks = workData.filter(work => work.type === 'spa')
    }

    const changeFilterStatus = function (value: TabsStatusType) {
        setCurrentFilterStatus(value);
    }

    return (
        <S.Works id={"works"}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus} currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    {filteredWorks.map((work) => {
                        return <Work title={work.title}
                                     text={work.text}
                                     src={work.src}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

