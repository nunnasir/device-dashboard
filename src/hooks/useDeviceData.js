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

  const [deviceStandardData, setDeviceStandardData] = useState({
    ph: "",
    mos: "",
    nit: "",
    phos: "",
    pot: "",
    water: "",
    wfr: "",
  });

  const [fieldInfo, setFieldInfo] = useState([]);

  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });

  const [error, setError] = useState(null);

  const { selectedField } = useContext(FieldIdContext);

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

  const fetchDeviceStandardData = async (fieldId) => {
    console.log(fieldId);

    try {
      // Make the fetch call
      const response = await fetch(
        `https://smartsolarirrigationsystem.azurewebsites.net/api/standardDataByFieldId/${fieldId}`
      );

      if (!response.ok) {
        const updatedData = {
          ph: "",
          mos: "",
          nit: "",
          phos: "",
          pot: "",
          water: "",
          wfr: "",
        };

        setDeviceStandardData(updatedData);
        // const errorMessage = `Fetchibg standard data failed: ${response.status}`;
        // throw new Error(errorMessage);
      }

      const data = await response.json();

      // console.log(data);
      const updateDeviceStandardData = {
        ph: data.ph,
        mos: data.mos,
        nit: data.nit,
        phos: data.phos,
        pot: data.pot,
        water: data.water,
        wfr: data.wfr,
      };

      setDeviceStandardData(updateDeviceStandardData);
    } catch (err) {
      setError(err);
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
    const fetchDeviceStandardDataAsync = async () => {
      try {
        if (selectedField) {
          await fetchDeviceStandardData(selectedField);
        }
      } catch (error) {
        setError(error);
      }
    };

    fetchDeviceStandardDataAsync();
  }, [selectedField]);

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

  return {
    deviceData,
    fieldInfo,
    deviceStandardData,
    error,
    loading,
  };
};

export default useDeviceData;
