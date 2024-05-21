/* eslint-disable react/prop-types */
import { useState } from "react";
import { DeviceDataContext } from "../context";
import { useDeviceData } from "../hooks";

const DeviceDataProvider = ({ children }) => {
  const [selectedField, setSelectedField] = useState("");
  const { deviceStandardData, deviceData, fieldInfo, error, loading } =
    useDeviceData();

  return (
    <DeviceDataContext.Provider
      value={{
        selectedField,
        setSelectedField,
        deviceStandardData,
        deviceData,
        fieldInfo,
        error,
        loading,
      }}
    >
      {children}
    </DeviceDataContext.Provider>
  );
};

export default DeviceDataProvider;
