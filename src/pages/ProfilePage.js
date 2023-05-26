import React, { useEffect, useState } from "react";
import Image from "../components/Image";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

function ProfilePage({ user }) {
  const [pictures, setPicures] = useState([]);

  useEffect(() => {
    getDocs(
      query(collection(db, "pictures"), where("uid", "==", user.uid))
    ).then((snapshot) => {
      setPicures(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, [user.uid]);

  const removePicture = (picId) => {
    setPicures((prev) => prev.filter((p) => p.id !== picId));
  };

  return (
    <div>
      <h1 className="text-2xl font-medium">{user.displayName} pictures</h1>

      <div className="images__container mt-5">
        {pictures.map((pic) => (
          <Image
            key={pic.id}
            pic={pic}
            isMyImage={true}
            removePicture={removePicture}
          />
        ))}
      </div>
    </div>
  );
}

export default ProfilePage;
