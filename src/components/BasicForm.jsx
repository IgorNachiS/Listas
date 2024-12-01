import React, { useState } from 'react';

function BasicForm() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`O nome enviado foi: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nome:
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </label>
      <input type="submit" value="Enviar" />
    </form>
  );
}

export default BasicForm;
