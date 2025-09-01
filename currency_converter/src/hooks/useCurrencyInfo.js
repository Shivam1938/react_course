import { useState, useEffect } from "react";

function usecurrencyInfo(currency) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [currency]);
  return data;
}

export default usecurrencyInfo;

  