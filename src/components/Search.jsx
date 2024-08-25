import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { HiMicrophone } from "react-icons/hi2";

export default function Search() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleSearch = async (event) => {
    event.preventDefault();
    if (input.trim() === "") return;

    try {
      const response = await fetch(
        `https://pixabay.com/api/videos/?key=45550385-bbb9ccc1215b5f7b62232bfde&q=${input}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      navigate(`/searched/${encodeURIComponent(input)}`, {
        state: { results: data.hits },
      });
      setError("");
    } catch (error) {
      setError("Failed to fetch data");
      console.error("Error fetching data:", error);
    }
  };

  return (
    <nav className="flex items-center w-[38%] pl-7">
      <form onSubmit={handleSearch} className="flex-grow flex overflow-hidden">
        <input
          type="text"
          placeholder="Search"
          className="flex-grow text-white bg-zinc-900 border border-zinc-700 px-4 py-2 rounded-l-full outline-none focus:outline-none"
          aria-label="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-zinc-800 px-5 border-t border-b border-r rounded-r-full border-zinc-700 flex items-center justify-center"
          aria-label="Search button"
        >
          <BiSearch size={25} color="white" />
        </button>
      </form>
      <button
        className="flex items-center justify-center ml-4 hover:bg-zinc-600 cursor-pointer bg-zinc-700 transition p-2.5 rounded-full"
        aria-label="Voice search"
      >
        <HiMicrophone size={20} color="white" />
      </button>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </nav>
  );
}
