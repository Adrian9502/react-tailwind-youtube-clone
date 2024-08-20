import { BsThreeDotsVertical } from "react-icons/bs";

export default function Video() {
  return (
    <div className="mb-5 w-full rounded-lg relative">
      <img
        src="https://picsum.photos/400/200"
        className="w-full h-[202px] rounded-lg"
        alt="Video thumbnail"
      />
      <span className="absolute right-2 bottom-20 text-xs rounded-lg text-white bg-zinc-900/75 p-1 z-20">
        11:23
      </span>
      <div className="flex mt-3 px-2">
        <img
          src="https://randomuser.me/api/portraits/women/93.jpg"
          className="w-9 h-9 rounded-full"
          alt="Channel avatar"
        />
        <div className="flex flex-col font-semibold ml-3 w-full">
          <div className="flex items-center justify-between w-full">
            <span className="text-white">[CS 1.6 | AMXX] L4D2 M2 Browning</span>
            <BsThreeDotsVertical color="white" size={22} />
          </div>
          <span className="text-sm text-zinc-400">CS Player</span>
          <span className="text-sm text-zinc-400">
            1.2M views &middot; 12 days ago
          </span>
        </div>
      </div>
    </div>
  );
}
