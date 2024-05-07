/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useDeviceData = () => {
  const [deviceData, setDeviceData] = useState({
    ph: 7.65,
    mos: 0,
    nit: 4,
    phos: 0,
    pot: 0,
    water: 1,
    wfr: 3419,
    node: 1,
    sensor: 1,
  });

  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });

  const [error, setError] = useState(null);

  const fetchDeviceData = async () => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching weather data..",
      });

      // Make the fetch call
      const response = await fetch(
        `https://smartsolarirrigationsystem.azurewebsites.net/api/DeviceData/lastData`
      );

      if (!response.ok) {
        const errorMessage = `Fetchibg weather data failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();

      console.log(data);

      const updateDeviceData = {
        ph: data.ph,
        mos: data.mos,
        nit: data.nit,
        phos: data.phos,
        pot: data.pot,
        water: data.water,
        wfr: data.wfr,
        node: data.node,
        sensor: data.sensor,
      };

      setDeviceData(updateDeviceData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: "Finding location..",
    });
    const intervalId = setInterval(fetchDeviceData, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return {
    deviceData,
    error,
    loading,
  };
};

export default useDeviceData;
