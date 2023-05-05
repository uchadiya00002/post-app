import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/action/post.action";

const AddPost = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addPost({
        title,
        description,
      })
    );
    setTitle("");
    setDescription("");
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
          className={` ${title === '' || description === '' ? "bg-gray-400 cursor-not-allowed" :"bg-blue-500 cursor-pointer"}  px-4 py-2 text-white`}
          onClick={(e) => handleSubmit(e)}
          disabled={title === '' || description === ''}
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
