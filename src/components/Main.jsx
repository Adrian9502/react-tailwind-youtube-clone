import { useEffect, useState } from "react";
import Video from "./Video";
import { Oval } from "react-loader-spinner";
import { Link } from "react-router-dom";

export default function Main({ className = "", isCollapse }) {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchVideos() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://pixabay.com/api/videos/?key=45550385-bbb9ccc1215b5f7b62232bfde&page=${page}&per_page=20`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }

        const data = await response.json();

        setVideos((prevVideos) => {
          const newVideos = data.hits.filter(
            (newVideo) =>
              !prevVideos.some((prevVideo) => prevVideo.id === newVideo.id)
          );
          return [...prevVideos, ...newVideos];
        });
      } catch (error) {
        setError("Error fetching videos. Please try again later.");
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, [page]);

  const loadMoreVideos = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="relative">
      {/* Loading Overlay */}
      {loading && (
        <div className="absolute w-full h-[100vh] flex items-center justify-center z-20">
          <Oval
            visible={true}
            height="80"
            width="80"
            color="rgb(161 161 170)"
            ariaLabel="oval-loading"
            secondaryColor="rgb(64 64 64)"
          />
        </div>
      )}
      <main
        className={`bg-zinc-900 ${className} grid p-4 gap-6 ${
          isCollapse ? "grid-cols-5" : "grid-cols-4"
        }`}
      >
        {videos.map((video) => (
          <Link to={`/watch/${video.id}`} key={video.id}>
            <Video video={video} />
          </Link>
        ))}
        {!loading && !error && (
          <div className="col-span-full flex justify-center mt-4">
            <button
              onClick={loadMoreVideos}
              className="border-2 border-zinc-500 hover:border-zinc-700 transition text-white px-4 py-2 rounded-lg"
              disabled={loading}
              aria-label="Load more videos"
            >
              Load More
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
