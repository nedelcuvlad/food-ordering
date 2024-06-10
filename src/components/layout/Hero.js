import Right from "@/components/icons/Right";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero md:mt-24">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold">
          Everything<br />
          is better<br />
          with &nbsp;
          <span className="text-primary text-lime-600">
            FRESH FOOD
          </span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
      Enjoy life with fresh food every day. Our variety will help you find the best dish for your taste
        </p>
        <div className="flex gap-4 text-sm">
          <button className="flex justify-center bg-lime-600 uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
            Order now
            <Right />
          </button>
          <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <Right />
          </button>
        </div>
      </div>
      <div className="relative hidden md:block">
        <Image src={'/food.jpg'} layout={'fill'} objectFit={'contain'} alt={'pizza'} />
      </div>
    </section>
  );
}