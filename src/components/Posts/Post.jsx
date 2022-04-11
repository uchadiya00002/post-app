import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePost } from "../../redux/action/post.action";

const Post = ({ id, title, description }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        <input className="p-2 w-88" type="text" placeholder="Comment" />
        <button className="bg-blue-500 px-4 py-2 text-white">
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default Post;
