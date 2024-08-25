import { useEffect, useState, useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Oval } from "react-loader-spinner";
import {
  PiDotsThreeBold,
  PiBookmarkSimpleThin,
  PiShareFatLight,
} from "react-icons/pi";
import { RiScissorsLine } from "react-icons/ri";
import { TfiDownload } from "react-icons/tfi";
import { BiLike, BiDislike } from "react-icons/bi";
import Comments from "./watch-video/Comments";
import Recommendation from "./watch-video/Recommendation";

export default function WatchVideo() {
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState(null);
  const [description, setDescription] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchDescription() {
      try {
        const response = await fetch("https://dummyjson.com/quotes/random");
        const data = await response.json();
        setDescription(data); // Set the whole object
      } catch (error) {
        console.error("Error fetching description:", error);
      }
    }
    fetchDescription();
  }, []);

  useEffect(() => {
    async function fetchVideo() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://pixabay.com/api/videos/?key=45550385-bbb9ccc1215b5f7b62232bfde&id=${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch video");
        }

        const data = await response.json();

        if (data.hits.length > 0) {
          setVideo(data.hits[0]);
        } else {
          throw new Error("No videos found");
        }
      } catch (error) {
        console.error("Error fetching videos in WatchVideo component:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchVideo();
  }, [id]);

  // Memoize the first tag and capitalize it
  const capitalizedTag = useMemo(() => {
    if (!video) return "";
    const firstTag = video.tags.split(",")[0].trim();
    return firstTag.charAt(0).toUpperCase() + firstTag.slice(1);
  }, [video]);

  // Render a video item with icons
  const VideoItem = useCallback(
    ({ Icon, text = "", size = 25 }) => (
      <div
        className="cursor-pointer hover:bg-neutral-600 transition py-1.5 px-4 flex items-center rounded-full bg-neutral-700/75 gap-2"
        aria-label={text}
      >
        <Icon size={size} />
        {text}
      </div>
    ),
    []
  );

  if (loading) {
    return (
      <div className="bg-zinc-900 flex items-center justify-center h-screen">
        <Oval
          visible={true}
          height="80"
          width="80"
          color="rgb(161 161 170)"
          ariaLabel="oval-loading"
          secondaryColor="rgb(64 64 64)"
        />
      </div>
    );
  }

  return (
    <div className="text-white bg-zinc-900 text-2xl px-3 py-6 grid grid-cols-[1280px_auto]">
      {video ? (
        <>
          <div>
            <ReactPlayer
              className="mb-3"
              url={video.videos.large.url}
              width="100%"
              height="720px"
              playing
              controls
              muted={false}
            />
            <span className="text-2xl font-semibold pt-4">
              {capitalizedTag}
            </span>
            <div className="flex mt-2 items-center justify-between pr-3">
              <div className="flex">
                <img
                  src={
                    video.userImageURL ||
                    `https://randomuser.me/api/portraits/med/men/${Math.floor(
                      Math.random() * 100
                    )}.jpg`
                  }
                  alt={video.user}
                  className="w-10 h-10 rounded-full mr-3 cursor-pointer"
                />
                <div className="flex flex-col font-semibold">
                  <span className="text-base cursor-pointer">
                    {video.user} &#9835;
                  </span>
                  <span className="text-sm text-neutral-400">
                    {Math.floor(Math.random() * 999) + 1}K subscribers
                  </span>
                </div>
                <button
                  className="ml-8 rounded-full px-5 font-semibold text-sm bg-slate-100 text-neutral-900 hover:bg-neutral-300 transition"
                  aria-label="Subscribe to channel"
                >
                  Subscribe
                </button>
              </div>
              <div className="flex text-sm gap-3 font-semibold">
                <div
                  className="py-1.5 px-4 cursor-pointer hover:bg-neutral-600 transition flex items-center rounded-full bg-neutral-700 gap-2"
                  aria-label="Like video"
                >
                  <BiLike size={25} />
                  {Math.floor(Math.random() * 9) + 1}K |
                  <BiDislike size={25} />
                </div>
                <VideoItem Icon={PiShareFatLight} text="Share" />
                <VideoItem Icon={TfiDownload} text="Download" size={19} />
                <VideoItem Icon={RiScissorsLine} text="Clip" />
                <VideoItem Icon={PiBookmarkSimpleThin} text="Save" />
                <div
                  className="p-1.5 cursor-pointer hover:bg-neutral-600 transition flex items-center rounded-full bg-neutral-700/75 gap-1"
                  aria-label="More options"
                >
                  <PiDotsThreeBold size={25} />
                </div>
              </div>
            </div>
            <div className="h-28 cursor-pointer bg-neutral-700 gap-2 font-semibold my-4 rounded-xl p-3 text-sm">
              <span className="text-gray-100">
                {video.views.toLocaleString()} views
              </span>
              <span className="ml-3">
                {Math.floor(Math.random() * 9) + 1} years ago
              </span>
              <span className="ml-3 text-neutral-400">
                #lorem #ipsum #dolor #sit #amet
              </span>
              <br />
              {/* Display the quote text from the description object */}
              <div className="mt-3">
                {description?.quote || "No description available."}
                <br />
                {description?.author || "No description available."}
                ...more
              </div>
            </div>
            {/* Comments Section */}
            <Comments />
          </div>
        </>
      ) : (
        <p>No video found</p>
      )}
      <div className="ml-4 ">
        <Recommendation />
      </div>
    </div>
  );
}
