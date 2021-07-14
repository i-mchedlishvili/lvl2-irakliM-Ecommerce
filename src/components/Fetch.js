import React, { useState, useEffect, setIsLoading } from "react";
import { useParams } from "react-router";

function Fetch() {
  const [data, setData] = useState({});
  const { id } = useParams();

  setIsLoading(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((item) => {
        setData({
          title: item.title,
          price: item.price,
          img: item.image,
          id: item.id,
          description: item.description,
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, []);
}

export default Fetch;

/*
const [data, setData] = useState(null);
useEffect(() => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => setData(json));
}, []);*/
