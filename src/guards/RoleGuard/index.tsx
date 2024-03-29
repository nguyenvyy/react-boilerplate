import { FC } from 'react';
import { useSelector } from 'react-redux';

import { roleSelector } from 'store/modules/auth';
import { useEffect } from 'react';
import { PATH_NAME } from 'configs';
import { useRouter } from 'hooks/useRouter';

export type RoleGuardProps = {
  requiredRoles?: string[];
};

export const RoleGuard: FC<RoleGuardProps> = ({ requiredRoles, children }) => {
  const { replace } = useRouter();
  const role = useSelector(roleSelector);
  useEffect(() => {
    if (!requiredRoles?.length) return;
    const authorized = requiredRoles.includes(role || '');
    if (!authorized) {
      replace(PATH_NAME.ROOT);
    }
  }, [role, requiredRoles, replace]);
  return <>{children}</>;
};
