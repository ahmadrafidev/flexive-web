import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between items-center p-24">
      <section className="w-full mt-6 md:mt-10">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-6xl md:text-8xl font-medium text-gray-900 dark:text-gray-50">
              Flexive
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-800 dark:text-gray-100 text-lg md:text-xl font-normal leading-loose">
              The ultimate financial app for seamless and flexible financial tracking. <br/>
              Designed to empower your financial journey with ease.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center">
        <div className="space-y-2 md:space-y-4 text-center">
          <h2 className="text-2xl md:text-4xl font-medium text-gray-900 dark:text-gray-50">
            Soon on iOS and Android.
          </h2>
          <p className="text-xs md:text-sm font-normal text-gray-900 dark:text-gray-300">
            Engineered with passion by <Link href="https://x.com/rafiwiranaa" passHref className="underline" aria-label="Visit Rafi's Twitter">Rafi</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
