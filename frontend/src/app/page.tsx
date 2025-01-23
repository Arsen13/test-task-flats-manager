import FlatCards from "./components/FlatCards";

export default function Home() {
  return (
    <>
      <header>
        <div className="w-full min-h-20 bg-slate-500 flex justify-center items-center">
          <h1 className="">Let's help you find your dream apartment.</h1>
        </div>
      </header>

      <main>
        <FlatCards />
      </main>
    </>
  );
}
