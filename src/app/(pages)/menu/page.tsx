"use client";

import { Box } from "@mui/material";

import { useEffect, useState } from "react";

const MenuPage = () => {
  const [data, setData] = useState();

  const fetcher = async () => {
    let res = await fetch("http://localhost:8000/api/products/products-tabs", {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    console.log("res", res);
    let data = await res.json();
    setData(data);
  };
  useEffect(() => {
    fetcher();
  }, []);
  console.log("test", data);

  return (
    <div className="container mx-auto">
      <h1>menu page lorem</h1>
    </div>
  );
};

export default MenuPage;
