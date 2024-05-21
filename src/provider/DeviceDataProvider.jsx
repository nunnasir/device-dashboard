/* eslint-disable react/prop-types */

// import { DeviceDataContext } from "../context";
import { DeviceDataContext } from "../context";
import { useDeviceData } from "../hooks";

const DeviceDataProvider = ({ children }) => {
  const { deviceData, deviceStandardeData, error, loading } = useDeviceData();

  return (
    <DeviceDataContext.Provider
      value={{ deviceData, deviceStandardeData, error, loading }}
    >
      {children}
    </DeviceDataContext.Provider>
  );
};

export default DeviceDataProvider;
