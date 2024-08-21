import { useEffect, useState } from "react";
import Video from "./Video";
import { Oval } from "react-loader-spinner";
import { Link } from "react-router-dom";
export default function Main({ className = "", isCollapse }) {
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

  return loading ? (
    <div className="bg-zinc-900 flex items-center justify-center h-screen">
      <Oval
        visible={true}
        height="80"
        width="80"
        color="rgb(161 161 170)"
        ariaLabel="oval-loading"
        secondaryColor="color: rgb(64 64 64)"
      />
    </div>
  ) : (
    <main
      className={`bg-zinc-900 ${className} grid p-4 gap-6 ${
        isCollapse ? "grid-cols-5" : "grid-cols-4"
      }`}
    >
      {videos.map((video, index) => (
        <Link to={`/watch/${video.id}`} key={video.id}>
          <Video key={index} video={video} />
        </Link>
      ))}
      <div className="col-span-full flex justify-center mt-4">
        <button
          onClick={loadMoreVideos}
          className="border-2 border-zinc-500 hover:border-zinc-700 transition text-white px-4 py-2 rounded-lg"
          disabled={loading}
        >
          Load More
        </button>
      </div>
    </main>
  );
}
