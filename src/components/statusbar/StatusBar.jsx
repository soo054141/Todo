import React from "react";
import styled from "styled-components";

const Header = styled.div`
    width: 100%;
    display: flex;
`;

const BarStyle = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    color: #63616d;
`;

const WeatherBar = styled(BarStyle)`
    flex-flow: column;
    justify-content: center;
    align-items: flex-end;
`;

const DateBar = styled(BarStyle)`
    align-items: center;
    & > span {
        font-size: 40px;
        font-weight: bold;
        color: #93b3d7;
        padding-bottom: 8px;
    }
    & > div {
        display: flex;
        flex-flow: column;
        align-items: center;
    }
`;

const BoldSpan = styled.div`
    font-size: 14px;
    font-weight: bold;
`;

function StatusBar() {
    const today = new Date();

    const monthTime = today.toLocaleDateString("en-US", { month: "long" });
    const dayTime = today.toLocaleDateString("en-US", { day: "numeric" });
    const yearTime = today.toLocaleDateString("en-US", { year: "numeric" });
    const weekTime = today.toLocaleDateString("en-US", { weekday: "long" });

    return (
        <Header>
            <DateBar>
                <span>{dayTime}</span>
                <div>
                    <BoldSpan>{monthTime}</BoldSpan>
                    <span>{yearTime}</span>
                </div>
            </DateBar>
            <WeatherBar>
                <BoldSpan>{weekTime}</BoldSpan>
                <span>12 Seoul</span>
            </WeatherBar>
        </Header>
    );
}
export default StatusBar;
