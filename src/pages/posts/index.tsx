import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import Button from "@mui/material/Button";

const Posts = () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/posts?_limit=8";

  const fetchPosts = async () => {
    const response = await fetch(apiUrl);
    return response?.json();
  };

  const { data: posts, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error loading posts</p>;


  return (
    <>
      <div  className="flex items-center justify-between">
        <h1 className="text-xl font-bold mb-4">Posts</h1>
        <Link to={`/posts/add`}>
          <Button variant="contained"> <AddIcon />Create New Post</Button>
        </Link>
      </div>
      <ul className="space-y-2">
        {posts.map((post: any) => (
          <li key={post.id} className="p-4 border rounded bg-blue-100">
            <h2 className="font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Posts;

