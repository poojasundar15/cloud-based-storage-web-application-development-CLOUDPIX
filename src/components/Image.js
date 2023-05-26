import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import React from "react";
import { db, storage } from "../firebase";

function Image({ pic, removePicture }) {
  const deletePicture = async () => {
    try {
      const fileRef = ref(storage, `images/${pic.filename}`);
      await deleteObject(fileRef);
      await deleteDoc(doc(db, "pictures", pic.id));
      removePicture(pic.id);
    } catch (error) {
      console.log("Error while deleting");
    }
  };

  return (
    <div className="image">
      <img src={pic.picURL} alt="" className="image__img" />

      <div className="image__footer">
        <span className="image__footerLeft">
          <img
            src={pic.photoURL}
            className="rounded-full h-10 w-10 sm:h-8 sm:w-8"
            alt={pic.displayName}
          />
          <h4 className="image__footerLeftName">{pic.displayName}</h4>
        </span>
        {removePicture && (
          <button
            className="bg-gray-50 rounded px-2 py-1"
            onClick={deletePicture}
            title="Delete"
          >
            &#10006;
          </button>
        )}
      </div>
    </div>
  );
}

export default Image;
