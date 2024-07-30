import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col h-[300px] items-center justify-center relative bg-sky-500 rounded-b-2xl">
        <h1 className="text-5xl font-bold text-white tracking-widest">Search a WORD</h1>
        <div className="flex gap-2 items-center bg-gray-100 absolute -bottom-8 rounded-lg w-[600px] py-2 px-4">
          <span className="material-symbols-rounded !text-2xl">search</span>
          <input type="text" className="p-4 w-full bg-transparent focus-visible:outline-none" />
        </div>
      </div>
    </div>
  );
}
