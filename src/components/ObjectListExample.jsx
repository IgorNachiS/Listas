import React from 'react';

function ObjectListExample() {
  const fruitDetails = [
    { id: 1, name: 'Apple', color: 'Red' },
    { id: 2, name: 'Banana', color: 'Yellow' },
    { id: 3, name: 'Orange', color: 'Orange' },
  ];
  
  return (
    <ul>
      {fruitDetails.map(fruit => (
        <li key={fruit.id}>
          {fruit.name} - {fruit.color}
        </li>
      ))}
    </ul>
  );
}

export default ObjectListExample;
