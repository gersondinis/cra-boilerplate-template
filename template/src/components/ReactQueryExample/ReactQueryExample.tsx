import {Card, CardContent, CardHeader} from '@mui/material';
import {ToDoList} from 'components/ToDoList/ToDoList';
import {ReactQueryExampleSnippet} from './ReactQueryExampleSnippet';

export const ReactQueryExample = () => {

  return (
    <Card raised>
      <CardHeader title={'react-query'} subheader={'server state management'}/>
      <CardContent>
        <ToDoList/>
      </CardContent>
      <ReactQueryExampleSnippet/>
    </Card>
  )
}
