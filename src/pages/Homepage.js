import React, { useEffect, useState } from "react";
import UploadForm from "../components/UploadForm";
import Image from "../components/Image";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import { db } from "../firebase";

const LIMIT = 5;

function Homepage({ user }) {
  const [pictures, setPicures] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const q = query(
      collection(db, "pictures"),
      orderBy("createdAt", "desc"),
      limit(5)
    );
    getDocs(q).then((snapshot) => {
      setPicures(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  const addPicture = (pic) => {
    setPicures((p) => [pic, ...p]);
  };

  const loadMore = () => {
    if (loading) return;

    const lastDocRef = pictures[pictures.length - 1].createdAt;
    const q = query(
      collection(db, "pictures"),
      orderBy("createdAt", "desc"),
      startAfter(lastDocRef),
      limit(5)
    );
    getDocs(q).then((snapshot) => {
      const pics = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      if (pics.length < LIMIT) setHasMore(false);
      if (pics.length > 0) {
        setPicures((prev) => [...prev, ...pics]);
      }
      setLoading(false);
    }); // end of getDocs
  };

  return (
    <div>
      <h1 className="text-2xl font-medium mb-2">Welcome {user.displayName}!</h1>
      <UploadForm user={user} addPicture={addPicture} />

      {/* <div className="grid grid-cols-1 gap-2 mt-5 sm:grid-cols-2 md:grid-cols-3"> */}
      <div className="images__container mt-5">
        {pictures.map((pic) => (
          <Image key={pic.id} pic={pic} />
        ))}
      </div>

      {pictures.length > 0 && (
        <button
          className="px-4 py-2 border cursor-pointer bg-gray-200 rounded hover:bg-gray-300 disabled:cursor-no-drop disabled:opacity-75"
          onClick={loadMore}
          disabled={!hasMore}
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Homepage;
