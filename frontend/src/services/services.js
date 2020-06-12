export const fetchData = async (setError, setFiles) => {
  const resp = await fetch(`http://localhost:9000/files`);
  const json = await resp.json();
  if (json.status_code === 34) {
    setError(true);
  } else {
    setFiles(json);
    console.log(json);
  }
};

export const deleteFile = (id) => {
  fetch(`http://localhost:9000/file/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then(() => {
      window.location.reload();
    });
};
