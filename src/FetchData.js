import React, { useEffect, useState } from "react";

function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://example.api.com").then((data) => setData(data));
  }, []);

  return <div>{data ? <p>Data:{data}</p> : <p>Loading...</p>}</div>;
}

export default FetchData;
