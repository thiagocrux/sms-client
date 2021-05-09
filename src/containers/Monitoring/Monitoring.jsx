import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '../../components/Button/Button';
import Divider from '../../components/Form/Divider/Divider';
import Field from '../../components/Form/Field/Field';
import Heading from '../../components/Heading/Heading';

import style from './Monitoring.module.css';

export default function Monitoring() {
  const [monitoringInformation, setMonitoringInformation] = useState();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => setMonitoringInformation(data);

  useEffect(() => console.log('Componente montado: [Monitoring]'), []);

  useEffect(() => monitoringInformation && console.log(monitoringInformation), [
    monitoringInformation,
  ]);

  return (
    <>
      <Heading type="primary">Cadastro de monitoramento</Heading>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <Divider>
          <Heading type="secondary">Pós-tratamento</Heading>
          <div className={style['grid-container']}>
            <Heading type="tertiary">1ª VDRL</Heading>
            <Field>
              <label htmlFor="firstVDRLDate">Data</label>
              <input {...register('firstVDRLDate')} type="date" name="firstVDRLDate" />
            </Field>
            <Heading type="tertiary">2ª VDRL</Heading>
            <Field>
              <label htmlFor="secondVDRLDate">Data</label>
              <input {...register('secondVDRLDate')} type="date" name="secondVDRLDate" />
            </Field>
            <Heading type="tertiary">3ª VDRL</Heading>
            <Field>
              <label htmlFor="thirdVDRLDate">Data</label>
              <input {...register('thirdVDRLDate')} type="date" name="thirdVDRLDate" />
            </Field>
          </div>
          <Field>
            <div className={style['flex-container']}>
              <label htmlFor="partnerTreatment">Tratamento de parceiro</label>
              <input {...register('partnerTreatment')} type="checkbox" name="partnerTreatment" />
            </div>
          </Field>
        </Divider>
        <Divider>
          <Heading type="secondary">Outras observações</Heading>
          <Field>
            <textarea
              {...register('observations')}
              name="observations"
              placeholder="Insira as observações sobre o monitoramento"
            ></textarea>
          </Field>
        </Divider>
        <Button type="submit">Cadastrar</Button>
      </form>
    </>
  );
}
