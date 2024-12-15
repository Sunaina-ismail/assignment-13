

import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="w-full h-[400px] md:h-[300px] flex flex-col gap-y-4 items-center justify-center">
  <h2 className="mt-4 text-xl text-center sm:text-2xl font-medium text-black">Please sign in to continue using the website.</h2> 
  <button className="bg-black  hover:bg-gray-800 text-lg md:text-xl px-6 py-2 text-white rounded-xl"><Link href={"/sign-in"}>Sign In</Link></button> 
 
    </div>
    </>
  );
}
