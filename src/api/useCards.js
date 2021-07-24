import React, { useState, useEffect } from "react";

export default function useCards() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://159.65.126.180/api/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return data;
}
