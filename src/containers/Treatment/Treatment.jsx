import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { treatmentMockedValues, treatmentResetValues } from '../../utils/mock';

import Button from '../../components/Common/Button/Button';
import Divider from '../../components/Layout/Form/Divider/Divider';
import Field from '../../components/Layout/Form/Field/Field';
import Form from '../../components/Layout/Form/Form';
import Heading from '../../components/Layout/Heading/Heading';
import SubmitContainer from '../../components/Layout/Form/SubmitContainer/SubmitContainer';

import style from './Treatment.module.css';

// FIXME: Deletar objeto quando o banco de dados estiver acessível.
const MOCK_VALUES = treatmentMockedValues;
const INITIAL_VALUES = treatmentResetValues;

export default function Treatment() {
  const [formType, setFormType] = useState('create');
  const [treatmentInformation, setTreatmentInformation] = useState(INITIAL_VALUES);
  const { treatmentID } = useParams();

  /* Input handlers */

  const handleMedicationInputChange = (event) =>
    setTreatmentInformation({ ...treatmentInformation, medication: event.target.value });

  const handleUBSLocationInputChange = (event) =>
    setTreatmentInformation({ ...treatmentInformation, ubsLocation: event.target.value });

  const handleStartDateInputChange = (event) =>
    setTreatmentInformation({ ...treatmentInformation, startDate: event.target.value });

  const handleDosageInputChange = (event) =>
    setTreatmentInformation({ ...treatmentInformation, dosage: event.target.value });

  const handleObservationsInputChange = (event) =>
    setTreatmentInformation({ ...treatmentInformation, observations: event.target.value });

  const handlePartnerInfoInputChange = (event) =>
    setTreatmentInformation({ ...treatmentInformation, partnerInfo: event.target.value });

  /* Set the type of form on the first render */
  useEffect(() => {
    console.clear();
    console.log(`>> Component [TREATMENT] mounted`);
    handleFormType();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* LOG: Mostra todas as informações submetidas pelo formulário no console */
  useEffect(() => {
    if (treatmentInformation) {
      console.log(`FORM TYPE: ${formType}`);
      console.log(treatmentInformation);
    }
  }, [treatmentInformation, formType]);

  /* Check the existence of params and set the type of form */
  function handleFormType() {
    if (treatmentID && formType !== 'update') {
      setFormType('update');
      setInputValues();
      console.log(formType);
    } else if (!treatmentID && formType !== 'create') {
      setFormType('create');
      console.log(formType);
    }
  }

  /* Insert the values of the object in the inputs in case of an update */
  function setInputValues() {
    // FIXME: Buscar informações no banco de dados e substituir o objeto abaixo.
    setTreatmentInformation(MOCK_VALUES);
  }

  /* Save the input values in the state and then send to the database */
  function handleButtonClick(action) {
    if (action === 'submit') {
      /* TODO:
        1. Validar os dados antes de salvar no banco de dados;
        2. Salvar valores no banco de dados de acordo com o método (criação ou atualização);
      */
      console.log(treatmentInformation);
    } else if (action === 'cancel') {
      /* TODO:
        1. Criar lógica para o botão de cancelar.
      */
      console.log('Action cancelled!');
    }
  }

  return (
    <>
      <Heading type="primary">
        {formType === 'update' ? 'Atualização' : 'Cadastro'} de tratamento
      </Heading>
      <Form>
        <Divider>
          <Heading type="secondary">Informações sobre o tratamento</Heading>
          <div className={style.container}>
            <Field>
              <label htmlFor="medication">Medicamento</label>
              <select
                name="medication"
                onChange={handleMedicationInputChange}
                value={treatmentInformation.medication}
              >
                <option value="" disabled selected hidden>
                  Selecione uma opção
                </option>
                <option value="Penicilina">Penicilina</option>
                <option value="Doxiciclina">Doxiciclina</option>
                <option value="Ceftriaxona">Ceftriaxona</option>
              </select>
            </Field>
            <Field>
              <label htmlFor="ubsLocation">Localização da UBS</label>
              <input
                type="text"
                name="ubsLocation"
                placeholder="Insira a localização da UBS"
                value={treatmentInformation.ubsLocation}
                onChange={handleUBSLocationInputChange}
              />
            </Field>
            <Field>
              <label htmlFor="startDate">Data</label>
              <input
                type="date"
                name="startDate"
                onChange={handleStartDateInputChange}
                value={treatmentInformation.startDate}
              />
            </Field>
            <Field>
              <label htmlFor="dosage">Dosagem</label>
              <input
                name="dosage"
                placeholder="Insira as informações sobre dosagem"
                onChange={handleDosageInputChange}
                value={treatmentInformation.dosage}
              />
            </Field>
            <Field>
              <label htmlFor="observations">Observações sobre o tratamento</label>
              <textarea
                name="observations"
                placeholder="Insira as observações sobre o tratamento"
                value={treatmentInformation.observations}
                onChange={handleObservationsInputChange}
              ></textarea>
            </Field>
            <Field>
              <label htmlFor="parnerInfo">Informações sobre parceiro</label>
              <textarea
                name="partnerInfo"
                placeholder="Insira as informações sobre o parceiro"
                value={treatmentInformation.partnerInfo}
                onChange={handlePartnerInfoInputChange}
              ></textarea>
            </Field>
          </div>
        </Divider>
        <SubmitContainer>
          <Button type="button" action="cancel" click={handleButtonClick}>
            Cancelar
          </Button>
          <Button type="button" action="submit" click={handleButtonClick}>
            {formType === 'create' ? 'Cadastrar' : 'Salvar'}
          </Button>
        </SubmitContainer>
      </Form>
    </>
  );
}
