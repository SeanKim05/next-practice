import SearchForm from "@/componenets/SearchForm";
import { useRouter } from "next/router";
import React from "react";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;
  const searchQuery = typeof q === "string" ? q : "";
  return (
    <div>
      <SearchForm initialVal={searchQuery} />
      <h2>result {q}</h2>
    </div>
  );
}
