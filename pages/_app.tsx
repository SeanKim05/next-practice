import Header from "@/componenets/Header";
import "../styles/global.css";
import type { AppProps } from "next/app";
import Container from "@/componenets/Container";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}
