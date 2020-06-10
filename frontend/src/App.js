import React, { useState, useEffect } from 'react';
import { fetchData, addFile } from './services/services';
import { FileList } from './components/FileList';
import { Form } from './components/Form';
import { Header } from 'components/Header';

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
      <Header />
      <Form />
      <FileList files={files} />
    </>
  );
};
