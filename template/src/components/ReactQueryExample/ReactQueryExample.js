import {useCreateTodo, useGetTodos} from '../../api/api';
import QueryFeedback from '../common/QueryFeedback/QueryFeedback';
import {Card, CardContent, CardHeader} from '@mui/material';
import React from 'react';

export const ReactQueryExample = () => {
  const {data, error, isLoading, isError} = useGetTodos();
  const createTodoMutation = useCreateTodo();

  return (
    <Card raised>
      <CardHeader title={'react-query'} subheader={'server state management'}/>
      <CardContent>
        <QueryFeedback
          error={error}
          isSuccess={createTodoMutation.isSuccess}
          isError={isError}
          isLoading={isLoading || createTodoMutation.isLoading}
        />
        react-query example
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
      </CardContent>
    </Card>
  )
}