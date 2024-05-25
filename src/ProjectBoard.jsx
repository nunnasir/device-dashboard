import { useContext, useEffect, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import Switch from "react-switch";
import switchImage from "./assets/Switch.jpg";
import waterImage from "./assets/WaterLevel.jpg";
import fertilizer from "./assets/fertilizer.png";
import phMeter from "./assets/ph-meter.png";
import Phosphorus from "./assets/phosphorus.png";
import potassium from "./assets/potassium.png";
import soilAnalysis from "./assets/soil-analysis.png";
import waterLevel from "./assets/water-level.png";
import { DeviceDataContext, FieldIdContext } from "./context";

export default function ProjectBoard() {
  const { selectedField, setSelectedField } = useContext(FieldIdContext);
  const { fieldInfo, deviceData } = useContext(DeviceDataContext);
  const [deviceStandardValue, setDeviceStandardValue] = useState({
    ph: "",
    mos: "",
    nit: "",
    phos: "",
    pot: "",
  });

  const { ph, mos, nit, phos, pot, wfr, water } = deviceData;

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedField(selectedValue);

    if (selectedValue == "Rice") {
      const updatedData = {
        ph: "6.7",
        mos: "70",
        nit: "80",
        phos: "20",
        pot: "40",
      };
      setDeviceStandardValue(updatedData);
    } else if (selectedValue == "Lentil") {
      const updatedData = {
        ph: "6.7",
        mos: "50",
        nit: "20",
        phos: "40",
        pot: "30",
      };
      setDeviceStandardValue(updatedData);
    } else {
      const updatedData = {
        ph: "",
        mos: "",
        nit: "",
        phos: "",
        pot: "",
        water: "",
        wfr: "",
      };
      setDeviceStandardValue(updatedData);
    }
  };

  const [isMeterOn, setIsMeterOn] = useState(false);

  const handleToggle = () => {
    if (water === 0) {
      setIsMeterOn(!isMeterOn);
    }
  };

  const [phNotificationMessage, setPhNotificationMessage] = useState("");
  const [nitrogenNotificationMessage, setNitrogenNotificationMessage] =
    useState("");
  const [phosphorusNotificationMessage, setPhosphorusNotificationMessage] =
    useState("");
  const [potasiumNotificationMessage, setPotasiumNotificationMessage] =
    useState("");
  const [soilNotificationMessage, setSoilNotificationMessage] = useState("");

  const getPhMessage = (senValue, stValue) => {
    if (senValue >= 0 && Number(stValue) >= 0) {
      if (senValue === Number(stValue)) {
        setPhNotificationMessage("PH within the standard range");
      } else if (senValue > Number(stValue)) {
        setPhNotificationMessage(
          "PH is above the standard range, Please consult with local agriculture office"
        );
      } else if (senValue < Number(stValue)) {
        setPhNotificationMessage(
          "PH is below the standard range. Please consult with local agriculture office."
        );
      }
    } else {
      setPhNotificationMessage("There is no any standard value");
    }
  };

  const getNitrogenMessage = (senValue, stValue) => {
    if (senValue >= 0 && Number(stValue) >= 0) {
      if (senValue === Number(stValue)) {
        setNitrogenNotificationMessage("Nitrogen within the standard range");
      } else if (senValue > Number(stValue)) {
        setNitrogenNotificationMessage(
          "Nitrogen is above the standard range. No Need to give Urea Fertilizer"
        );
      } else if (senValue < Number(stValue)) {
        setNitrogenNotificationMessage(
          "Nitrogen is below the standard range. Please provide Urea Fertilizer"
        );
      }
    } else {
      setNitrogenNotificationMessage("There is no any standard value");
    }
  };

  const getPhosphorusMessage = (senValue, stValue) => {
    if (senValue >= 0 && Number(stValue) >= 0) {
      if (senValue === Number(stValue)) {
        setPhosphorusNotificationMessage(
          "Phosphorus within the standard range"
        );
      } else if (senValue > Number(stValue)) {
        setPhosphorusNotificationMessage(
          "Phosphorus is above the standard range. No Need to give Phosphate Fertilizer"
        );
      } else if (senValue < Number(stValue)) {
        setPhosphorusNotificationMessage(
          "Phosphorus is below the standard range. Please provide Phosphate Fertilizer"
        );
      }
    } else {
      setPhosphorusNotificationMessage("There is no any standard value");
    }
  };

  const getPotasiumMessage = (senValue, stValue) => {
    if (senValue >= 0 && Number(stValue) >= 0) {
      if (senValue === Number(stValue)) {
        setPotasiumNotificationMessage("Potasium within the standard range");
      } else if (senValue > Number(stValue)) {
        setPotasiumNotificationMessage(
          "Potasium is above the standard range. No Need to give Potash Fertilizer"
        );
      } else if (senValue < Number(stValue)) {
        setPotasiumNotificationMessage(
          "Potasium is below the standard range. Please provide Potash Fertilizer."
        );
      }
    } else {
      setPotasiumNotificationMessage("There is no any standard value");
    }
  };

  const getSoilMessage = (senValue, stValue) => {
    if (senValue >= 0 && Number(stValue) >= 0) {
      if (senValue === Number(stValue)) {
        setSoilNotificationMessage("Soil Moisture within the standard range");
      } else if (senValue > Number(stValue)) {
        setSoilNotificationMessage(
          "Soil Moisture is above the standard range. No Need Irrigation"
        );
      } else if (senValue < Number(stValue)) {
        setSoilNotificationMessage(
          "Soil Moisture is below the standard range. Need Irrigation."
        );
      }
    } else {
      setSoilNotificationMessage("There is no any standard value");
    }
  };

  useEffect(() => {
    getPhMessage(ph, deviceStandardValue.ph);
  }, [ph, deviceStandardValue.ph]);

  useEffect(() => {
    getNitrogenMessage(nit, deviceStandardValue.nit);
  }, [nit, deviceStandardValue.nit]);

  useEffect(() => {
    getPhosphorusMessage(phos, deviceStandardValue.phos);
  }, [phos, deviceStandardValue.phos]);

  useEffect(() => {
    getPotasiumMessage(pot, deviceStandardValue.pot);
  }, [pot, deviceStandardValue.pot]);

  useEffect(() => {
    getSoilMessage(mos, deviceStandardValue.mos);
  }, [mos, deviceStandardValue.mos]);

  useEffect(() => {
    if (water === 1) {
      setIsMeterOn(0);
    } else if (water === 0) {
      setIsMeterOn(1);
    }
  }, [water]);

  return (
    <main className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Welcome to Dashboard</h2>

      {/* Input Fields */}
      <div className="flex flex-wrap mb-4">
        <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
          <label htmlFor="fieldId" className="block text-gray-700">
            Field Id
          </label>
          <select
            id="fieldId"
            value={selectedField}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          >
            {fieldInfo.map((field) => (
              <option key={field.id} value={field.id}>
                {field.fieldId}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
          <label htmlFor="dropdown" className="block text-gray-700">
            Crop Name
          </label>
          <select
            id="dropdown"
            value={selectedField}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          >
            {fieldInfo.map((field) => (
              <option key={field.id} value={field.name}>
                {field.name}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
          <label htmlFor="datetime" className="block text-gray-700">
            Date & Time
          </label>
          <input
            type="datetime-local"
            id="datetime"
            className="w-full border rounded-md px-3 py-2"
          />
        </div>
      </div>

      {/* Item List */}
      <div className="flex flex-wrap -mx-4">
        {/* Item 1 */}
        <div className="w-full md:w-1/3 px-4 mb-4">
          <div className="bg-white rounded-lg shadow-md relative">
            {/* Card Top (Title) */}
            <div className="bg-blue-500 text-white py-3 px-6 flex justify-between items-center">
              <h3 className="text-lg font-bold">PH</h3>
              <div className="relative group">
                <FaInfoCircle className="text-white cursor-pointer" />
                <div className="absolute right-0 w-64 bg-white text-gray-700 p-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <ul className="list-disc list-inside">
                    {phNotificationMessage}
                  </ul>
                </div>
              </div>
            </div>
            {/* Card Body */}
            <div className="flex flex-col md:flex-row justify-center items-center">
              {/* Left Section (Text) */}
              <div className="md:w-1/2 p-6">
                <p className="text-gray-700">
                  St.Value: {deviceStandardValue.ph} <br />
                  Sen.Value: {selectedField == "Rice" ? ph : ""}
                </p>
              </div>
              {/* Right Section (Image) */}
              <div className="md:w-1/2 p-6">
                <img src={phMeter} alt="PH Meter" className="w-32 h-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="w-full md:w-1/3 px-4 mb-4">
          <div className="bg-white rounded-lg shadow-md relative">
            {/* Card Top (Title) */}
            <div className="bg-blue-500 text-white py-3 px-6 flex justify-between items-center">
              <h3 className="text-lg font-bold">Nitrogen (N) - (mg/kg)</h3>
              <div className="relative group">
                <FaInfoCircle className="text-white cursor-pointer" />
                <div className="absolute right-0 w-64 bg-white text-gray-700 p-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <ul className="list-disc list-inside">
                    {nitrogenNotificationMessage}
                  </ul>
                </div>
              </div>
            </div>
            {/* Card Body */}
            <div className="flex flex-col md:flex-row justify-center items-center">
              {/* Left Section (Text) */}
              <div className="md:w-1/2 p-6">
                <p className="text-gray-700">
                  St.Value: {deviceStandardValue.nit} <br />
                  Sen.Value: {selectedField == "Rice" ? nit : ""}
                </p>
              </div>
              {/* Right Section (Image) */}
              <div className="md:w-1/2 p-6">
                <img src={fertilizer} alt="PH Meter" className="w-32 h-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="w-full md:w-1/3 px-4 mb-4">
          <div className="bg-white rounded-lg shadow-md relative">
            {/* Card Top (Title) */}
            <div className="bg-blue-500 text-white py-3 px-6 flex justify-between items-center">
              <h3 className="text-lg font-bold">Phosphorus (P) - (mg/kg)</h3>
              <div className="relative group">
                <FaInfoCircle className="text-white cursor-pointer" />
                <div className="absolute right-0 w-64 bg-white text-gray-700 p-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <ul className="list-disc list-inside">
                    {phosphorusNotificationMessage}
                  </ul>
                </div>
              </div>
            </div>
            {/* Card Body */}
            <div className="flex flex-col md:flex-row justify-center items-center">
              {/* Left Section (Text) */}
              <div className="md:w-1/2 p-6">
                <p className="text-gray-700">
                  St.Value: {deviceStandardValue.phos} <br />
                  Sen.Value: {selectedField == "Rice" ? phos : ""}
                </p>
              </div>
              {/* Right Section (Image) */}
              <div className="md:w-1/2 p-6">
                <img src={Phosphorus} alt="PH Meter" className="w-32 h-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* Item 4 */}
        <div className="w-full md:w-1/3 px-4 mb-4">
          <div className="bg-white rounded-lg shadow-md relative">
            {/* Card Top (Title) */}
            <div className="bg-blue-500 text-white py-3 px-6 flex justify-between items-center">
              <h3 className="text-lg font-bold">Potassium (K) - (mg/kg)</h3>
              <div className="relative group">
                <FaInfoCircle className="text-white cursor-pointer" />
                <div className="absolute right-0 w-64 bg-white text-gray-700 p-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <ul className="list-disc list-inside">
                    {potasiumNotificationMessage}
                  </ul>
                </div>
              </div>
            </div>
            {/* Card Body */}
            <div className="flex flex-col md:flex-row justify-center items-center">
              {/* Left Section (Text) */}
              <div className="md:w-1/2 p-6">
                <p className="text-gray-700">
                  St.Value: {deviceStandardValue.pot} <br />
                  Sen.Value: {selectedField == "Rice" ? pot : ""}
                </p>
              </div>
              {/* Right Section (Image) */}
              <div className="md:w-1/2 p-6">
                <img src={potassium} alt="PH Meter" className="w-32 h-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* Item 5 */}
        <div className="w-full md:w-1/3 px-4 mb-4">
          <div className="bg-white rounded-lg shadow-md">
            {/* Card Top (Title) */}
            <div className="bg-blue-500 text-white py-3 px-6">
              <h3 className="text-lg font-bold text-center">Water Level</h3>
            </div>
            {/* Card Body */}
            <div className="flex flex-col md:flex-row justify-center items-center">
              {/* Left Section (Text) */}
              <div className="md:w-1/2 p-6">
                <p className="text-gray-700">
                  Sen.Value: {selectedField == "Rice" ? water : ""}
                </p>
              </div>
              {/* Right Section (Image) */}
              <div className="md:w-1/2 p-6">
                <img src={waterLevel} alt="Image" className="w-32 h-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* Item 6 */}
        <div className="w-full md:w-1/3 px-4 mb-4">
          <div className="bg-white rounded-lg shadow-md relative">
            {/* Card Top (Title) */}
            <div className="bg-blue-500 text-white py-3 px-6 flex justify-between items-center">
              <h3 className="text-lg font-bold">Soil Moisture (%)</h3>
              <div className="relative group">
                <FaInfoCircle className="text-white cursor-pointer" />
                <div className="absolute right-0 w-64 bg-white text-gray-700 p-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <ul className="list-disc list-inside">
                    {soilNotificationMessage}
                  </ul>
                </div>
              </div>
            </div>
            {/* Card Body */}
            <div className="flex flex-col md:flex-row justify-center items-center">
              {/* Left Section (Text) */}
              <div className="md:w-1/2 p-6">
                <p className="text-gray-700">
                  St.Value: {deviceStandardValue.mos} <br />
                  Sen.Value: {selectedField == "Rice" ? mos : ""}
                </p>
              </div>
              {/* Right Section (Image) */}
              <div className="md:w-1/2 p-6">
                <img
                  src={soilAnalysis}
                  alt="PH Meter"
                  className="w-32 h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Item 7 */}
        <div className="w-full md:w-1/2 px-4 mb-4">
          <div className="bg-white rounded-lg shadow-md">
            {/* Card Top (Title) */}
            <div className="bg-blue-500 text-white py-3 px-6">
              <h3 className="text-lg font-bold text-center">
                Water Quantity (ml)
              </h3>
            </div>
            {/* Card Body */}
            <div className="flex flex-col md:flex-row justify-center items-center">
              {/* Left Section (Text) */}
              <div className="md:w-1/2 p-6">
                <p className="text-gray-700">
                  Sen.Value: {selectedField == "Rice" ? wfr : ""}
                </p>
              </div>
              {/* Right Section (Image) */}
              <div className="md:w-1/2 p-6">
                <img src={waterImage} alt="Image" className="w-32 h-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* Item 8 */}
        <div className="w-full md:w-1/2 px-4 mb-4">
          <div className="bg-white rounded-lg shadow-md">
            {/* Card Top (Title) */}
            <div className="bg-blue-500 text-white py-3 px-6">
              <h3 className="text-lg font-bold text-center">Irrigation</h3>
            </div>
            {/* Card Body */}
            <div className="flex flex-col md:flex-row justify-center items-center">
              {/* Left Section (Text) */}
              <div className="md:w-1/2 p-6">
                <div className="flex items-center mt-4">
                  <span className="mr-2 text-gray-700">Pump Off</span>
                  <Switch
                    onChange={handleToggle}
                    checked={isMeterOn}
                    onColor="#4CAF50"
                    offColor="#F44336"
                    uncheckedIcon={false}
                    checkedIcon={false}
                  />
                  <span className="ml-2 text-gray-700">Pump On</span>
                </div>
              </div>
              {/* Right Section (Image) */}
              <div className="md:w-1/2 p-6">
                <img src={switchImage} alt="Image" className="w-32 h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
