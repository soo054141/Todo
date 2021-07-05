import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

const Wrapper = styled.div`
  & > div:last-of-type {
    border-bottom: 1px solid #eee;
  }
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoList = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckBox = styled.div`
  width: 25px;
  height: 25px;
  border: 2px solid #dad9e2;
  border-radius: 50%;
  margin-right: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.completed &&
    css`
      border: 2px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const TaskText = styled.h2`
  flex: 1;
  font-weight: bold;
  ${(props) =>
    props.completed &&
    css`
      color: #ced4da;
    `}
`;

function TodoItem({ user, onRemove, onToggle }) {
  return (
    <Wrapper>
      <TodoList>
        <CheckBox completed={user.completed} onClick={() => onToggle(user.id)}>
          {user.completed && <MdDone />}
        </CheckBox>
        <TaskText completed={user.completed}>{user.title}</TaskText>
        <Remove onClick={() => onRemove(user.id)}>
          <MdDelete />
        </Remove>
      </TodoList>
    </Wrapper>
  );
}

export default TodoItem;
