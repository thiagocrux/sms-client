import React, { useEffect, useState } from 'react';
import api from '@utils/api';

import UserList from '../../Users/UserList/UserList';
import UserSearchForm from '../../Users/UserSearchForm/UserSearchForm';

import style from './UserPage.module.css';

export default function PatientPage() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState({
    criterion: 'cpf',
    inputValue: '',
  });

  useEffect(() => {
    api.get('/users/').then((response) => {
      setUsers(response.data.users);
    });
  }, []);

  useEffect(() => {
    const { criterion, inputValue } = search;

    const filter = users.filter((filteredUsers) => {
      const key = Object.keys(filteredUsers).filter((key) => key === criterion);
      return filteredUsers[key]
        .toLowerCase()
        .includes(inputValue.toLowerCase());
    });

    setFilteredUsers(filter);
  }, [users, search]);

  const handleSubmit = () => {
    const { criterion, inputValue } = search;

    const filteredUser = users.filter((user) => {
      const key = Object.keys(user).filter((key) => key === criterion);
      return user[key].toLowerCase() === inputValue.toLowerCase();
    });
    setFilteredUsers(filteredUser);
  };

  return (
    <div className={style.patient}>
      <>
        <UserSearchForm
          formHeader="Localize o usuário que deseja consultar"
          handleSubmit={handleSubmit}
          search={search}
          setSearch={setSearch}
        />
        <UserList filteredResult={filteredUsers} />
      </>
    </div>
  );
}
