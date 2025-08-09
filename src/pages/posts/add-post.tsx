import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import Button from "@mui/material/Button";

// API function to create a post
const addPost = async (newPost: { title: string; body: string }) => {
  const { data } = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    newPost
  );
  return data;
};

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn : addPost,
        onSuccess : () => {
            // Refetch posts after adding a new one
            queryClient.invalidateQueries({ queryKey: ["posts"] });
            setTitle("");
            setBody("");
        }
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !body) return;
        mutation.mutate({ title, body });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded">
        <h2 className="text-lg font-bold">Create New Post</h2>

        <input
            type="text"
            placeholder="Post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full"
        />

        <textarea
            placeholder="Post body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="border p-2 w-full"
        />

        <Button
            type="submit"
            variant="outlined"
            disabled={mutation.isPending}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
            {mutation.isPending ? "Creating..." : "Create Post"}
        </Button>

        {mutation.isError && (
            <p className="text-red-500">
                Error: {(mutation.error as Error).message}
            </p>
        )}

        {mutation.isSuccess && (
            <p className="text-green-500">✅ Post created successfully!</p>
        )}
        </form>
    );
}

export default CreatePost;