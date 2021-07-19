import React, { useState, useEffect } from "react";

export default function useCards() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return data;
}
