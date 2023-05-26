import React, { useRef, useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function UploadForm({ user, addPicture }) {
  const fileInputRef = useRef();
  const [message, setMessage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uplaoding, setUploading] = useState(false);
  const [file, setFile] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    const filename = `img-${Math.floor(Math.random() * 90000000) + 10000}-${
      file.name.split(".").reverse()[0]
    }`;
    const storageRef = ref(storage, `images/${filename}`);

    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        setMessage({ text: "Something went wrong!", type: "red" });
        setTimeout(() => setMessage(null), 3000);
        setUploading(false);
        setProgress(0);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          const newPic = {
            uid: user.uid,
            picURL: downloadURL,
            filename: filename,
            displayName: user.displayName,
            photoURL: user.photoURL,
            createdAt: serverTimestamp(),
          };
          addDoc(collection(db, "pictures"), newPic).then((docRef) => {
            newPic.id = docRef.id;
            addPicture(newPic);
          });
          setMessage({ text: "Succesfully Uploaded!", type: "green" });
          setTimeout(() => setMessage(null), 3000);
          setUploading(false);
          setProgress(0);
          fileInputRef.current.value = "";
        });
      }
    );
  };

  const handleChange = (e) => {
    const [fil] = e.target.files;
    if (!fil.type.startsWith("image")) {
      setMessage({ text: "You can only upload image", type: "sky" });
      setTimeout(() => setMessage(null), 3000);
      return;
    }
    setFile(fil);
  };

  return (
    <form className="border p-3 rounded " onSubmit={handleSubmit}>
      <div className="flex justify-between mb-2">
        <input
          type="file"
          onChange={handleChange}
          accept="image/*"
          ref={fileInputRef}
        />
        <button
          className="px-3 border cursor-pointer rounded hover:bg-gray-100"
          disabled={uplaoding}
        >
          Upload
        </button>
      </div>
      <div className="w-full bg-gray-200 h-1 rounded">
        <div
          className="bg-blue-600 h-1 rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      {message?.text && (
        <p className={`mt-1 mb-1 text-${message.type}-600`}>{message.text}</p>
      )}
    </form>
  );
}

export default UploadForm;
