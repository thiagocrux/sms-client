import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '../../components/Button/Button';
import Divider from '../../components/Form/Divider/Divider';
import Field from '../../components/Form/Field/Field';
import Heading from '../../components/Heading/Heading';

import style from './Patient.module.css';

export default function Patient() {
  const [patientInformation, setPatientInformation] = useState();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => setPatientInformation(data);

  useEffect(() => console.log('Componente montado: [Patient]'), []);

  useEffect(() => patientInformation && console.log(patientInformation), [patientInformation]);

  return (
    <>
      <Heading type="primary">Cadastro de paciente</Heading>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <Divider>
          <Heading type="secondary">Dados do paciente</Heading>
          <div className={`${style['grid-container']} ${style['first-grid-container']}`}>
            <Field>
              <label htmlFor="SUSCardNumber">Código do SUS</label>
              <input
                {...register('SUSCardNumber', { required: true })}
                placeholder="Insira o número do cartão do SUS"
              />
            </Field>
            <Field>
              <label htmlFor="name">Nome</label>
              <input
                {...register('name', { required: true })}
                placeholder="Insira o nome do paciente"
              />
            </Field>
            <Field>
              <label htmlFor="notificationType">Tipo de notificação</label>
              <select {...register('notificationType')}>
                <option value="">Selecione uma opção</option>
                <option value="Sífilis adquirida">Sífilis adquirida</option>
                <option value="Sífilis congênita">Sífilis congênita</option>
                <option value="Sífilis gestante">Sífilis gestante</option>
              </select>
            </Field>
            <Field>
              <label htmlFor="socialName">Nome social</label>
              <input {...register('socialName')} placeholder="Insira o nome do paciente" />
            </Field>
            <Field>
              <label htmlFor="gender">Sexo</label>
              <select {...register('gender')}>
                <option value="">Selecione uma opção</option>
                <option value="Feminino">Feminino</option>
                <option value="Masculino">Masculino</option>
                <option value="Outro">Outro</option>
              </select>
            </Field>
            <Field>
              <label htmlFor="nationality">Naturalidade</label>
              <select {...register('nationality')}>
                <option value="">Selecione uma opção</option>
                <option value="Brasileiro">Brasileiro</option>
                <option value="Naturalizado">Naturalizado</option>
                <option value="Outro">Outro</option>
              </select>
            </Field>
            <Field>
              <label htmlFor="phone">Telefone</label>
              <input {...register('phone')} placeholder="Insira o telefone do paciente" />
            </Field>
            <Field>
              <label htmlFor="email">E-mail</label>
              <input
                {...register('email')}
                type="email"
                placeholder="Insira o e-mail do paciente"
              />
            </Field>
            <Field>
              <label htmlFor="motherName">Nome da mãe do paciente</label>
              <input {...register('motherName')} placeholder="Insira o nome da mãe do paciente" />
            </Field>
          </div>
        </Divider>
        <Divider>
          <Heading type="secondary">Endereço do paciente</Heading>
          <div className={`${style['grid-container']} ${style['second-grid-container']}`}>
            <Field>
              <label htmlFor="zipCode">CEP</label>
              <input {...register('zipCode')} placeholder="Insira o CEP da residência" />
            </Field>
            <Field>
              <label htmlFor="state">Estado</label>
              <input {...register('state')} placeholder="Insira o estado de residência" />
            </Field>
            <Field>
              <label htmlFor="city">Cidade</label>
              <input {...register('city')} placeholder="Insira a cidade de residência" />
            </Field>
            <Field>
              <label htmlFor="neighbourhood">Bairro</label>
              <input {...register('neighbourhood')} placeholder="Insira o bairro de residência" />
            </Field>
            <Field>
              <label htmlFor="street">Logradouro</label>
              <input {...register('street')} placeholder="Insira o CEP da residência" />
            </Field>
            <Field>
              <label htmlFor="houseNumber">Número da residência</label>
              <input {...register('houseNumber')} placeholder="Insira o número da residência" />
            </Field>
          </div>
        </Divider>

        <Button type="submit">Cadastrar</Button>
      </form>
    </>
  );
}
