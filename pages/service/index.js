import Head from "next/head";
import Link from "next/link";
export default function service() {
  return (
    <div>
      <head>
        <title>รับบทบริการเป็นผู้ร้าย</title>
      </head>
      <div>
        <center>
          <h1>Service pages</h1>

          <br />
          <Link href="/"><a>Home</a></Link> |
          <Link href="/about"><a>about</a></Link> |
          <Link href="/service"><a>Service</a></Link> |
          <Link href="/product/P001"><a>product</a></Link>
        </center>
      </div>
    </div>
  );
}
