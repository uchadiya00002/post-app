import { useSelector } from "react-redux";
import Post from "../../components/Posts/Post";
import AddPost from "../../components/addpost/AddPost";
const HomePage = () => {
  const { posts } = useSelector((state) => state.postReducer);

  return (
    <div className="container px-3 mx-auto ">
      <AddPost />
      <div className="flex flex-wrap justify-center ">
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              title={post.title}
              description={post.description}
              id={post.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
