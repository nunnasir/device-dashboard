import { useContext } from "react";
import fertilizer from "./assets/fertilizer.png";
import phMeter from "./assets/ph-meter.png";
import Phosphorus from "./assets/phosphorus.png";
import potassium from "./assets/potassium.png";
import soilAnalysis from "./assets/soil-analysis.png";
import waterLevel from "./assets/water-level.png";
import { DeviceDataContext } from "./context";

export default function ProjectBoard() {
  const { deviceData } = useContext(DeviceDataContext);
  const { ph, mos, nit, phos, pot, wfr } = deviceData;

  return (
    <main className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Welcome to Dashboard</h2>

      {/* Input Fields */}
      <div className="flex flex-wrap mb-4">
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
      </div>

      {/* Item List */}
      <div className="flex flex-wrap -mx-4">
        {/* Item 1 */}
        <div className="w-full md:w-1/3 px-4 mb-4">
          <div className="bg-white rounded-lg shadow-md">
            {/* Card Top (Title) */}
            <div className="bg-blue-500 text-white py-3 px-6">
              <h3 className="text-lg font-bold text-center">PH</h3>
            </div>
            {/* Card Body */}
            <div className="flex flex-col md:flex-row justify-center items-center">
              {/* Left Section (Text) */}
              <div className="md:w-1/2 p-6">
                <p className="text-gray-700">
                  St.Value: {ph} <br />
                  Sen.Value
                </p>
              </div>
              {/* Right Section (Image) */}
              <div className="md:w-1/2 p-6">
                <img src={phMeter} alt="Image" className="w-32 h-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="w-full md:w-1/3 px-4 mb-4">
          <div className="bg-white rounded-lg shadow-md">
            {/* Card Top (Title) */}
            <div className="bg-blue-500 text-white py-3 px-6">
              <h3 className="text-lg font-bold text-center">Nitrogen (N)</h3>
            </div>
            {/* Card Body */}
            <div className="flex flex-col md:flex-row justify-center items-center">
              {/* Left Section (Text) */}
              <div className="md:w-1/2 p-6">
                <p className="text-gray-700">
                  St.Value: {nit} <br />
                  Sen.Value
                </p>
              </div>
              {/* Right Section (Image) */}
              <div className="md:w-1/2 p-6">
                <img src={fertilizer} alt="Image" className="w-32 h-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="w-full md:w-1/3 px-4 mb-4">
          <div className="bg-white rounded-lg shadow-md">
            {/* Card Top (Title) */}
            <div className="bg-blue-500 text-white py-3 px-6">
              <h3 className="text-lg font-bold text-center">Phosphorus (P)</h3>
            </div>
            {/* Card Body */}
            <div className="flex flex-col md:flex-row justify-center items-center">
              {/* Left Section (Text) */}
              <div className="md:w-1/2 p-6">
                <p className="text-gray-700">
                  St.Value: {phos} <br />
                  Sen.Value
                </p>
              </div>
              {/* Right Section (Image) */}
              <div className="md:w-1/2 p-6">
                <img src={Phosphorus} alt="Image" className="w-32 h-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* Item 4 */}
        <div className="w-full md:w-1/3 px-4 mb-4">
          <div className="bg-white rounded-lg shadow-md">
            {/* Card Top (Title) */}
            <div className="bg-blue-500 text-white py-3 px-6">
              <h3 className="text-lg font-bold text-center">Potassium (K)</h3>
            </div>
            {/* Card Body */}
            <div className="flex flex-col md:flex-row justify-center items-center">
              {/* Left Section (Text) */}
              <div className="md:w-1/2 p-6">
                <p className="text-gray-700">
                  St.Value: {pot} <br />
                  Sen.Value
                </p>
              </div>
              {/* Right Section (Image) */}
              <div className="md:w-1/2 p-6">
                <img src={potassium} alt="Image" className="w-32 h-auto" />
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
                  St.Value: {wfr} <br />
                  Sen.Value
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
          <div className="bg-white rounded-lg shadow-md">
            {/* Card Top (Title) */}
            <div className="bg-blue-500 text-white py-3 px-6">
              <h3 className="text-lg font-bold text-center">Soil Moisture</h3>
            </div>
            {/* Card Body */}
            <div className="flex flex-col md:flex-row justify-center items-center">
              {/* Left Section (Text) */}
              <div className="md:w-1/2 p-6">
                <p className="text-gray-700">
                  St.Value: {mos} <br />
                  Sen.Value
                </p>
              </div>
              {/* Right Section (Image) */}
              <div className="md:w-1/2 p-6">
                <img src={soilAnalysis} alt="Image" className="w-32 h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
