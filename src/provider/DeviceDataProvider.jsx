/* eslint-disable react/prop-types */
import { useState } from "react";
import { DeviceDataContext, FieldIdContext } from "../context";
import { useDeviceData } from "../hooks";
// DeviceDataProvider.js

const DeviceDataProvider = ({ children }) => {
  const [selectedField, setSelectedField] = useState(null);
  const { deviceStandardData, deviceData, fieldInfo, error, loading } =
    useDeviceData();

  return (
    <FieldIdContext.Provider value={{ selectedField, setSelectedField }}>
      <DeviceDataContext.Provider
        value={{
          deviceStandardData,
          deviceData,
          fieldInfo,
          error,
          loading,
        }}
      >
        {children}
      </DeviceDataContext.Provider>
    </FieldIdContext.Provider>
  );
};

export default DeviceDataProvider;
