import {useCreateTodo, useGetTodos} from './api';
import QueryFeedback from '../components/common/QueryFeedback/QueryFeedback';

export const ApiExample = () => {
  const {data, error, isLoading, isError} = useGetTodos();
  const createTodoMutation = useCreateTodo();

  return (
    <div>
      <QueryFeedback error={error} isSuccess={createTodoMutation.isSuccess} isLoading={isLoading || createTodoMutation.isLoading} isError={isError}/>
      <ul>
        {data?.slice(-5).map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          createTodoMutation.mutate({
            id: Date.now(),
            title: 'Do Laundry',
          })
        }}
      >
        Add Todo
      </button>
    </div>
  )
}
