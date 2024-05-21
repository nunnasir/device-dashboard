import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import Header from "./Header";
import Login from "./Login";
import ProjectBoard from "./ProjectBoard";
import { DeviceDataProvider, FieldProvider } from "./provider";

export default function App() {
  const [authenticUser, setAuthenticUser] = useState(false);

  const handleAuthenticUser = (credential) => {
    if (credential.username === "admin" && credential.password === "123456Aa") {
      setAuthenticUser(true);
    } else {
      toast.error(`Invalid username or password`);
    }
  };

  const handleLogOut = () => {
    setAuthenticUser(false);
  };

  return (
    <FieldProvider>
      <DeviceDataProvider>
        {authenticUser ? (
          <>
            <Header onLogOut={handleLogOut} />
            <ProjectBoard />
            <Footer />
          </>
        ) : (
          <Login onAuthenticUser={handleAuthenticUser} />
        )}

        <ToastContainer position="top-right" autoClose={3000} theme="light" />
      </DeviceDataProvider>
    </FieldProvider>
  );
}
