import React, { useEffect, useState } from "react";
import { fetchData } from "./services/fetch-data-service";

const App = () => {
  const [data, setData] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetchData()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && <h1>Loading</h1>}
      {data && (
        <>
          <h1>Data</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      )}

      {error && (
        <>
          <h1>Error</h1>
          <p>{error}</p>
        </>
      )}
    </div>
  );
};

export default App;
