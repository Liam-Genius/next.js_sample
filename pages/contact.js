import Head from 'next/head'
import Link from 'next/link'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="할일관리서비스 투두입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>연락처 페이지</h1>
      <nav>
        <Link href='/'>
          <a>메인</a>
        </Link>

        <Link href='/about'>
          <a>어바웃</a>
        </Link>
        <Link>
          <a>연락처</a>
        </Link>
      </nav>
    </>
  )
}
