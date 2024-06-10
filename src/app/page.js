import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16 mt-20" id="about">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
          Introducing FOOD TO DOOR, your ultimate companion for bringing the best culinary delights right to your doorstep. Imagine a world where the rich aromas of your favorite dishes fill your home, without the hassle of cooking or stepping out. With FOOD TO DOOR, this is not just a dream but a delicious reality. Our app connects you to an extensive network of local restaurants and global cuisines, offering everything from hearty comfort foods to exotic gourmet experiences.
          </p>
          <p>FOOD TO DOOR stands out with its real-time order tracking, allowing you to monitor your meal's journey from the restaurant to your home, ensuring it arrives hot and fresh every time. We understand that every meal is unique, which is why our customizable order options let you specify dietary preferences, ingredient modifications, and special instructions to ensure your food is prepared just the way you like it.

Our app offers flexible payment methods, including credit and debit cards, digital wallets, and cash on delivery, all secured with the latest encryption technology for a hassle-free checkout process. Plus, with exclusive deals, promotions, and loyalty rewards, FOOD TO DOOR makes dining out more affordable and enjoyable.</p>
          <p>FOOD TO DOOR isn't just about convenience; it's about enhancing your overall dining experience. Whether you're craving comfort food, looking to try something new, or need a quick and reliable meal solution, FOOD TO DOOR delivers it all. Join our community of food lovers today by downloading the FOOD TO DOOR app on iOS and Android, and embark on a culinary journey like never before. Enjoy the best meals, the easiest ordering process, and the ultimate convenience of food delivery redefined with FOOD TO DOOR.</p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+46738123123">
            +40 728 624 158          </a>
        </div>
      </section>
    </>
  )
}
