// TodoForm.jsx

import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: none;
  background-color: transparent;
  color: red;
  font-size: 1.3rem;
  font-family: 'Roboto', sans-serif;
  border-bottom: 2px solid red;
  outline: none;
  margin-right: 6%;
`;

const SubmitButton = styled.button`
  background-color: transparent;
  color: red;
  border: 3px solid red;
  padding: 15px 20px ;
  font-size: 1.3rem;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
`;

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '') {
      addTodo({
        id: Date.now(),
        title: title,
        completed: false,
      });
      setTitle('');
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Enter a task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <SubmitButton type="submit">Add</SubmitButton>
    </FormWrapper>
  );
};

export default TodoForm;
