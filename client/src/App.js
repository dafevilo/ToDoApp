import React from 'react'
import styled from 'styled-components'
import TodoList from './todos/TodoList'

const AppContainer = styled.div`
  padding: 2rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #222222;
  max-width: 100vw;
  min-height: 90vh;
`;

function App() {
  return (
    <AppContainer>
      <TodoList />
    </AppContainer>
  );
}

export default App;
