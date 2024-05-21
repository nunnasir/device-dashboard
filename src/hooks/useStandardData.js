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

  useEffect(() => {
    const fetchDeviceStandardData = async (fieldId) => {
      try {
        const response = await fetch(
          `https://smartsolarirrigationsystem.azurewebsites.net/api/standardDataByFieldId/23c325df-23d4-4f55-801c-cd4a1b4ffbc1`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setDeviceStandardData(data);
      } catch (err) {
        console.error(err);
        setDeviceStandardData({
          ph: "",
          mos: "",
          nit: "",
          phos: "",
          pot: "",
          water: "",
          wfr: "",
        });
      }
    };

    if (selectedField) {
      fetchDeviceStandardData(selectedField);
    }
  }, [selectedField]);

  return {
    deviceStandardData,
  };
};

export default useStandardData;
