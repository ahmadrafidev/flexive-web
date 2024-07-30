import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between items-center p-24">
      <section className="w-full mt-8 md:mt-14">
        <div className="flex flex-col items-center space-y-8 md:space-y-10 text-center">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-6xl md:text-8xl font-medium text-gray-900 dark:text-gray-50">
              Flexive
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-800 dark:text-gray-100 text-lg md:text-xl font-normal leading-loose">
              The ultimate app for seamless and flexible financial tracking, designed to empower your financial journey with ease.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center">
        <div className="space-y-8 md:space-y-10 text-center">
          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 dark:text-gray-50">
            Soon on iOS and Android
          </h2>
        </div>
      </section>
    </main>
  );
}
