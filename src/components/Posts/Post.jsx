import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, addComment } from "../../redux/action/post.action";
import Comment from "../comments/Comment";

const Post = ({ id, title, description }) => {
  const [comment, setComment] = useState("");
  const { posts } = useSelector((state) => state.postReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const updateCommentState = () => {
    setComment(" ");
  };
  let index = 0;
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === id) {
      index = i;
    }
  }

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    dispatch(addComment({ id, commentBody: comment }));
    setComment("");
  };

  return (
    <div className="bg-blue-100 p-4 w-96 m-4 rounded-lg">
      <div className="flex justify-between">
        <div className="text-2xl py-1">{title}</div>
        <div>
          <button
            className="bg-yellow-200 p-2 mx-1 text-white rounded-full"
            onClick={() =>
              navigate(`/updatepost/${id}`, { state: { title, description } })
            }
          >
            🖋️
          </button>
          <button
            className="bg-red-500 p-2 mx-1 text-white rounded-full"
            onClick={() => dispatch(deletePost({ id }))}
          >
            🗑️
          </button>
        </div>
      </div>
      <div className="text-md py-5">{description}</div>
      <div className="flex">
        <input
          className="p-2 w-88 comment_input"
          type="text"
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className="bg-blue-500 px-4 py-2 text-white"
          onClick={handleCommentSubmit}
        >
          Add Comment
        </button>
      </div>

      <div className="flex items-center my-3">
        <span className="pr-1 text-xs">Comments</span>
        <div className="w-full border-2 border-blue-100 bg-black"></div>
      </div>

      {posts[index].comments &&
        posts[index].comments.map((cmt) => (
          <Comment
            key={cmt.id}
            cmtId={cmt.id}
            postId={id}
            commentBody={cmt.commentBody}
            updateCommentState={updateCommentState}
          />
        ))}
    </div>
  );
};

export default Post;
