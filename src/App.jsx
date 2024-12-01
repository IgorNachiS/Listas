import React from 'react';
import ListExample from './components/ListExample';
import ObjectListExample from './components/ObjectListExample';
import ActionListExample from './components/ActionListExample';
import BasicForm from './components/BasicForm';
import CompleteForm from './components/CompleteForm';

function App() {
  return (
    <div>
      <h1>Exemplos de Listas</h1>
      <ListExample />
      <ObjectListExample />
      <ActionListExample />
      <h1>Exemplos de Formulários</h1>
      <BasicForm />
      <CompleteForm />
    </div>
  );
}

export default App;
