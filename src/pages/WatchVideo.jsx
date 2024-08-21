import { useParams } from "react-router-dom";
export default function WatchVideo() {
  const { id } = useParams();

  return (
    <div className="bg-red-600 text-white text-2xl flex items-center justify-center flex-col">
      <h1>View Video</h1>
      <p>Video ID: {id}</p> {/* Display the video ID */}
    </div>
  );
}
