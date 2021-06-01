import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { patientMockedValues, patientInitialValues } from '../../utils/mock';

import Button from '../../components/Common/Button/Button';
import Divider from '../../components/Layout/Form/Divider/Divider';
import Field from '../../components/Layout/Form/Field/Field';
import Form from '../../components/Layout/Form/Form';
import Heading from '../../components/Layout/Heading/Heading';
import SubmitContainer from '../../components/Layout/Form/SubmitContainer/SubmitContainer';

import style from './Patient.module.css';

// FIXME: Deletar objeto quando o banco de dados estiver acessível.
const MOCK_VALUES = patientMockedValues;
const INITIAL_VALUES = patientInitialValues;

export default function Patient() {
  const [formType, setFormType] = useState('create');
  const [patientInformation, setPatientInformation] = useState(INITIAL_VALUES);
  const { patientID } = useParams();

  /* Input handlers */
  const handleChange = (field, value) =>
    setPatientInformation({ ...patientInformation, [field]: value });

  /* Set the type of form on the first render */
  useEffect(() => {
    console.clear();
    console.log(`>> Component [PATIENT] mounted`);
    handleFormType();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* LOG: Mostra todas as informações submetidas pelo formulário no console */
  // useEffect(() => {
  //   if (patientInformation) {
  //     console.log(`FORM TYPE: ${formType}`);
  //     console.log(patientInformation);
  //   }
  // }, [patientInformation, formType]);

  /* Check the existence of params and set the type of form */
  function handleFormType() {
    if (patientID && formType !== 'update') {
      setFormType('update');
      setInputValues();
      console.log(formType);
    } else if (!patientID && formType !== 'create') {
      setFormType('create');
      console.log(formType);
    }
  }

  /* Insert the values of the object in the inputs in case of an update */
  function setInputValues() {
    // FIXME: Buscar informações no banco de dados e substituir o objeto abaixo.
    setPatientInformation(MOCK_VALUES);
  }

  /* Save the input values in the state and then send to the database */
  function handleButtonClick(action) {
    if (action === 'submit') {
      /* TODO:
        1. Validar os dados antes de salvar no banco de dados;
        2. Salvar valores no banco de dados de acordo com o método (criação ou atualização);
      */
      console.log(patientInformation);
    } else if (action === 'cancel') {
      /* TODO:
        1. Criar lógica para o botão de cancelar.
      */
      console.log('Action cancelled!');
    }
  }

  return (
    <>
      <Heading type='primary'>
        {formType === 'update' ? 'Atualização' : 'Cadastro'} de paciente
      </Heading>
      <Form>
        <Divider>
          <Heading type='secondary'>Dados do paciente</Heading>
          <div
            className={`${style['grid-container']} ${style['first-grid-container']}`}
          >
            <Field>
              <label htmlFor='susCardNumber'>Código do SUS</label>
              <input
                name='susCardNumber'
                onChange={event =>
                  handleChange('susCardNumber', event.currentTarget.value)
                }
                value={patientInformation.susCardNumber}
                placeholder='Insira o número do cartão do SUS'
              />
            </Field>
            <Field>
              <label htmlFor='name'>Nome</label>
              <input
                name='name'
                onChange={event =>
                  handleChange('name', event.currentTarget.value)
                }
                value={patientInformation.name}
                placeholder='Insira o nome do paciente'
              />
            </Field>
            <Field>
              <label htmlFor='cpf'>CPF</label>
              <input
                name='cpf'
                onChange={event =>
                  handleChange('cpf', event.currentTarget.value)
                }
                value={patientInformation.cpf}
                placeholder='Insira o CPF do paciente'
              />
            </Field>
            <Field>
              <label htmlFor='socialName'>Nome social</label>
              <input
                name='socialName'
                onChange={event =>
                  handleChange('socialName', event.currentTarget.value)
                }
                value={patientInformation.socialName}
                placeholder='Insira o nome do paciente'
              />
            </Field>
            <Field>
              <label htmlFor='birthDate'>Data de nascimento</label>
              <input
                type='date'
                name='birthDate'
                onChange={event =>
                  handleChange('birthDate', event.currentTarget.value)
                }
                value={patientInformation.birthDate}
              />
            </Field>
            <Field>
              <label htmlFor='gender'>Sexo</label>
              <select
                name='gender'
                onChange={event =>
                  handleChange('gender', event.currentTarget.value)
                }
                value={patientInformation.gender}
              >
                <option value='' disabled selected hidden>
                  Selecione uma opção
                </option>
                <option value='Feminino'>Feminino</option>
                <option value='Masculino'>Masculino</option>
                <option value='Outro'>Outro</option>
              </select>
            </Field>
            <Field>
              <label htmlFor='nationality'>Naturalidade</label>
              <select
                name='nationality'
                onChange={event =>
                  handleChange('nationality', event.currentTarget.value)
                }
                value={patientInformation.nationality}
              >
                <option value='' disabled hidden>
                  Selecione uma opção
                </option>
                <option value='Brasileiro'>Brasileiro</option>
                <option value='Naturalizado'>Naturalizado</option>
                <option value='Outro'>Outro</option>
              </select>
            </Field>
            <Field>
              <label htmlFor='phone'>Telefone</label>
              <input
                name='phone'
                onChange={event =>
                  handleChange('phone', event.currentTarget.value)
                }
                value={patientInformation.phone}
                placeholder='Insira o telefone do paciente'
              />
            </Field>
            <Field>
              <label htmlFor='email'>E-mail</label>
              <input
                name='email'
                onChange={event =>
                  handleChange('email', event.currentTarget.value)
                }
                value={patientInformation.email}
                type='email'
                placeholder='Insira o e-mail do paciente'
              />
            </Field>
            <Field>
              <label htmlFor='motherName'>Nome da mãe do paciente</label>
              <input
                name='motherName'
                onChange={event =>
                  handleChange('motherName', event.currentTarget.value)
                }
                value={patientInformation.motherName}
                placeholder='Insira o nome da mãe do paciente'
              />
            </Field>
          </div>
        </Divider>
        <Divider>
          <Heading type='secondary'>Endereço do paciente</Heading>
          <div
            className={`${style['grid-container']} ${style['second-grid-container']}`}
          >
            <Field>
              <label htmlFor='zipCode'>CEP</label>
              <input
                name='zipCode'
                onChange={event =>
                  handleChange('zipCode', event.currentTarget.value)
                }
                value={patientInformation.zipCode}
                placeholder='Insira o CEP da residência'
              />
            </Field>
            <Field>
              <label htmlFor='state'>Estado</label>
              <input
                name='state'
                onChange={event =>
                  handleChange('state', event.currentTarget.value)
                }
                value={patientInformation.state}
                placeholder='Insira o estado de residência'
              />
            </Field>
            <Field>
              <label htmlFor='city'>Cidade</label>
              <input
                name='city'
                onChange={event =>
                  handleChange('city', event.currentTarget.value)
                }
                value={patientInformation.city}
                placeholder='Insira a cidade de residência'
              />
            </Field>
            <Field>
              <label htmlFor='neighbourhood'>Bairro</label>
              <input
                name='neighbourhood'
                onChange={event =>
                  handleChange('neighbourhood', event.currentTarget.value)
                }
                value={patientInformation.neighbourhood}
                placeholder='Insira o bairro de residência'
              />
            </Field>
            <Field>
              <label htmlFor='street'>Logradouro</label>
              <input
                name='street'
                onChange={event =>
                  handleChange('street', event.currentTarget.value)
                }
                value={patientInformation.street}
                placeholder='Insira a rua de residência'
              />
            </Field>
            <Field>
              <label htmlFor='houseNumber'>Número da residência</label>
              <input
                name='houseNumber'
                onChange={event =>
                  handleChange('houseNumber', event.currentTarget.value)
                }
                value={patientInformation.houseNumber}
                placeholder='Insira o número da residência'
              />
            </Field>
          </div>
        </Divider>
        <SubmitContainer>
          <Button type='button' action='cancel' click={handleButtonClick}>
            Cancelar
          </Button>
          <Button type='button' action='submit' click={handleButtonClick}>
            {formType === 'create' ? 'Cadastrar' : 'Salvar'}
          </Button>
        </SubmitContainer>
      </Form>
    </>
  );
}
