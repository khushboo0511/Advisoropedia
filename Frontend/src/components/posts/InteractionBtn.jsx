import { useState } from "react";
import "remixicon/fonts/remixicon.css";

const InteractionBtn = () => {
  const [liked, setLiked] = useState(false);
  const clickLikeBtn = () => {
    setLiked(!liked);
  };
  return (
    <div className="text-2xl px-6 flex justify-end">
      <span onClick={clickLikeBtn} className="mx-1.5 cursor-pointer">
        {liked ? (
          <i className="ri-heart-fill text-rose-500"></i>
        ) : (
          <i className="ri-heart-line"></i>
        )}
      </span>
      <span className="mx-1.5 cursor-pointer">
        <i className="ri-chat-1-fill"></i>
      </span>
      <span className="mx-1.5 cursor-pointer">
        <i className="ri-share-forward-fill"></i>
      </span>
    </div>
  );
};

export default InteractionBtn;