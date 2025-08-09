
import { useQuery } from '@tanstack/react-query'
const TanStackComponent = () => {
  const { isPending, isError, error, data, isFetching } = useQuery({
    queryKey : ['repoData'],
    queryFn: async () => {
      const response = await fetch('https://api.github.com/repos/TanStack/query');
      return await response.json()
    }
  });

  if (isPending) return 'Loading...'

  if (isError) return 'An error has occurred: ' + error.message

  return (
    <>
      <h1>{data.full_name?.split("/")?.join(" ")}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
      <div>{isFetching ? 'Updating...' : ''}</div>
    </>
  )
}
 export default TanStackComponent;