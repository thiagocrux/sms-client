import React from 'react';
import { Link } from 'react-router-dom';
import { formatCPF } from '@utils/dataFormatter';

// import UserControls from '../UserControls/UserControls';

import style from './UserListItem.module.css';

export default function UserListItem({ user }) {
  const { _id, cpf, name, email } = user;

  return (
    <Link className={style.listItem} user={user} to={`/users/${_id}/info`}>
      <span className={style.innerDivider}>{formatCPF(cpf)}</span>
      <span className={style.innerDivider}>{name}</span>
      <span className={style.innerDivider}>{email}</span>
    </Link>
  );
}
