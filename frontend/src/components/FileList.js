import React from 'react';
import { FileItem } from './FileItem';

export const FileList = ({ files }) => {
  return (
    <>
      {files.map((file) => (
        <FileItem file={file} />
      ))}
    </>
  );
};
