/* eslint-disable react/prop-types */
import { DeviceDataContext } from "../context";
import { useDeviceData } from "../hooks";

const DeviceDataProvider = ({ children }) => {
  const { deviceData, fieldInfo, error, loading } = useDeviceData();

  return (
    <DeviceDataContext.Provider
      value={{
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
