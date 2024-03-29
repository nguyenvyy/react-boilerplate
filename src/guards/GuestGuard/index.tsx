import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { authSelector } from 'store/modules/auth';
import { PATH_NAME } from 'configs';

export type GuestGuardProps = {};

export const GuestGuard: FC<GuestGuardProps> = (props) => {
  const auth = useSelector(authSelector);
  if (auth.isAuthenticated) {
    return <Redirect to={PATH_NAME.ROOT} />;
  }
  return <> {props.children} </>;
};
