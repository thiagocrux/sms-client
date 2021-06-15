import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { treatmentInitialValues as INITIAL_VALUES } from '../../../../utils/mock';
import api from '../../../../utils/api';
import { formatDateToInput } from '../../../../utils/dataFormatter';

import Button from '../../../../components/Common/Button/Button';
import Divider from '../../../../components/Layout/Form/Divider/Divider';
import Field from '../../../../components/Layout/Form/Field/Field';
import Form from '../../../../components/Layout/Form/Form';
import Heading from '../../../../components/Common/Heading/Heading';
import SubmitContainer from '../../../../components/Layout/Form/SubmitContainer/SubmitContainer';
import ConfirmationModal from '../../../../components/Layout/Modals/ConfirmationModal/ConfirmationModal';

import style from './TreatmentForm.module.css';

export default function TreatmentForm() {
  const [formType, setFormType] = useState('create');
  const [openModal, setOpenModal] = useState(false);
  const [treatmentInformation, setTreatmentInformation] =
    useState(INITIAL_VALUES);
  const { treatmentID, patientID } = useParams();

  const history = useHistory();

  /* Input handlers */
  const handleChange = (field, value) => {
    setTreatmentInformation({ ...treatmentInformation, [field]: value });
  };

  /* Set the type of form on the first render */
  useEffect(() => {
    console.clear();
    console.log(`>> Component [Treatment] mounted`);
    handleFormType();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Check the existence of params and set the type of form */
  function handleFormType() {
    if (treatmentID && formType !== 'update') {
      setFormType('update');
      api
        .get(`/patients/${patientID}/treatments/${treatmentID}`)
        .then((response) => setTreatmentInformation(response.data.treatment));
      setInputValues(treatmentInformation);
      console.log(formType);
    } else if (!treatmentID && formType !== 'create') {
      setFormType('create');
      console.log(formType);
    }
  }

  /* Insert the values of the object in the inputs in case of an update */
  function setInputValues() {
    setTreatmentInformation(treatmentInformation);
  }

  /* Save the input values in the state and then send to the database */
  function handleButtonClick(action) {
    if (action === 'submit') {
      /* TODO:
        1. Validar os dados antes de salvar no banco de dados;
        2. Salvar valores no banco de dados de acordo com o método (criação ou atualização);
      */

      setOpenModal(true);
      console.log(treatmentInformation);
    } else if (action === 'cancel') {
      history.push('/notifications');
      /* TODO:
        1. Criar modal para confirmar cancelamento.
      */
    }
  }

  function handleSubmit() {
    api
      .post(`/patients/${patientID}/treatments`, treatmentInformation)
      .then((response) => console.log(response));
    setOpenModal(false);
    history.goBack();
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
                onChange={(event) =>
                  handleChange('medication', event.currentTarget.value)
                }
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
                onChange={(event) =>
                  handleChange('ubsLocation', event.currentTarget.value)
                }
                value={treatmentInformation.ubsLocation}
              />
            </Field>
            <Field>
              <label htmlFor="startDate">Data</label>
              <input
                type="date"
                name="startDate"
                onChange={(event) =>
                  handleChange('startDate', event.currentTarget.value)
                }
                value={formatDateToInput(treatmentInformation.startDate)}
              />
            </Field>
            <Field>
              <label htmlFor="dosage">Dosagem</label>
              <input
                name="dosage"
                placeholder="Insira as informações sobre dosagem"
                onChange={(event) =>
                  handleChange('dosage', event.currentTarget.value)
                }
                value={treatmentInformation.dosage}
              />
            </Field>
            <Field>
              <label htmlFor="observations">
                Observações sobre o tratamento
              </label>
              <textarea
                name="observations"
                placeholder="Insira as observações sobre o tratamento"
                onChange={(event) =>
                  handleChange('observations', event.currentTarget.value)
                }
                value={treatmentInformation.observations}
              ></textarea>
            </Field>
            <Field>
              <label htmlFor="parnerInfo">Informações sobre parceiro</label>
              <textarea
                name="partnerInfo"
                placeholder="Insira as informações sobre o parceiro"
                onChange={(event) =>
                  handleChange('partnerInfo', event.currentTarget.value)
                }
                value={treatmentInformation.partnerInfo}
              ></textarea>
            </Field>
          </div>
        </Divider>
        <SubmitContainer>
          <Button
            type="button"
            action="cancel"
            click={() => handleButtonClick('cancel')}
          >
            Cancelar
          </Button>
          <Button
            type="button"
            action="submit"
            click={() => handleButtonClick('submit')}
          >
            {formType === 'create' ? 'Cadastrar' : 'Salvar'}
          </Button>
        </SubmitContainer>
      </Form>
      <ConfirmationModal
        open={openModal}
        message="Confirmar novo tratamento?"
        handleCancel={() => setOpenModal(false)}
        handleConfirm={handleSubmit}
      />
    </>
  );
}
