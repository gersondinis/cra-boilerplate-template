import {Card, CardContent, CardHeader} from '@mui/material';
import {useCreatePost, useGetPosts} from '../../xhr/hooks/example';
import {LoadingScreen} from '../common/LoadingScreen/LoadingScreen';
import {ReactQueryExampleSnippet} from './ReactQueryExampleSnippet';

export const ReactQueryExample = () => {
  const {data, isLoading} = useGetPosts();
  const createPostMutation = useCreatePost();

  return (
    <Card raised>
      <CardHeader title={'react-query'} subheader={'server state management'}/>
      <CardContent>
        <ul>
          {data?.slice(-5).map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
        <button
          onClick={() => {
            createPostMutation.mutate({
              id: Date.now(),
              title: 'Do Laundry',
            })
          }}
        >
          Add Post
        </button>
        {(isLoading || createPostMutation.isLoading) && <LoadingScreen/>}
      </CardContent>
      <ReactQueryExampleSnippet/>
    </Card>
  )
}
