import React from 'react';

export const Form = () => {
  return (
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
  );
};
