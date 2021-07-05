import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBox = styled.div``;

function TodoList() {
    return (
        <>
            <TodoListBox>
                <TodoItem />
            </TodoListBox>
        </>
    );
}
export default TodoList;
