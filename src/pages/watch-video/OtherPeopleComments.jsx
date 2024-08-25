import PropTypes from "prop-types"; // Import PropTypes for prop validation
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

function OtherPeopleComments({ comment, userProfile }) {
  return (
    <div className="flex gap-4 mb-5">
      {/* Profile Picture */}
      <img
        src={
          userProfile?.picture?.thumbnail || "https://via.placeholder.com/40"
        }
        className="w-10 h-10 rounded-full"
        alt={userProfile?.login?.username || "User profile"}
      />

      <div className="flex justify-between w-full">
        <div className="flex flex-col text-sm w-full">
          {/* User Info and Time */}
          <div className="font-semibold flex gap-2">
            <span>@{userProfile?.login?.username || "Unknown User"}</span>
            <span className="text-neutral-500">
              {Math.floor(Math.random() * 12) + 1} months ago
            </span>
          </div>

          {/* Comment Text */}
          <div>{comment.body}</div>

          {/* Likes and Actions */}
          <div className="py-1 flex items-center">
            <div className="flex items-center gap-1">
              <span
                title="like"
                className="hover:bg-neutral-700 rounded-full transition cursor-pointer p-1"
                aria-label="Like"
              >
                <AiOutlineLike size={23} />
              </span>
              <span className="font-semibold">
                {Math.floor(Math.random() * 100) + 1}K
              </span>
            </div>
            <div
              title="dislike"
              className="ml-3 hover:bg-neutral-700 rounded-full transition cursor-pointer p-1"
              aria-label="Dislike"
            >
              <BiDislike size={23} />
            </div>
            <span
              className="text-xs ml-6 font-bold transition hover:bg-neutral-700 cursor-pointer p-2 rounded-full"
              role="button"
            >
              Reply
            </span>
          </div>

          {/* Replies Toggle */}
          <div className="flex w-fit py-2 px-4 ml-2 rounded-full hover:bg-blue-500/25 transition cursor-pointer">
            <IoIosArrowDown size={20} color="rgb(59,130,146)" />
            <div className="flex gap-2 ml-2 text-blue-500 font-semibold">
              <span>{Math.floor(Math.random() * 999) + 1}</span>
              <span>replies</span>
            </div>
          </div>
        </div>

        {/* Report */}
        <div className="flex mt-2 cursor-pointer" aria-label="Report">
          <PiDotsThreeVerticalBold />
        </div>
      </div>
    </div>
  );
}

// PropTypes for validation
OtherPeopleComments.propTypes = {
  comment: PropTypes.shape({
    body: PropTypes.string.isRequired,
  }).isRequired,
  userProfile: PropTypes.shape({
    picture: PropTypes.shape({
      thumbnail: PropTypes.string,
    }),
    login: PropTypes.shape({
      username: PropTypes.string,
    }),
  }),
};

export default OtherPeopleComments;
