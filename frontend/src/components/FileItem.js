import React from 'react';

export const FileItem = ({ file }) => {
  return (
    <>
      <p>
        {file.filename} {file.name}
      </p>
      <p>{`${file.size} bytes`}</p>
    </>
  );
};
