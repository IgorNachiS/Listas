import React from 'react';

function ActionListExample() {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  const handleClick = (item) => {
    alert(`Você clicou em: ${item}`);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item} <button onClick={() => handleClick(item)}>Clique</button>
        </li>
      ))}
    </ul>
  );
}

export default ActionListExample;
