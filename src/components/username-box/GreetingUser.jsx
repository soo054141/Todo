import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    margin-top: 15px;
`;

const Username = styled.h1`
    font-weight: bold;
    font-size: 36px;
    margin-bottom: 10px;
`;

const Welcome = styled.p`
    font-size: 18px;
    color: #9d9da6;
`;

function GreetingUser() {
    return (
        <Wrapper>
            <Username>Hey User</Username>
            <Welcome>You have some important</Welcome>
            <Welcome>tasks to do for today</Welcome>
        </Wrapper>
    );
}
export default GreetingUser;
