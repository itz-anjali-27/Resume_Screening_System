export default function Header({ search, setSearch }) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl text-white font-bold">
        Find Your Next Role
      </h1>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search jobs..."
        className="mt-3 p-2 w-full rounded bg-[#111827] text-white"
      />
    </div>
  );
}