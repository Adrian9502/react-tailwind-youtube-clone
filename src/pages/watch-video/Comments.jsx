import { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import { MdSort } from "react-icons/md";
import OtherPeopleComments from "./OtherPeopleComments";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [userProfiles, setUserProfiles] = useState([]);

  // Fetch comments
  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await fetch("https://dummyjson.com/comments");
        const data = await response.json();
        setComments(data.comments);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    }

    fetchComments();
  }, []);

  // Fetch user profiles
  useEffect(() => {
    async function fetchUserProfiles() {
      try {
        const response = await fetch("https://randomuser.me/api/?results=30");
        const data = await response.json();
        setUserProfiles(data.results);
      } catch (error) {
        console.error("Error fetching user profiles:", error);
      }
    }

    fetchUserProfiles();
  }, []);

  // Function to get a random profile picture if available
  const getUserProfile = (index) => userProfiles[index] || {};

  return (
    <div className="mt-10 p-3">
      {/* Comments Header */}
      <div className="flex mb-6 justify-between items-center">
        <span className="font-bold text-xl">15,902 Comments</span>
        <button
          className="text-sm flex items-center focus:outline-none"
          aria-label="Sort comments"
        >
          <MdSort size={20} />
          Sort by
        </button>
      </div>

      {/* Add a Comment Section */}
      <div className="flex my-6">
        <img
          src="https://randomuser.me/api/portraits/women/66.jpg"
          className="w-10 h-10 rounded-full"
          alt="Your profile"
        />
        <div className="flex flex-col ml-4 w-full">
          <span className="text-sm text-neutral-400">Add a comment...</span>
          <hr className="border-b border-neutral-600" />
        </div>
      </div>

      {/* Render Other People's Comments */}
      {comments.map((comment, index) => (
        <OtherPeopleComments
          key={comment.id}
          comment={comment}
          userProfile={getUserProfile(index)}
        />
      ))}
    </div>
  );
}

// PropTypes for validation
Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      body: PropTypes.string.isRequired,
    })
  ),
  userProfiles: PropTypes.arrayOf(
    PropTypes.shape({
      picture: PropTypes.shape({
        thumbnail: PropTypes.string,
      }),
      login: PropTypes.shape({
        username: PropTypes.string,
      }),
    })
  ),
};
