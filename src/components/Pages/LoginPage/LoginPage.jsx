import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import api from '@utils/api';

import Button from '@components/Common/Buttons/Button/Button';
import Field from '@components/Layout/Form/Field/Field';
import Form from '@components/Layout/Form/Form';
import SubmitContainer from '@components/Layout/Form/SubmitContainer/SubmitContainer';

export default function LoginPage() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [isLogged, setIsLogged] = useState(false);
  // const history = useHistory();

  const handleChange = (field, value) => {
    setCredentials({ ...credentials, [field]: value });
  };

  const handleSubmit = () => {
    api.post('/users/login', credentials).then((response) => {
      if (!response.data.auth) {
        setIsLogged(false);
        console.log(!response.data.auth);
      } else {
        localStorage.setItem('token', response.data.token);
        setIsLogged(true);
        console.log(response);
        // history.push('/');
      }
    });
  };

  return (
    <>
      <Form>
        <h1>Login</h1>
        <Field>
          <label>Usuário</label>
          <input
            type="text"
            value={credentials.email}
            onChange={(event) =>
              handleChange('email', event.currentTarget.value)
            }
          />
        </Field>
        <Field>
          <label>Senha</label>
          <input
            type="text"
            value={credentials.password}
            onChange={(event) =>
              handleChange('password', event.currentTarget.value)
            }
          />
        </Field>
        <SubmitContainer>
          <Button
            type="button"
            action="submit"
            click={() => handleSubmit('submit')}
          >
            Entrar
          </Button>
        </SubmitContainer>
        <p>Não lembra da sua senha? clique aqui</p>
      </Form>
      {isLogged && <h1>YOU ARE LOGGED</h1>}
    </>
  );
}
