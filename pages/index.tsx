import styles from "@/styles/Home.module.css";
import ProductList from "@/componenets/ProductList";
import SearchForm from "@/componenets/SearchForm";
import axios from "@/libs/axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";

export default function Home() {
  const { query } = useRouter();
  const { q } = query;
  const searchQuery = typeof q === "string" ? q : "";
  const [products, setProducts] = useState<Product[]>([]);

  async function getProduct() {
    const res = await axios.get(`/products`);
    const nextProducts = res.data.results ?? [];
    setProducts(nextProducts);
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <SearchForm initialVal={searchQuery} />
      <ProductList className={styles.products} products={products} />
    </>
  );
}
