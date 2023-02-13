import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="h-screen overflow-auto">
        <Navbar />
        <Head>
          <title>Home</title>
          <meta name="description" content="Home" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <body>
          <div className="home-page-img mt-[10px]">
            <figure>
              <img src="/home_page_img.jpg" alt="home page image" />
            </figure>
          </div>
          {/* <Footer /> */}
        </body>
      </div>
    </>
  );
}
