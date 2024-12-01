import React from 'react';

function ListExample() {
  const myList = ['Apple', 'Banana', 'Orange'];
  return (
    <ul>
      {myList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ListExample;
