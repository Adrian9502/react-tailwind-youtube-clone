import { useEffect, useState } from "react";
import Video from "./Video";

export default function Main({ className = "" }) {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchVideos(page);
  }, [page]);

  async function fetchVideos(page) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://pixabay.com/api/videos/?key=45550385-bbb9ccc1215b5f7b62232bfde&page=${page}&per_page=20`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch videos");
      }

      const data = await response.json();
      console.log(data);

      setVideos((prevVideos) => {
        const newVideos = data.hits.filter(
          (newVideo) =>
            !prevVideos.some((prevVideo) => prevVideo.id === newVideo.id)
        );
        return [...prevVideos, ...newVideos];
      });
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setLoading(false);
    }
  }

  const loadMoreVideos = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <main
      className={`bg-zinc-900 ${className} grid p-4 grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6`}
    >
      {videos.map((video, index) => (
        <Video key={index} video={video} />
      ))}
      <div className="col-span-full flex justify-center mt-4">
        <button
          onClick={loadMoreVideos}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          disabled={loading}
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      </div>
    </main>
  );
}
