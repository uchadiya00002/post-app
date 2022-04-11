import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { updatePost } from "../../redux/action/post.action";

const UpdatePost = () => {
  const [title, setTitle] = useState(location.state.title);
  const [description, setDescription] = useState(location.state.description);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePost({ id, title, description }));
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center">
      <form className="flex flex-col w-96 my-16">
        <input
          className="bg-gray-100 p-3"
          type="text"
          placeholder="Enter a Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="bg-gray-50 p-3 my-4"
          placeholder="Write a post"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className="bg-blue-500 px-4 py-2 text-white"
          onClick={(e) => handleSubmit(e)}
        >
          Update Post
        </button>
      </form>
    </div>
  );
};

export default UpdatePost;
