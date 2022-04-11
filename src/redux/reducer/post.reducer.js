import { ADD_POST, UPDATE_POST, DELETE_POST } from "../constant/const";

const initialState = {
  posts: [{ id: "1649618721940457154", title: "yash", description: "sharma" }],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      console.log(state.posts);
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
    default:
      return state;
  }
};

export default postReducer;
