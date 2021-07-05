import React from "react";
import styled from "styled-components";
import StatusBar from "./components/statusbar/StatusBar";
import GreetingUser from "./components/username-box/GreetingUser";
import TodoList from "./components/todolist/TodoList";
import TodoCreate from "./components/todolist/TodoCreate";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;

const Wrapper = styled.div`
    max-width: 420px;
    width: 100%;
    height: 823px;
    margin-top: 50px;
    padding: 65px;
    border: 2px solid #dfdff2;
    box-shadow: 5px 5px 5px #e9ecef;
    border-radius: 16px;
    background-color: white;
    overflow-y: auto;
`;

function App() {
    return (
        <Container>
            <Wrapper>
                <StatusBar />
                <GreetingUser />
                <TodoCreate></TodoCreate>
                <TodoList></TodoList>
            </Wrapper>
        </Container>
    );
}
export default App;
