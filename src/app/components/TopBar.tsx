export default function TopBar() {
  return (
    <header className="w-full px-4 py-3 border-b flex items-center justify-between bg-white">
      <h1 className="text-xl font-semibold">Oopsly Builder</h1>
      <div className="flex gap-3">
        <button className="text-sm px-3 py-1 rounded-md bg-black text-white hover:bg-gray-800">Export JSX</button>
        <button className="text-sm px-3 py-1 rounded-md border">Fullscreen</button>
      </div>
    </header>
  );
}
