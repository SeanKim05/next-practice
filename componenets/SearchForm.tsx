import { useRouter } from "next/router";
import { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <input name="q" value={value} onChange={handleChange} />
      <button>검색</button>
    </form>
  );
}
