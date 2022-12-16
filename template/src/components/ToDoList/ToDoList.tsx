import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import CheckIcon from '@mui/icons-material/Check';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import {Avatar, Card, CardHeader, IconButton, Stack} from '@mui/material';
import {LoadingScreen} from 'components/common/LoadingScreen/LoadingScreen';
import {actions} from 'store/actions';
import {useStore} from 'store/store';
import {FC} from 'react';
import {useMemo} from 'react';
import {IToDo} from 'types/domain/ToDo.types';
import {useGetToDos} from 'xhr/hooks/api';

export const ToDoList: FC<IToDoList> = ({filterFn = () => true}) => {
  const { toDos, userId } = useStore();
  const { data, isLoading } = useGetToDos({params: {userId}});

  const toDosList = useMemo(() => {
    return data?.filter(filterFn) || [];
  }, [data, filterFn])

  return (
    <Stack gap={2}>
      {!isLoading && !toDosList.length && 'nothing to show...'}
      {toDosList.slice(-5).filter(filterFn).map((toDo) => {
        const alreadyInCart = toDos.some(({ id }) => id === toDo.id);
        const clickHandler = alreadyInCart ? () => actions.toDos.remove(toDo.id) : () => actions.toDos.add(toDo);
        const endIcon = alreadyInCart ? <RemoveShoppingCartIcon color='error'/> : <AddShoppingCartIcon color='primary' />;

        return (
          <Card
            key={toDo.id}
            raised={!alreadyInCart}
          >
            <CardHeader
              title={<b>{toDo.title}</b>}
              avatar={<Avatar>{toDo.completed ? <CheckIcon/> : <HourglassEmptyIcon/>}</Avatar>}
              action={
                <IconButton onClick={clickHandler}>
                  {endIcon}
                </IconButton>
              }
            />
          </Card>
        );
      })}
      {isLoading && <LoadingScreen />}
    </Stack>
  );
};

export type IToDoList = {
  filterFn?: (todo: IToDo) => boolean
}
