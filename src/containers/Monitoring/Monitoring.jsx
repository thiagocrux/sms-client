import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Button from '../../components/Button/Button';
import Divider from '../../components/Form/Divider/Divider';
import Field from '../../components/Form/Field/Field';
import Heading from '../../components/Heading/Heading';

import style from './Monitoring.module.css';

/* TODO: Replace this logic for an API call with values coming from database */
const MONITORING_DATA = {
  firstVDRLDate: '1917-03-08',
  secondVDRLDate: '1917-03-08',
  thirdVDRLDate: '1917-03-08',
  partnerTreatment: true,
  observations: 'Substituir por conteúdo dinâmico',
};

export default function Monitoring() {
  const [formType, setFormType] = useState('create');

  const [monitoringInformation, setMonitoringInformation] = useState();

  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => setMonitoringInformation(data);

  const { id } = useParams();

  /* Set the type of form on the first render */
  useEffect(() => {
    console.clear();
    console.log(`>> Component [Monitoring] mounted`);
    handleFormType();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* LOG: Show all the submitted information on the console */
  useEffect(
    () => monitoringInformation && console.log(monitoringInformation),
    [monitoringInformation]
  );

  /* Check the existence of params and set the type of form */
  function handleFormType() {
    if (id && formType !== 'update') {
      setFormType('update');
      setInputValues();
      console.log(formType);
    } else if (!id && formType !== 'create') {
      setFormType('create');
      console.log(formType);
    }
  }

  /* Insert the values of the object in the input for updating */
  function setInputValues() {
    setValue('firstVDRLDate', MONITORING_DATA.firstVDRLDate);
    setValue('secondVDRLDate', MONITORING_DATA.secondVDRLDate);
    setValue('thirdVDRLDate', MONITORING_DATA.thirdVDRLDate);
    setValue('partnerTreatment', MONITORING_DATA.partnerTreatment);
    setValue('observations', MONITORING_DATA.observations);
  }

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
        <Button type="submit">{formType === 'create' ? 'Cadastrar' : 'Salvar'}</Button>
      </form>
    </>
  );
}
