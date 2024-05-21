/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { FieldIdContext } from "../context";

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

  const [fieldInfo, setFieldInfo] = useState([]);

  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });

  const [deviceStandardData, setDeviceStandardData] = useState({
    ph: "",
    mos: "",
    nit: "",
    phos: "",
    pot: "",
    water: "",
    wfr: "",
  });

  const { selectedField } = useContext(FieldIdContext);

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

      // console.log(data);

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

  const fetchFieldInformation = async () => {
    try {
      // Make the fetch call
      const response = await fetch(
        `https://smartsolarirrigationsystem.azurewebsites.net/api/fieldInfo`
      );

      if (!response.ok) {
        const errorMessage = `Fetchibg standard data failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();

      setFieldInfo(data.items);
    } catch (err) {
      setError(err);
    }
  };

  console.log("Seleted FieldId Hook:", selectedField);

  const fetchStandardData = async (fieldId) => {
    try {
      // Make the fetch call
      const response = await fetch(
        `https://smartsolarirrigationsystem.azurewebsites.net/api/standardDataByFieldId/${fieldId}`
      );

      if (!response.ok) {
        const errorMessage = `Fetchibg standard data failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();

      setDeviceStandardData(data);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: "Finding location..",
    });
    const intervalId = setInterval(fetchDeviceData, 30000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchFieldInformationtaAsync = async () => {
      try {
        await fetchFieldInformation();
      } catch (error) {
        setError(error);
      }
    };

    fetchFieldInformationtaAsync();
  }, []);

  useEffect(() => {
    fetchStandardData(selectedField);
  }, [selectedField]);

  return {
    deviceData,
    deviceStandardData,
    fieldInfo,
    error,
    loading,
  };
};

export default useDeviceData;
