import React, { useState } from 'react';

function CompleteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nome: ${formData.name}, Email: ${formData.email}, Idade: ${formData.age}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nome:
        <input 
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>Email:
        <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>Idade:
        <input 
          type="number" 
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </label>
      <br />
      <input type="submit" value="Enviar" />
    </form>
  );
}

export default CompleteForm;
