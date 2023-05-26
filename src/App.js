import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="bg-gray-50 flex flex-col min-h-screen py-5">
      <div className="flex-grow flex flex-col mx-auto w-full max-w-screen-md">
        {user && <Navbar setUser={setUser} />}
        <div className="flex-grow flex flex-col pt-4 px-8 pb-10">
          {user ? (
            <Routes>
              <Route path="/" element={<Homepage user={user} />} />
              <Route path="/profile" element={<ProfilePage user={user} />} />
            </Routes>
          ) : (
            <Login setUser={setUser} />
          )}
        </div>
        <div className="px-8"></div>
      </div>
    </div>
  );
}

export default App;
