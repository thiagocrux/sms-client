import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { treatmentInitialValues as INITIAL_VALUES } from '../../../../utils/mock';
import api from '../../../../utils/api';

import Button from '../../../../components/Common/Button/Button';
import Divider from '../../../../components/Layout/Form/Divider/Divider';
import Field from '../../../../components/Layout/Form/Field/Field';
import Form from '../../../../components/Layout/Form/Form';
import Heading from '../../../../components/Common/Heading/Heading';
import SubmitContainer from '../../../../components/Layout/Form/SubmitContainer/SubmitContainer';
import ConfirmationModal from '../../../../components/Layout/Modals/ConfirmationModal/ConfirmationModal';
import CancelationModal from '../../../../components/Layout/Modals/CancelationModal/CancelationModal';

import style from './TreatmentForm.module.css';

export default function TreatmentForm() {
  const [formType, setFormType] = useState('create');
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const [openCancelationModal, setOpenCancelationModal] = useState(false);
  const [treatmentInformation, setTreatmentInformation] =
    useState(INITIAL_VALUES);
  const { treatmentID, patientID } = useParams();

  const history = useHistory();

  const handleChange = (field, value) => {
    setTreatmentInformation({ ...treatmentInformation, [field]: value });
  };

  useEffect(() => {
    console.clear();
    console.log(`>> Component [Treatment] mounted`);
    handleFormType();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  function setInputValues() {
    setTreatmentInformation(treatmentInformation);
  }

  function handleFormModal(action) {
    if (action === 'submit') {
      setOpenConfirmationModal(true);
      console.log(treatmentInformation);
    } else if (action === 'cancel') {
      setOpenCancelationModal(true);
    }
  }

  function handleSubmit() {
    formType === 'create'
      ? api.post(`/patients/${patientID}/treatments`, treatmentInformation)
      : api.patch(
          `/patients/${patientID}/treatments/${treatmentID}`,
          treatmentInformation
        );
    setOpenConfirmationModal(false);
    history.push(`/patients/${patientID}`);
  }

  function handleCancel() {
    setOpenCancelationModal(false);
    history.push('/notifications');
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
                value={treatmentInformation.startDate}
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
            click={() => handleFormModal('cancel')}
          >
            Cancelar
          </Button>
          <Button
            type="button"
            action="submit"
            click={() => handleFormModal('submit')}
          >
            {formType === 'create' ? 'Cadastrar' : 'Salvar'}
          </Button>
        </SubmitContainer>
      </Form>
      <ConfirmationModal
        open={openConfirmationModal}
        message={
          formType === 'create'
            ? 'Confirmar novo tratamento?'
            : 'Confirmar atualização?'
        }
        cancel={() => setOpenConfirmationModal(false)}
        confirm={handleSubmit}
      />
      <CancelationModal
        open={openCancelationModal}
        message="Deseja cancelar?"
        cancel={() => setOpenCancelationModal(false)}
        confirm={handleCancel}
      />
    </>
  );
}
