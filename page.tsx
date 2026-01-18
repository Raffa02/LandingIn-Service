import Image from "next/image";

export default function Home() {
  return (
    <main>
      <nav>
        <div className="flex justify-between ml-10 mr-8">
          <div className="col-span-2">        
            <a className="border-4 border-red-500">Logo</a>
          </div>
          <ul>
            <li>Our Projects</li>
            <li>Language</li>
          </ul>
        </div>
      </nav>
      <div className="flex flex-col items-center h-screen">
        <div className="containerimg">
          <p>Hero Image</p>
        </div>
        <div className="containertittle">
          <h1 className="text-4xl">Where Your Business First Lands Online.</h1>
        </div>
        <div className="containertext">
          <h2>What we use</h2>
        </div>
      </div>
    </main>
  );
}
