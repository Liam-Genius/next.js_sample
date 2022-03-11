import Head from "next/head";
import Link from "next/link";
import reactDom from "react-dom";

export default function Home() {
  return (
    <>
      <Head>
        <title>메인 페이지</title>
        <meta name="description" content="투두 메인페이지 입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>메인 페이지</h1>
      <Link href="/">
        <a style ={{color: "blue"}}>메인</a>
      </Link>

      <Link href="/about">
        <a style = {{color: "pink"}}>어바웃</a>
      </Link>
    </>
  );
}
