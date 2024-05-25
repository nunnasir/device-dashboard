/* eslint-disable react-hooks/exhaustive-deps */
// useDeviceData.js
import { useContext, useEffect, useState } from "react";
import { FieldIdContext } from "../context";

const useDeviceData = () => {
  const [deviceData, setDeviceData] = useState({
    ph: 0,
    mos: 0,
    nit: 0,
    phos: 0,
    pot: 0,
    water: 0,
    wfr: 0,
    node: 1,
    sensor: 1,
  });

  const [fieldInfo, setFieldInfo] = useState([]);
  const [loading, setLoading] = useState({ state: false, message: "" });
  const [deviceStandardData, setDeviceStandardData] = useState({
    ph: "",
    mos: "",
    nit: "",
    phos: "",
    pot: "",
    water: "",
    wfr: "",
  });

  const fieldIdContext = useContext(FieldIdContext);

  const { selectedField } = fieldIdContext || {}; // Handle if context is null
  const [error, setError] = useState(null);

  const fetchDeviceData = async () => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching weather data..",
      });

      const response = await fetch(
        `https://smartsolarirrigationsystem.azurewebsites.net/api/DeviceData/lastData`
      );

      if (!response.ok) {
        throw new Error(`Fetching weather data failed: ${response.status}`);
      }

      const data = await response.json();
      setDeviceData(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({ ...loading, state: false, message: "" });
    }
  };

  const fetchFieldInformation = async () => {
    try {
      const response = await fetch(
        `https://smartsolarirrigationsystem.azurewebsites.net/api/fieldInfo`
      );

      if (!response.ok) {
        throw new Error(
          `Fetching field information failed: ${response.status}`
        );
      }

      const data = await response.json();
      setFieldInfo(data.items);
    } catch (err) {
      setError(err);
    }
  };

  const fetchStandardData = async (fieldId) => {
    if (!fieldId) return;

    try {
      const response = await fetch(
        `https://smartsolarirrigationsystem.azurewebsites.net/api/standardDataByFieldId/${fieldId}`
      );

      if (!response.ok) {
        throw new Error(`Fetching standard data failed: ${response.status}`);
      }

      const data = await response.json();
      setDeviceStandardData(data);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchDeviceData();
    const intervalId = setInterval(fetchDeviceData, 30000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    fetchFieldInformation();
  }, []);

  useEffect(() => {
    if (selectedField) {
      fetchStandardData(selectedField);
    }
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
