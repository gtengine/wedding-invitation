import {
  Bebas_Neue,
  Black_Han_Sans,
  Dancing_Script,
  Josefin_Sans,
  Playfair_Display,
} from "next/font/google";
import Image from "next/image";

const NotoSerifKorean = Black_Han_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const DancingScript = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Welcome() {
  return (
    <section className="flex flex-col items-center touch-none">
      <div className="z-10 w-4/5 flex flex-col justify-center items-center">
        <h1 className={`${DancingScript.className} text-5xl pt-10`}>
          Wedding invitation
        </h1>
        <div
          className={`pt-5 w-4/5 flex justify-between items-center text-2xl ${NotoSerifKorean.className}`}
        >
          <span>민경태</span>
          <span>+3658</span>
          <span>김난영</span>
        </div>
      </div>
      <Image src="/img-1.JPG" alt="img-1" fill objectFit="contain" />
    </section>
  );
}
