/* eslint-disable react/prop-types */

// import { DeviceDataContext } from "../context";
import { DeviceDataContext } from "../context";
import { useDeviceData } from "../hooks";

const DeviceDataProvider = ({ children }) => {
  const {
    deviceData,
    deviceStandardData,
    fieldInfo,
    selectedField,
    setSelectedField,
    error,
    loading,
  } = useDeviceData();

  return (
    <DeviceDataContext.Provider
      value={{
        selectedField,
        setSelectedField,
        deviceData,
        deviceStandardData,
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
