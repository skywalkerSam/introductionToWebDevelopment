import Image from "next/image";
import styles from "@/app/ui/home.module.css";
import { firaCode } from "./ui/fonts";
// import { ubuntu } from "./ui/fonts";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Image
        src="/rain.jpg"
        width={900}
        height={600}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <Image
        src="/the-horizon.jpg"
        width={560}
        height={620}
        className="block md:hidden"
        alt="Screenshot of the dashboard project showing mobile version"
      />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* Tailwind CSS */}
        {/* <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black" /> */}
        {/* CSS Modules */}
        <div className={styles.vercelLogo}></div>
        {/* Custom Font */}
        <h1 className={`${firaCode.className} text-3xl text-gray-400`}>Hello, World!</h1>
        {/* <h2 className={`${ubuntu.className} text-3xl text-gray-400`}>Hello, World!</h2> */}
      </main>
    </div>
  );
}
