import React, { useState, useEffect } from "react";

export default function useProducts(limit) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/?limit=${limit}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [limit]);
  return data;
}

