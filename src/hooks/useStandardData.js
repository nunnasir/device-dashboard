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
          `https://smartsolarirrigationsystem.azurewebsites.net/api/standardDataByFieldId/${fieldId}`
        );

        if (!response.ok) {
          setDeviceStandardData({
            ph: "",
            mos: "",
            nit: "",
            phos: "",
            pot: "",
            water: "",
            wfr: "",
          });
          return;
        }

        const data = await response.json();

        setDeviceStandardData({
          ph: data.ph,
          mos: data.mos,
          nit: data.nit,
          phos: data.phos,
          pot: data.pot,
          water: data.water,
          wfr: data.wfr,
        });
      } catch (err) {
        console.error(err.message);
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
