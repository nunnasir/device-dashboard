import { useContext } from "react";
import { FaInfoCircle } from "react-icons/fa";
import fertilizer from "./assets/fertilizer.png";
import phMeter from "./assets/ph-meter.png";
import Phosphorus from "./assets/phosphorus.png";
import potassium from "./assets/potassium.png";
import soilAnalysis from "./assets/soil-analysis.png";
import waterLevel from "./assets/water-level.png";
import { DeviceDataContext } from "./context";

export default function ProjectBoard() {
  const { deviceData, deviceStandardData } = useContext(DeviceDataContext);

  console.log(deviceData);
  console.log(deviceStandardData);

  const { ph, mos, nit, phos, pot, wfr } = deviceData;

  return (
    <main className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Welcome to Dashboard</h2>

      {/* Input Fields */}
      {/* <div className="flex flex-wrap mb-4">
        <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
          <label htmlFor="name" className="block text-gray-700">
            Field Id
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter field id"
            className="w-full border rounded-md px-3 py-2"
          />
        </div>
        <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
          <label htmlFor="email" className="block text-gray-700">
            Crop Name
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter crop name"
            className="w-full border rounded-md px-3 py-2"
          />
        </div>
        <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
          <label htmlFor="time" className="block text-gray-700">
            Time
          </label>
          <input
            type="time"
            id="time"
            className="w-full border rounded-md px-3 py-2"
          />
        </div>
      </div> */}

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
                    <li>
                      If sen. Value = std. Value, PH within the standard range
                    </li>
                    <li>
                      If sen. Value {">"} std. Value, PH is above the standard
                      range, Please consult with local agriculture office
                    </li>
                    <li>
                      If sen. Value {"<"} std. Value, PH is below the standard
                      range. Please consult with local agriculture office.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Card Body */}
            <div className="flex flex-col md:flex-row justify-center items-center">
              {/* Left Section (Text) */}
              <div className="md:w-1/2 p-6">
                <p className="text-gray-700">
                  St.Value: {deviceStandardData.ph} <br />
                  Sen.Value: {ph}
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
              <h3 className="text-lg font-bold">Nitrogen (N)</h3>
              <div className="relative group">
                <FaInfoCircle className="text-white cursor-pointer" />
                <div className="absolute right-0 w-64 bg-white text-gray-700 p-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <ul className="list-disc list-inside">
                    <li>
                      If sen. Value = std. Value, Nitrogen within the standard
                      range
                    </li>
                    <li>
                      If sen. Value {">"} std. Value, Nitrogen is above the
                      standard range, Please consult with local agriculture
                      office
                    </li>
                    <li>
                      If sen. Value {"<"} std. Value, Nitrogen is below the
                      standard range. Please consult with local agriculture
                      office.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Card Body */}
            <div className="flex flex-col md:flex-row justify-center items-center">
              {/* Left Section (Text) */}
              <div className="md:w-1/2 p-6">
                <p className="text-gray-700">
                  St.Value: {deviceStandardData.nit} <br />
                  Sen.Value: {nit}
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
              <h3 className="text-lg font-bold">Phosphorus (P)</h3>
              <div className="relative group">
                <FaInfoCircle className="text-white cursor-pointer" />
                <div className="absolute right-0 w-64 bg-white text-gray-700 p-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <ul className="list-disc list-inside">
                    <li>
                      If sen. Value = std. Value, Phosphorus within the standard
                      range
                    </li>
                    <li>
                      If sen. Value {">"} std. Value, Phosphorus is above the
                      standard range, Please consult with local agriculture
                      office
                    </li>
                    <li>
                      If sen. Value {"<"} std. Value, Phosphorus is below the
                      standard range. Please consult with local agriculture
                      office.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Card Body */}
            <div className="flex flex-col md:flex-row justify-center items-center">
              {/* Left Section (Text) */}
              <div className="md:w-1/2 p-6">
                <p className="text-gray-700">
                  St.Value: {deviceStandardData.phos} <br />
                  Sen.Value: {phos}
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
              <h3 className="text-lg font-bold">Potassium (K)</h3>
              <div className="relative group">
                <FaInfoCircle className="text-white cursor-pointer" />
                <div className="absolute right-0 w-64 bg-white text-gray-700 p-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <ul className="list-disc list-inside">
                    <li>
                      If sen. Value = std. Value, Potassium within the standard
                      range
                    </li>
                    <li>
                      If sen. Value {">"} std. Value, Potassium is above the
                      standard range, Please consult with local agriculture
                      office
                    </li>
                    <li>
                      If sen. Value {"<"} std. Value, Potassium is below the
                      standard range. Please consult with local agriculture
                      office.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Card Body */}
            <div className="flex flex-col md:flex-row justify-center items-center">
              {/* Left Section (Text) */}
              <div className="md:w-1/2 p-6">
                <p className="text-gray-700">
                  St.Value: {deviceStandardData.pot} <br />
                  Sen.Value: {pot}
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
                  St.Value: {deviceStandardData.wfr} <br />
                  Sen.Value: {wfr}
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
              <h3 className="text-lg font-bold">Soil Moisture</h3>
              <div className="relative group">
                <FaInfoCircle className="text-white cursor-pointer" />
                <div className="absolute right-0 w-64 bg-white text-gray-700 p-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <ul className="list-disc list-inside">
                    <li>
                      If sen. Value = std. Value, Soil Moisture within the
                      standard range
                    </li>
                    <li>
                      If sen. Value {"<"} std. Value, Soil Moisture is below the
                      standard range
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Card Body */}
            <div className="flex flex-col md:flex-row justify-center items-center">
              {/* Left Section (Text) */}
              <div className="md:w-1/2 p-6">
                <p className="text-gray-700">
                  St.Value: {deviceStandardData.mos} <br />
                  Sen.Value: {mos}
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
      </div>
    </main>
  );
}
