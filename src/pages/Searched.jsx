import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Searched() {
  const location = useLocation();
  const { results } = location.state || { results: [] }; // Destructure results from location state or default to an empty array

  // Function to format view counts
  const formatViews = (views) => {
    if (views >= 1_000_000) {
      return `${Math.floor(views / 1_000_000)}M`; // Convert to millions
    } else if (views >= 1_000) {
      return `${Math.floor(views / 1_000)}K`; // Convert to thousands
    } else {
      return views.toString(); // Return as is for less than 1000 views
    }
  };

  // Function to format tags by capitalizing each word
  const formatTags = (tags) => {
    if (!Array.isArray(tags)) {
      tags = tags.split(","); // Split tags by commas if provided as a string
    }
    return tags
      .map((tag) => tag.trim()) // Remove whitespace around each tag
      .map((tag) => tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()) // Capitalize the first letter
      .join(" "); // Join tags with spaces
  };

  // Function to generate a random number of months ago (1 to 12)
  const getRandomMonthsAgo = () => {
    return Math.floor(Math.random() * 12) + 1;
  };

  // Fallback thumbnail image for videos without a thumbnail
  const getFallbackThumbnail = () => {
    return `https://randomuser.me/api/portraits/women/${Math.floor(
      Math.random() * 100
    )}.jpg`;
  };

  return (
    <div className="p-4">
      {results.length === 0 ? (
        <p className="text-white text-2xl text-center">No results found</p>
      ) : (
        results.map((video) => (
          <Link
            to={`/watch/${video.id}`}
            key={video.id}
            className="p-2 w-[855px] ml-60 flex gap-4"
          >
            <img
              src={video.videos.large.thumbnail || getFallbackThumbnail()}
              alt={formatTags(video.tags)}
              className="w-[420px] h-[236px] rounded-lg"
              loading="lazy" // Lazy loading for better performance
            />
            <div className="text-neutral-400 font-semibold">
              {/* Video title */}
              <div className="text-white flex items-center justify-between text-xl mb-1">
                {formatTags(video.tags)}
                <BsThreeDotsVertical size={20} />
              </div>
              {/* Views and time information */}
              <div className="text-sm mb-2">
                {formatViews(video.views)} views &middot; {getRandomMonthsAgo()}{" "}
                months ago
              </div>
              {/* User information */}
              <div className="flex items-center gap-2">
                <img
                  src={video.userImageURL}
                  className="w-8 h-8 rounded-full"
                  alt={`${video.user}'s profile`}
                />
                <div className="text-sm">{video.user} &#9834;</div>
              </div>
              {/* Description placeholder */}
              <div className="text-xs text-neutral-400 mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                ex, enim architecto placeat eos quam deleniti rerum excepturi
                autem quisquam commodi. Itaque et veritatis magni. Impedit fugit
                temporibus autem a?
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}
