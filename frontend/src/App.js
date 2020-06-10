import React, { useState, useEffect } from 'react';
import { fetchData } from './services/services';

export const App = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData(setError, setFiles);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form
        id="uploadForm"
        action="http://localhost:9000/upload"
        method="post"
        encType="multipart/form-data"
      >
        <input type="file" name="myFile" />
        <input type="text" name="description" placeholder="description" />
        <input type="text" name="author" placeholder="author" />
        <button type="submit">Upload File</button>
      </form>
      {files.map((file) => (
        <>
          <p>
            {file.filename} {file.name}
          </p>
          <p>{`${file.size} bytes`}</p>
        </>
      ))}
    </>
  );
};
