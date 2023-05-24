import React from "react";
import friends from "../assets/friends.jpg";

const Friends = () => {
  return (
    <div className=" relative h-screen overflow-hidden">
      <img
        className=" absolute object-cover w-full h-full"
        src={friends}
        alt="friends"
      ></img>
      <div class="flex h-full z-10">
        <div class="flex-none z-10 w-14 h-14 ...">01</div>
        <div class="grow px-52 z-10 self-center">
          <h5 className=" text-7xl font-title text-center font-bold leading-tight text-white">
            Los mejores cócteles para compartir
          </h5>
        </div>
        <div class="flex-none z-10 w-14 h-14 ...">03</div>
      </div>
    </div>
  );
};

export default Friends;
