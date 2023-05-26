import React, { useEffect, useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";

function Login({ setUser }) {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const loggedUser = {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
        };
        setUser(loggedUser);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });
    return unsubscribe;
  }, [setUser]);

  const signin = () => {
    signInWithPopup(auth, provider).catch(console.log);
  };

  return (
    <div className="m-2 p-2 py-4 w-full m-auto -translate-y-5">
      <div
        className="m-2 p-2 py-4 rounded shadow-lg transform bg-white w-full m-auto flex flex-col items-center"
        style={{ maxWidth: "500px" }}
      >
        <h1 className="text-4xl text-center text-gray-500 mb-5">Pictures</h1>
        <button
          className="border bg-blue-500 text-white px-7 py-2 cursor-pointer rounded hover:bg-blue-600"
          onClick={signin}
          disabled={isLoading}
        >
          Sign In With Google
        </button>
      </div>
    </div>
  );
}

export default Login;
