import {
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT,
  COMMENT_REPLY,
} from "../constant/const";

const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          {
            id:
              new Date().getTime().toString() +
              Math.floor(Math.random() * 1000000),
            title: action.payload.title,
            description: action.payload.description,
          },
          ...state.posts,
        ],
      };

    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => {
          if (post.id === action.payload.id) {
            post.title = action.payload.title;
            post.description = action.payload.description;
          }
          return post;
        }),
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload.id),
      };

    case ADD_COMMENT:
      for (let i = 0; i < state.posts.length; i++) {
        if (state.posts[i].id === action.payload.id) {
          if (!state.posts[i].comments) {
            state.posts[i].comments = [
              {
                id:
                  new Date().getTime().toString() +
                  Math.floor(Math.random() * 1000000),
                commentBody: action.payload.commentBody,
              },
            ];
          } else {
            state.posts[i].comments = [
              ...state.posts[i].comments,
              {
                id:
                  new Date().getTime().toString() +
                  Math.floor(Math.random() * 1000000),
                commentBody: action.payload.commentBody,
              },
            ];
          }
        }
      }
      return state;

    case DELETE_COMMENT:
      for (let i = 0; i < state.posts.length; i++) {
        if (state.posts[i].id === action.payload.postId) {
          if (state.posts[i].comments.length) {
            state.posts[i].comments = state.posts[i].comments.filter(
              (comment) => comment.id !== action.payload.cmtId
            );
          }
        }
      }
      return state;

    case UPDATE_COMMENT:
      for (let i = 0; i < state.posts.length; i++) {
        if (state.posts[i].id === action.payload.postId) {
          if (state.posts[i].comments.length) {
            for (let j = 0; j < state.posts[i].comments.length; j++) {
              if (state.posts[i].comments[j].id === action.payload.cmtId) {
                state.posts[i].comments[j].commentBody =
                  action.payload.commentBody;
              }
            }
          }
        }
      }
      return state;

    case COMMENT_REPLY:
      for (let i = 0; i < state.posts.length; i++) {
        if (state.posts[i].id === action.payload.postId) {
          if (state.posts[i].comments.length) {
            for (let j = 0; j < state.posts[i].comments.length; j++) {
              if (state.posts[i].comments[j].id === action.payload.cmtId) {
                if (!state.posts[i].comments[j].replies) {
                  state.posts[i].comments[j].replies = [action.payload.reply];
                } else {
                  state.posts[i].comments[j].replies = [
                    ...state.posts[i].comments[j].replies,
                    action.payload.reply,
                  ];
                }
              }
            }
          }
        }
      }
      return state;

    default:
      return state;
  }
};

export default postReducer;
