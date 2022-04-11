import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteComment, addReply } from "../../redux/action/post.action";
const Comment = ({ cmtId, postId, commentBody, updateCommentState }) => {
  const [replyVisible, setReplyVisible] = useState(false);
  const { posts } = useSelector((state) => state.postReducer);
  const [reply, setReply] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let pindex = 0;
  let cindex = 0;
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === postId) {
      for (let j = 0; j < posts[i].length; j++) {
        if (posts[i].comments[j].id === cmtId) {
          pindex = i;
          cindex = j;
          return;
        }
      }
    }
  }
  console.log({ pindex, cindex });
  return (
    <div className="bg-gray-100 rounded-md my-2 p-2 ">
      <div className="flex justify-between items-center">
        <span>{commentBody}</span>
        <div>
          <button
            onClick={() => setReplyVisible(!replyVisible)}
            className="hover:bg-gray-200 p-1 text-xs mx-1 text-gray-400 "
          >
            Reply
          </button>
          <button
            className="hover:bg-gray-200 p-1 mx-1 text-white rounded-full"
            onClick={() =>
              navigate(`/updatecomment/${cmtId}`, {
                state: { postId, cmtId, commentBody },
              })
            }
          >
            🖋️
          </button>
          <button
            className="hover:bg-gray-200 p-1 mx-1 text-white rounded-full delete_comment"
            onClick={() => {
              dispatch(deleteComment({ cmtId, postId }));
              updateCommentState();
            }}
          >
            🗑️
          </button>
        </div>
      </div>
      <ul className="m-3">
        {posts[pindex].comments[cindex].replies &&
          posts[pindex].comments[cindex].replies.map((reply, idx) => (
            <li key={idx}>{reply}</li>
          ))}
      </ul>
      {replyVisible ? (
        <div className="flex justify-center m-2 py-4">
          <input
            className="p-2 w-88 bg-gray-200 text-sm "
            type="text"
            placeholder="Reply to a comment"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
          />
          <button
            className="bg-blue-500 px-4 py-2 text-white"
            onClick={() => {
              dispatch(
                addReply({
                  cmtId,
                  postId,
                  reply,
                })
              );
              updateCommentState();
              setReply("");
              console.log(posts);
            }}
          >
            Reply
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Comment;
