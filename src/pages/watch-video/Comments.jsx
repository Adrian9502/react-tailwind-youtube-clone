import React, { useState, useEffect } from "react";
import { MdSort } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

export default function Comments() {
  return (
    <div className="mt-10 p-3 ">
      <div className="flex mb-6 justify-items-center">
        <span className="font-bold text-xl mr-6">15,902 Comments</span>
        <span className="text-sm flex items-center">
          <MdSort size={20} />
          Sort by
        </span>
      </div>
      {/* add a comment */}
      <div className="flex my-6">
        <img
          src="https://randomuser.me/api/portraits/women/66.jpg"
          className="w-10 h-10 rounded-full"
          alt="user profile"
        />
        <div className="flex flex-col ml-4 w-full">
          <span className="text-sm text-neutral-400">Add a comment...</span>
          <hr className="border-b border-neutral-600" />
        </div>
      </div>
      {/* other people comments */}
      <div className="flex gap-4">
        <img
          src="https://randomuser.me/api/portraits/women/66.jpg"
          className="w-10 h-10 rounded-full"
          alt="user profile"
        />
        <div className="flex flex-col text-sm">
          <div className="font-semibold flex gap-2">
            <span>@loremHAHA</span>
            <span className="text-neutral-500">11 months ago</span>
          </div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            recusandae ratione provident accusamus ullam, quibusdam in expedita
            dolor sapiente cum vel alias mollitia aperiam eligendi
            exercitationem maiores dolorum natus. Molestias!
          </div>
          {/* likes */}
          <div className="py-3 flex items-center">
            <div className="flex items-center gap-1 ">
              <span
                title="like"
                className="hover:bg-neutral-700 rounded-full transition cursor-pointer p-1 "
              >
                <AiOutlineLike size={23} />
              </span>
              <span className="font-semibold">15K</span>
            </div>
            <div
              title="dislike"
              className="ml-3 hover:bg-neutral-700 rounded-full transition cursor-pointer p-1"
            >
              <BiDislike size={23} />
            </div>
            <span className="text-xs ml-6 font-bold transition hover:bg-neutral-700 cursor-pointer p-2 rounded-full">
              Reply
            </span>
          </div>
          <div className="flex w-fit py-2 px-4 ml-2 rounded-full hover:bg-blue-500/25 transition cursor-pointer">
            <IoIosArrowDown size={20} color="rgb(59,130,146)" />
            <div className="flex gap-2 ml-2 text-blue-500 font-semibold">
              <span>{Math.floor(Math.random() * 999) + 1}</span>
              <span>replies</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
