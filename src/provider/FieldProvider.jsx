/* eslint-disable react/prop-types */

import { useState } from "react";

const FieldProvider = ({ children }) => {
  const { selectedField, setSelectedField } = useState("");

  return (
    <FieldProvider.Provider
      value={{
        selectedField,
        setSelectedField,
      }}
    >
      {children}
    </FieldProvider.Provider>
  );
};

export default FieldProvider;
