import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '../../components/Button/Button';
import Divider from '../../components/Form/Divider/Divider';
import Field from '../../components/Form/Field/Field';
import Heading from '../../components/Heading/Heading';

import style from './Treatment.module.css';

export default function Treatment() {
  const [treatmentInformation, setTreatmentInformation] = useState();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => setTreatmentInformation(data);

  useEffect(() => console.log('Componente montado: [Treatment]'), []);

  useEffect(() => treatmentInformation && console.log(treatmentInformation), [
    treatmentInformation,
  ]);

  return (
    <>
      <Heading type="primary">Cadastro de tratamento</Heading>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <Divider>
          <Heading type="secondary">Penicilina BZ</Heading>
          <div className={style.container}>
            <Heading type="tertiary">1ª Dose</Heading>
            <Field>
              <label htmlFor="firstDoseLocation">Local UBS</label>
              <input
                {...register('firstDoseLocation')}
                type="text"
                name="firstDoseLocation"
                placeholder="Insira o local da primeira dose"
              />
            </Field>
            <Field>
              <label htmlFor="firstDoseDate">Data</label>
              <input {...register('firstDoseDate')} type="date" name="firstDoseDate" />
            </Field>
            <Heading type="tertiary">2ª Dose</Heading>
            <Field>
              <label htmlFor="secondDoseLocation">Local UBS</label>
              <input
                {...register('secondDoseLocation')}
                type="text"
                name="secondDoseLocation"
                placeholder="Insira o local da segunda dose"
              />
            </Field>
            <Field>
              <label htmlFor="secondDoseDate">Data</label>
              <input {...register('secondDoseDate')} type="date" name="secondDoseDate" />
            </Field>
            <Heading type="tertiary">3ª Dose</Heading>
            <Field>
              <label htmlFor="thirdDoseLocation">Local UBS</label>
              <input
                {...register('thirdDoseLocation')}
                type="text"
                name="thirdDoseLocation"
                placeholder="Insira o local da terceira dose"
              />
            </Field>
            <Field>
              <label htmlFor="thirdDoseDate">Data</label>
              <input {...register('thirdDoseDate')} type="date" name="thirdDoseDate" />
            </Field>
          </div>
        </Divider>
        <Divider>
          <Heading type="secondary">Outro tratamento</Heading>
          <Field>
            <textarea
              {...register('otherTreatments')}
              name="otherTreatments"
              placeholder="Descreva o tratamento"
            ></textarea>
          </Field>
        </Divider>
        <Button type="submit">Cadastrar</Button>
      </form>
    </>
  );
}
