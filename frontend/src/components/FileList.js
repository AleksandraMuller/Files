import React from 'react';
import { FileItem } from './FileItem';
import TableBody from '@material-ui/core/TableBody';

export const FileList = ({ files }) => {
  return (
    <TableBody>
      {files.map((file, index) => (
        <FileItem file={file} index={index} files={files} />
      ))}
    </TableBody>
  );
};
