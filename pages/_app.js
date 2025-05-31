import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
    <div className="sticky top-0 z-[9999] w-full shadow backdrop-blur-lg backdrop-saturate-150">
      <Navbar />
      </div>
      <Component {...pageProps} />
    </>
  );
}
