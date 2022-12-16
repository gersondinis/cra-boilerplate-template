import {FC, ReactNode} from 'react';

export const Dummy: FC<IDummyProps> = ({children}: IDummyProps) => {
  return (
    <>
      {children}
    </>
  );
};

export interface IDummyProps {
  children?: ReactNode;
}
