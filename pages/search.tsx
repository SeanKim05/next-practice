import ProductList from "@/componenets/ProductList";
import SearchForm from "@/componenets/SearchForm";
import axios from "@/libs/axios";
import styles from "@/styles/Search.module.css";
import { Product } from "@/types/product";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;
  const searchQuery = typeof q === "string" ? q : "";

  const [products, setProducts] = useState<Product[]>([]);

  async function getProduct(query: string) {
    const res = await axios.get(`/products/?q=${query}`);
    console.log(res);
    const nextProducts = res.data.results ?? [];
    setProducts(nextProducts);
  }

  useEffect(() => {
    if (typeof q === "string") getProduct(q);
  }, [q]);

  return (
    <>
      <SearchForm initialVal={searchQuery} />
      <h2 className={styles.title}>
        <span className={styles.keyword}>{q}</span> 검색 결과
      </h2>
      <ProductList className={styles.productList} products={products} />
    </>
  );
}
