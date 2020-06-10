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
