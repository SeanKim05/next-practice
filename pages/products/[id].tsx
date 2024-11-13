import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "@/libs/axios";
import SizeReviewList from "@/componenets/SizeReview";

type Product = {
  name: string;
  imgUrl: string;
};

type SizeReview = {
  id: string;
  createdAt: string;
  sex: Sex;
  height: number;
  size: string;
  fit: Fit;
};

type Sex = "male" | "female";
type Fit = "small" | "good" | "big";

export default function Products() {
  const [product, setProduct] = useState<Product | null>(null);
  const [sizeReviews, setSizeReviews] = useState<SizeReview[]>([]);
  const router = useRouter();
  const { id } = router.query;

  async function getProduct(targetId: string) {
    const res = await axios.get(`/products/${targetId}`);
    const nextProducts = res.data ?? [];
    setProduct(nextProducts);
  }
  async function getSizeReview(targetId: string) {
    const res = await axios.get(`/size_reviews/?product_id=${targetId}`);
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
      <SizeReviewList sizeReviews={sizeReviews} />
    </div>
  );
}
