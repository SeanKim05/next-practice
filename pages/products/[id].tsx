import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "@/libs/axios";

type Product = {
  name: string;
  imgUrl: string;
};

export default function Products() {
  const [product, setProduct] = useState<Product | null>(null);
  const [sizeReviews, setSizeReviews] = useState();
  const router = useRouter();
  const { id } = router.query;

  async function getProduct(targetId: string) {
    const res = await axios.get(`/products/${targetId}`);
    const nextProducts = res.data;
    setProduct(nextProducts);
  }
  async function getSizeReview(targetId: string) {
    const res = await axios.get(`/size_review/?product_id=${targetId}`);
    const nextSizeReview = res.data.results;
    setSizeReviews(nextSizeReview);
  }

  useEffect(() => {
    if (!id) return;
    if (typeof id === "string") {
      getProduct(id);
      getSizeReview(id);
    }
  }, [id]);

  if (!product) return null;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.imgUrl} alt="asss" />
    </div>
  );
}
