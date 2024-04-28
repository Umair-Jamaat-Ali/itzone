import Image from "next/image";
import img from '../../../public/assets/bottle.jpg'


export default function ScrollAnimation() {
  return (
    <>
      <div className="bg-green-400 rounded-full w-24 h-24 animate-spin duration-1000">
        {/* <Image width={200} height={200} src={img}/> */}
        <p>hello</p>
      </div>
    </>
  );
}
