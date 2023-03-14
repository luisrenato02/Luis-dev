import "../styles/globals.css";
import { Navbar } from "../components/Navbar";
import { Home } from "../components/Home";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Skills } from "@/components/Skills";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Luis | dev</title>
      </Head>

      <Navbar />
      <Home />
      <Skills />
    </>
  );
}
