import {FC} from 'react';
import {CircularProgress, Dialog, DialogContent} from '@mui/material';

export const LoadingScreen: FC<ILoadingScreenProps> = ({loading = true, onClick = () => null}) => {

  if (!loading) return null;

  return (
    <Dialog
      PaperProps={{
        style: {
          backgroundColor: 'transparent',
          boxShadow: 'none'
        },
      }}
      open={loading}
      onClick={onClick}
    >
      <DialogContent>
        <CircularProgress color='inherit' />
      </DialogContent>
    </Dialog>
  );
};

export type ILoadingScreenProps = {
  loading?: boolean,
  onClick?: (args: any) => any
};