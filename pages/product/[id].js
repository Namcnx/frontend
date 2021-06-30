import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Product = () => {
  const router = useRouter();
  const pathData = router.query;
  return (
    <h1 style={{ color: "blueviolet", textAlign: "center" }}>
      <center>Product ID: {pathData.id}</center>
   
          <br />
          <Link href="/"><a>Home</a></Link> |
          <Link href="/about"><a>about</a></Link> |
          <Link href="/service"><a>Service</a></Link> |
          <Link href="/product/P001"><a>product</a></Link>
          </h1>
    
  );
};
export default Product;
