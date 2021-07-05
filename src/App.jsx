import React, { useState, useRef } from "react";
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
  const [inputs, setInputs] = useState({
    title: "",
  });

  const [users, setUsers] = useState([
    {
      id: 1,
      title: "walk the dog",
      completed: true,
    },
    {
      id: 2,
      title: "create a new portfolio site",
      completed: false,
    },
    {
      id: 3,
      title: "complete a previous task",
      completed: false,
    },
  ]);

  const { title } = inputs;
  const nextId = useRef(4);

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onCreate = () => {
    const user = {
      id: nextId.current,
      title,
    };
    if (user.title !== "") {
      setUsers(users.concat(user));

      setInputs({
        title: "",
      });
      nextId.current += 1;
    }
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, completed: !user.completed } : user
      )
    );
  };

  return (
    <Container>
      <Wrapper>
        <StatusBar />
        <GreetingUser />
        <TodoCreate title={title} onChange={onChange} onCreate={onCreate} />
        <TodoList users={users} onRemove={onRemove} onToggle={onToggle} />
      </Wrapper>
    </Container>
  );
}
export default App;
