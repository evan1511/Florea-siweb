'use client'
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-[#f8f3ea] min-h-screen">
      <Head>
        <title>Florea - Perfect gifts for you</title>
        <meta name="description" content="Send flowers to your favorite people" />
      </Head>

      <main>
        {/* Hero Section */}
        <div className="flex px-12 py-16">
          {/* Left Side Content */}
          <div className="w-1/2 flex flex-col justify-center">
            <h1 className="text-7xl font-serif text-[#3c3835] mb-4">
              Perfect gifts<br />for you
            </h1>
            <p className="text-lg text-gray-500 mb-8">
              Send To Your Favorite Human With The Best Flower<br />
              Send
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/dashboard/home-ad">
                <button className="bg-[#3c3835] text-white px-8 py-4 font-medium">
                  SIGN IN
                </button>
              </Link>
              <Link href="/get-started" className="flex items-center text-[#3c3835] font-medium">
                Get Started Now
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="w-1/2 flex justify-center items-center">
            <div className="w-96 h-96 rounded-full overflow-hidden relative">
              <Image 
                src="/images/flower-bouquet.jpg" 
                alt="Flower Bouquet" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}