import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { useLocation, useNavigate } from "react-router-dom";
import { updateComment } from "../redux/action/post.action";

const UpdateComment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [comment, setComment] = useState(location.state.commentBody);
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateComment({
        cmtId: location.state.cmtId,
        postId: location.state.postId,
        commentBody: comment,
      })
    );
    navigate("/");
  };
  return (
    <div className="flex justify-center m-20 py-4">
      <input
        className="p-2 w-88 bg-gray-200 "
        type="text"
        placeholder="Edit Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        className="bg-blue-500 px-4 py-2 text-white"
        onClick={handleCommentSubmit}
      >
        Edit Comment
      </button>
    </div>
  );
};

export default UpdateComment;
