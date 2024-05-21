/* eslint-disable react/prop-types */
import { FieldIdContext } from "../context";
import { useStandardData } from "../hooks";

import { useState } from "react";

const FieldProvider = ({ children }) => {
  const [selectedField, setSelectedField] = useState("");
  const { deviceStandardData } = useStandardData();

  return (
    <FieldIdContext.Provider
      value={{
        selectedField,
        setSelectedField,
        deviceStandardData,
      }}
    >
      {children}
    </FieldIdContext.Provider>
  );
};

export default FieldProvider;
