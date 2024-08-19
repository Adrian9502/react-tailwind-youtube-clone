import { SlMenu } from "react-icons/sl";
import { LiaUploadSolid } from "react-icons/lia";
import { FaRegBell } from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";
import { HiMicrophone } from "react-icons/hi2";
import youtubeText from "/youtube.png";
export default function Header() {
  return (
    <header className="bg-zinc-900 sticky top-0 left-0 right-0 flex pb-3 pt-2 px-4 justify-between items-center">
      {/* left side */}
      <nav className="flex items-center space-x-4">
        <div className="rounded-full hover:bg-zinc-700 cursor-pointer transition p-2.5">
          <SlMenu color="white" size={20} />
        </div>
        <div className="flex items-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="20"
            viewBox="0 0 141.801 99.59"
            id="youtube"
          >
            <path
              fill="#fff"
              d="M94.457 48.344c-13-6.948-25.451-13.336-38.176-20v39.889c13.391-7.279 27.505-13.946 38.231-19.892h-.055Z"
            ></path>
            <path
              fill="#ff0000"
              d="M94.457 48.344c-13-6.948-38.176-20-38.176-20l33.564 22.554s-6.114 3.391 4.612-2.555Z"
            ></path>
            <path
              fill="#ff0000"
              d="M58.732 99.466c-27.005-.5-36.229-.944-41.9-2.113a18.417 18.417 0 0 1-9.613-5c-1.889-1.892-3.391-4.778-4.557-8.782-1-3.336-1.389-6.111-1.944-12.891-.85-15.3-1.052-27.81 0-41.788.866-7.716 1.287-16.88 7.053-22.226a18.917 18.917 0 0 1 9.447-4.778C22.774.833 46.446-.001 70.953-.001c24.451 0 48.176.834 53.737 1.889a18.486 18.486 0 0 1 11.057 6.556c5.262 8.277 5.354 18.568 5.888 26.619.221 3.836.221 25.616 0 29.452-.831 12.723-1.5 17.224-3.389 21.891a16.138 16.138 0 0 1-3.891 6.225 18.639 18.639 0 0 1-9.892 5.056c-23.37 1.757-43.214 2.139-65.736 1.778Zm35.783-51.122c-13-6.948-25.451-13.391-38.176-20.06v39.9c13.393-7.28 27.508-13.95 38.231-19.895l-.055.055Z"
            ></path>
          </svg>

          <img src={youtubeText} className="w-16" alt="" />
        </div>
      </nav>
      {/* middle side */}
      <nav className="flex items-center w-[38%] pl-7">
        <div className="flex-grow flex overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow text-white bg-zinc-900 border border-zinc-700 px-4 py-2 rounded-l-full outline:none focus:outline-none"
          />
          <button className="bg-zinc-800 px-5 border-t border-b border-r rounded-r-full border-zinc-700 flex items-center justify-center">
            <BiSearch size={25} color="white" />
          </button>
        </div>
        <div className="flex items-center justify-center ml-4 hover:bg-zinc-600 cursor-pointer bg-zinc-700 transition p-2.5 rounded-full">
          <HiMicrophone size={20} color="white" />
        </div>
      </nav>
      {/* right side */}
      <nav className="flex items-center mr-1 space-x-3">
        <div className="flex  gap-1 mr-3">
          <div className="w-10 h-10 hover:bg-zinc-700 transition cursor-pointer rounded-full flex items-center justify-center">
            <LiaUploadSolid size={21} color="white" />
          </div>
          <div className="w-10 h-10 hover:bg-zinc-700 transition cursor-pointer rounded-full flex items-center justify-center">
            <FaRegBell size={21} color="white" />
          </div>
        </div>
        <div className="w-9 h-9 cursor-pointer">
          <img
            src="https://randomuser.me/api/portraits/women/66.jpg"
            className="w-full h-full rounded-full"
            alt="user profile"
          />
        </div>
      </nav>
    </header>
  );
}
