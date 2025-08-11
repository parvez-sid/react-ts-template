import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import axios from 'axios'

import { zodResolver } from '@hookform/resolvers/zod'
import { postSchema } from '../../../validations/postSchema';
import type { PostSchemaType } from "../../../validations/postSchema";

import { TextField, Button, Box, Typography } from '@mui/material'

// API function to create a post
const addPost = async (newPost: PostSchemaType) => {
  const { data } = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
  return data
}

const CreatePost = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PostSchemaType>({
    resolver: zodResolver(postSchema),
  })

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      // Refetch posts after adding a new one
      queryClient.invalidateQueries({ queryKey: ['posts'] })
      reset() // Clear the form
    },
  })

  const onSubmit = (data: PostSchemaType) => {
    mutation.mutate(data)
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ p: 3, border: '1px solid #ccc', borderRadius: 2, maxWidth: 500 }}
    >
      <Typography variant="h6" mb={2}>
        Create New Post
      </Typography>

      <TextField
        label="Title"
        fullWidth
        variant="outlined"
        margin="normal"
        error={!!errors.title}
        helperText={errors.title?.message}
        {...register('title')}
      />

      <TextField
        label="Post Body"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        error={!!errors.body}
        helperText={errors.body?.message}
        {...register('body')}
      />
      <Button
        type="submit"
        variant="outlined"
        disabled={mutation.isPending}
        color="primary"
      >
        {mutation.isPending ? 'Creating...' : 'Create Post'}
      </Button>

      {mutation.isError && (
        <p className="text-red-500">Error: {(mutation.error as Error).message}</p>
      )}

      {mutation.isSuccess && <p className="text-green-500">✅ Post created successfully!</p>}
    </Box>
  )
}

export default CreatePost
