import React, { createContext, useState } from 'react';

// Create the context
export const InputContext = createContext();

// Create a provider component
 const InputProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <InputContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </InputContext.Provider>
  );
};
export default InputProvider
