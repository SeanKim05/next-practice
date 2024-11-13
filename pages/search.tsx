import ProductList from "@/componenets/ProductList";
import SearchForm from "@/componenets/SearchForm";
import axios from "@/libs/axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Product = {
  id: string;
  name: string;
  imgUrl: string;
  price: number;
};

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
    <div>
      <SearchForm initialVal={searchQuery} />
      <ProductList products={products} />
    </div>
  );
}
