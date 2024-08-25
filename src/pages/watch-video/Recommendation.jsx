import { useState, useEffect } from "react";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { Oval } from "react-loader-spinner";
import { Link } from "react-router-dom";

const capitalizeFirstLetter = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};
// Helper function to format views
const formatViews = (views) => {
  if (views >= 1_000_000) {
    return `${Math.floor(views / 1_000_000)}M`;
  } else if (views >= 1_000) {
    return `${Math.floor(views / 1_000)}K`;
  } else {
    return views.toString();
  }
};

export default function Recommendation() {
  const [videoRecommendations, setVideoRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchRecommendations() {
      setLoading(true);
      try {
        const response = await fetch(
          "https://pixabay.com/api/videos/?key=45550385-bbb9ccc1215b5f7b62232bfde&order=popular"
        );
        const data = await response.json();
        setVideoRecommendations(data.hits);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchRecommendations();
  }, []);

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
    <div className="flex flex-col gap-1 justify-center">
      {videoRecommendations.map((video) => (
        <Link
          to={`/watch/${video.id}`}
          key={video.id}
          className="flex mt-2 gap-2 text-base"
        >
          <img
            src={video.videos.large.thumbnail}
            className="w-[168px] h-[94px] rounded-lg"
            alt={video.tags}
          />
          <div className="flex flex-col flex-1">
            {/* Title */}
            <div className="font-bold w-36 flex items-center justify-between">
              <div className="">
                {capitalizeFirstLetter(video.tags.split(",")[0])}
              </div>
              <div className="">
                <PiDotsThreeVerticalBold size={25} />
              </div>
            </div>
            <div className="text-xs flex gap-1 flex-col text-neutral-400 py-1 font-semibold">
              <span>{video.user} &#9835;</span>

              <span>
                {formatViews(video.views)} views &middot;{" "}
                {Math.floor(Math.random() * 10) + 1} years ago
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
