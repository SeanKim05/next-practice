// import styles from "@/styles/Home.module.css";
import SearchForm from "@/componenets/SearchForm";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const { query } = useRouter();
  const { q } = query;
  const searchQuery = typeof q === "string" ? q : "";
  return (
    <div>
      <h1>Codeitmall</h1>
      <SearchForm initialVal={searchQuery} />
      <ul>
        <li>
          <Link href="/products/1">첫 번째 상품</Link>
        </li>
        <li>
          <Link href="/products/2">두 번째 상품</Link>
        </li>
        <li>
          <Link href="/products/3">세 번째 상품</Link>
        </li>
        <li>
          <Link href="https://codeit.kr">코드잇</Link>
        </li>
      </ul>
    </div>
  );
}
