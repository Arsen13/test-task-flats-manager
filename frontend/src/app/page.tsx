import CreateButton from "./components/CreateButton";
import Main from "./components/Main";

export default function Home() {
  return (
    <>
      <header>
        <div className="w-full min-h-20 bg-slate-500 flex justify-center items-center">
          <h1 className="">Let&apos;s help you find your dream apartment.</h1>
          <CreateButton />
        </div>
      </header>

      <Main />
    </>
  );
}
