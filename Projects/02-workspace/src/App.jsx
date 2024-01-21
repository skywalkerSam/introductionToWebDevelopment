// Dev: @skywalkerSam
// Purpose: Project-Workspace
// Date: 12023.12.23.1351

import React from "react";
import 'tachyons';
import styled from 'styled-components';
import Clock from './components/Clock/Clock';
import TodoList from "./components/Todo/TodoList";

const AppContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: black;
  padding: 3%;
  font-family: 'Roboto', sans-serif;
  max-width: 100vw;
`;

const App = () => {
  return (
    <div>
      {/* <h1 className="red tc">Project: Workspace</h1>   */}
      <AppContainer>
        <TodoList></TodoList>
        <Clock></Clock>
      </AppContainer>
      
    </div>
  )
};

export default App;
