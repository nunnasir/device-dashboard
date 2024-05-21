/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect, useState } from "react";
import { FieldIdContext } from "../context";

const useStandardData = () => {
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

  console.log(selectedField);

  const fetchDeviceStandardData = async (fieldId) => {
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
      throw err.message;
    }
  };

  useEffect(() => {
    const fetchDeviceStandardDataAsync = async (selectedField) => {
      try {
        if (selectedField) {
          await fetchDeviceStandardData(selectedField);
        }
      } catch (error) {
        throw error.message;
      }
    };

    fetchDeviceStandardDataAsync(selectedField);
  }, [selectedField]);

  return {
    deviceStandardData,
  };
};

export default useStandardData;
