/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Login({ onAuthenticUser }) {
  const [credential, setCredential] = useState({
    username: "",
    password: "",
  });

  const handleChange = (evt) => {
    const name = evt.target.name;
    let value = evt.target.value;

    if (name === "tags") {
      value = value.split(",");
    }

    setCredential({
      ...credential,
      [name]: value,
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 py-8 w-1/5">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={credential.username}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={credential.password}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              onAuthenticUser(credential);
            }}
            className="bg-blue-500 text-white rounded-md px-4 py-2 w-full font-semibold hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
