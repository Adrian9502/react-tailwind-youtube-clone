import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Video() {
  const VIDEO_IDS = ["MRJ3WfVe31U", "yhIys9fV_tA", "N-2v5BM74tE"]; // Replace with your actual video IDs

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${VIDEO_IDS.join(
            ","
          )}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
        );
        setVideos(response.data.items);
        console.log(response);

        setLoading(false);
      } catch (err) {
        setError("Failed to fetch video data");
        console.log("fetch error: ", err);

        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {videos.map((video) => (
        <div key={video.id} className="p-4 border rounded shadow-md mb-4">
          <h1 className="text-2xl font-bold mb-2">{video.snippet.title}</h1>
          <p className="text-gray-600 mb-4">{video.snippet.description}</p>
          <p className="text-sm text-gray-500">
            Views: {video.statistics.viewCount}
          </p>
          <p className="text-sm text-gray-500">
            Published:{" "}
            {new Date(video.snippet.publishedAt).toLocaleDateString()}
          </p>
          <div className="mt-4">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.snippet.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
}
