import "../styles/globals.css";
import Head from "next/head";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="할일관리서비스 투두 입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <Link href="/">
          <a style={{ color: "red" }}>메인</a>
        </Link>

        <Link href="/about">
          <a style={{ color: "blue" }}>어바웃</a>
        </Link>
        <Link href="contact">
          <a style={{ color: "pink" }}>연락처</a>
        </Link>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
