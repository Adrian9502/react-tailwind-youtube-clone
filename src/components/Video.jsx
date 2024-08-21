import PropTypes from "prop-types";
import { BsThreeDotsVertical } from "react-icons/bs";

// Helper function to format views
function formatViews(views) {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + "M views";
  } else if (views >= 1000) {
    return (views / 1000).toFixed(1) + "K views";
  } else {
    return views.toLocaleString() + " views";
  }
}

export default function Video({ video }) {
  return (
    <div className="w-full rounded-lg ">
      <div className="relative">
        <img
          src={video.videos.medium.thumbnail}
          className="w-full h-[202px] rounded-lg  object-cover"
          alt={video.tags}
        />
        <span className="absolute right-2 bottom-2 text-xs rounded-lg text-white bg-zinc-900/75 p-1">
          {Math.floor(video.duration / 60)}:
          {video.duration % 60 < 10 ? "0" : ""}
          {video.duration % 60}
        </span>
      </div>
      <div className="flex mt-3 px-2">
        <img
          src={
            video.userImageURL ||
            `https://randomuser.me/api/portraits/med/men/${Math.floor(
              Math.random() * 100
            )}.jpg`
          }
          className="w-10 h-10 rounded-full object-cover"
          alt={video.user}
        />
        <div className="flex flex-col font-semibold ml-3 w-full">
          <div className="flex items-center justify-between w-full">
            <span className="text-white text-sm">{video.tags}</span>
            <BsThreeDotsVertical color="white" size={22} />
          </div>
          <span className="text-sm text-zinc-400">{video.user}</span>
          <span className="text-sm text-zinc-400">
            {formatViews(video.views)} &middot;{" "}
            {Math.floor(Math.random() * 10) + 1} days ago
          </span>
        </div>
      </div>
    </div>
  );
}

Video.propTypes = {
  video: PropTypes.shape({
    videos: PropTypes.shape({
      medium: PropTypes.shape({
        thumbnail: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    tags: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    userImageURL: PropTypes.string,
    duration: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }).isRequired,
};
