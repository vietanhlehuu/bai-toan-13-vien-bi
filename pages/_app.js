import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bài toán cân 13 viên bi</title>
        <link rel="shortcut icon" href="/logo.jpeg" type="image/x-icon" />
        <meta
          name="description"
          content="Cho 13 viên bi trong đó có 1 viên bi khác khối lượng (lớn hơn hoặc bé hơn) sử dụng cân cân bằng, trong 3 lần cân tìm được viên bi đó"
        />
        <meta property="og:title" content="Bài toán cân 13 viên bi" />
        <meta
          property="og:description"
          content="Cho 13 viên bi trong đó có 1 viên bi khác khối lượng (lớn hơn hoặc bé hơn) sử dụng cân cân bằng, trong 3 lần cân tìm được viên bi đó"
        />
        <meta property="og:image" content="/placeholder.png" />
        <meta property="og:url" content="https://www.lehuuvietanh.me" />
      </Head>
      <Component {...pageProps} />{" "}
    </>
  );
}

export default MyApp;
