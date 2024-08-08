import Image from "next/image";

export default function Loading() {
  return (
    <div className="container">
      <div className="text-center m-auto flex justify-center mt-40">
        <Image
          src={"/icons/Infinity@200px-200px.gif"}
          alt="loading..."
          width={200}
          height={200}
          className="w-auto h-auto rounded-[50%]"
          priority
        />
      </div>
    </div>
  );
}
