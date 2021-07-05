import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBox = styled.div``;

function TodoList({ users, onRemove, onToggle }) {
  return (
    <>
      {users.map((user) => (
        <TodoListBox key={user.id}>
          <TodoItem user={user} onRemove={onRemove} onToggle={onToggle} />
        </TodoListBox>
      ))}
    </>
  );
}
export default TodoList;
