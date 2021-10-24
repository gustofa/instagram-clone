import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { firebase, db, storage } from "./firebase.js";
import "./ImageUpload.css";

function ImageUpload({ username }) {
  // Create the file metadata
  var metadata = {
    contentType: "image/jpeg",
  };

  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      console.log("before set image: " + e.target.files[0]);
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    console.log(`images/${image.name}`);
    const uploadTask = storage
      .ref()
      .child(`images/${image.name}`)
      .put(image, metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log("Error uploadTask.on : " + error);
      },
      () => {
        console.log("uploadTask completo!");
        //post image inside db
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            // Add a new document with a generated id.
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
              userName: username,
            });

            setProgress(0);
            setCaption("");
            setImage(null);
          });
      }
    );
  };

  return (
    <div className="imageupload">
      <progress className="imageupload_progress" value={progress} max="100" />
      <input
        type="text"
        placeholder="Insert a caption..."
        onChange={(event) => setCaption(event.target.value)}
        value={caption}
      />
      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}

export default ImageUpload;
