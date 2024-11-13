import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./SearchForm.module.css";

export default function SearchForm({
  initialVal = "",
}: {
  initialVal: string;
}) {
  const { push } = useRouter();
  const [value, setValue] = useState<string>(initialVal);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!value) return push("/");
    push(`/search?q=${value}`);
  }

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        className={styles.searchInput}
        name="q"
        value={value}
        placeholder="찾고 싶은 옷을 검색해보세요."
        onChange={handleChange}
      />
      <button className={styles.searchButton}>검색</button>
    </form>
  );
}
