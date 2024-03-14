import Gallery from "@/components/elements/Gallery";
import VideoMaker from "@/components/elements/Maker";
import { TinyMockup } from "@/components/elements/Mockups";
import Player from "@/components/elements/Player";
import { Titles } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen min-w-screen bg-white dark:bg-white text-black">
        <div className="h-screen w-screen flex flex-col items-center justify-center">
          {/* <Scene /> */}
          <VideoMaker />
        </div>
        {/* slide2 */}
        <div className="h-auto m-8">
          <div className="flex w-full items-center sm:items-start p-2 flex-col sm:flex-row sm:gap-0 gap-10">
            <div className="max-w-xl flex">
              <span className="text-purple-500 text-7xl">*</span>
              <h1 className="drop-shadow-2xl text-5xl md:text-6xl sm:text-7xl">
                Say Hello to a New Dimension of AR KIOSK Technologies
              </h1>
            </div>

            <div className="ml-0 sm:ml-auto">
              <div className="flex flex-col items-center justify-center gap-y-4 drop-shadow-xl py-10 sm:py-1">
                <Player />
              </div>
            </div>
          </div>
          <div className="md:px-10 sm:-mt-48 md:max-w-96 mt-0">
            <p className="text-lg font-medium text-justify leading-7 max-w-xl">
              Step into the future of fashion with our revolutionary AR Kiosk
              Technologies! Experience a new dimension of virtual cloth try-on,
              where style meets technology, transforming your shopping journey
              like never before.
            </p>
          </div>
        </div>
        {/* slide3 */}
        <div className="h-screen flex items-center justify-between pr-2 my-20">
          <div className="h-full pr-10">
            <Image
              src="/kiosk.png"
              alt="Picture of kiosk user"
              width={3000}
              height={700}
              className="h-full rounded-tr-3xl rounded-br-3xl object-cover"
            />
          </div>
          <div className="h-full flex flex-col justify-between items-start lg:pr-24">
            <h1 className="text-5xl font-medium md:text-7xl">
              Our <br />
              Services
            </h1>
            <div className="flex flex-col items-start">
              <span className="text-plumelight text-2xl font-semibold drop-shadow-xl">
                1.
              </span>
              <span className="text-4xl tracking-tight mb-4 font-bold drop-shadow-xl">
                Physical Kiosk
              </span>
              <div className="underline underline-offset-4 text-2xl font-light flex flex-col">
                <Link href="/" className="hover:text-plumelight">
                  Museum Kiosk
                </Link>
                <Link href="/" className="hover:text-plumelight">
                  Shopping Mall
                </Link>
                <Link href="/" className="hover:text-plumelight">
                  E-Commerce
                </Link>
                <Link href="/" className="hover:text-plumelight">
                  Events & Games
                </Link>
              </div>
              <Link href="/product">
                <button className="mt-10 flex gap-x-2 uppercase items-center hover:text-plumelight">
                  <p className="font-bold">Next</p>
                  <Image src="/arrow.svg" alt="arrow" width={20} height={20} />
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* slide4 */}
        <div className="hidden bg-transparent h-screen w-screen p-8 lg:flex justify-evenly items-center pointer-events-none">
          <div className="absolute z-10 backdrop-blur-xs w-screen h-screen grid place-content-center">
            <h1 className="text-9xl font-bold text-red-500 uppercase backdrop-blur-md w-screen text-center">
              Coming Soon
            </h1>
          </div>
          {Titles.map((titles, i) => (
            <div
              key={i}
              className={
                i % 2 !== 0 ? "text-center mt-36" : "text-center mb-20"
              }
            >
              <div className="-z-10">
                <TinyMockup source={titles.image} />
                <h2 className="uppercase mt-2 font-semibold tracking-tightest drop-shadow-xl">
                  {titles.text}
                </h2>
              </div>
            </div>
          ))}
        </div>
        {/* slide5 */}
        <div className="h-full flex mx-4 my-20 w-auto md:pl-14 items-center justify-center">
          <div>
            <h3 className="text-3xl sm:text-5xl md:text-7xl font-medium uppercase">
              Gallery
            </h3>
            {/* <Gallery /> */}
          </div>
        </div>
        {/* slide6 */}
        <div className="h-full md:my-20 my-8 mx-8 flex flex-col md:flex-row gap-y-8 justify-between">
          <div className="max-w-screen-md">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl text-left drop-shadow-xl">
              Take your brand to next level? Get in touch with us
            </h1>
          </div>
          <div className="flex items-end justify-end max-w-2xl w-full">
            <form
              action={`https://formspree.io/f/mbjbyywa`}
              method="POST"
              className="flex gap-x-4 w-full h-16 border-[1px] border-b-4 bg-transparent justify-end"
            >
              <input
                type="email"
                name="email"
                id="mail"
                className="w-full pl-2 placeholder:text-plumelight placeholder:text-xs placeholder:sm:text-md placeholder:lg:text-xl placeholder:xl:text-2xl uppercase outline-none bg-transparent"
                placeholder="Enter your email ID"
              />
              <button type="submit" title="Submit">
                <Image src="/arrow.svg" alt="arrow" width={50} height={50} />
              </button>
            </form>
          </div>
        </div>
        {/* slide7 */}
        <div className="h-full w-screen">
          {/* <Scene /> */}
          <video autoPlay loop muted playsInline>
            <source src="/bottomPlayer.webm" type="video/webm" />
          </video>
        </div>
      </main>
    </>
  );
}
