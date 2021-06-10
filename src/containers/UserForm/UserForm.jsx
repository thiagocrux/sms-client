import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { userInitialValues, userMockedValues } from "../../utils/mock";

import Button from "../../components/Common/Button/Button";
import Divider from "../../components/Layout/Form/Divider/Divider";
import Field from "../../components/Layout/Form/Field/Field";
import Form from "../../components/Layout/Form/Form";
import Heading from "../../components/Layout/Heading/Heading";
import SubmitContainer from "../../components/Layout/Form/SubmitContainer/SubmitContainer";

import style from "./UserForm.module.css";

// FIXME: Deletar objeto quando o banco de dados estiver acessível.
const MOCK_VALUES = userMockedValues;
const INITIAL_VALUES = userInitialValues;

export default function UserForm() {
  const [formType, setFormType] = useState("create");
  const [userInformation, setUserInformation] = useState(INITIAL_VALUES);
  const { userID } = useParams();

  /* Input handlers */
  const handleChange = (field, value) =>
    setUserInformation({ ...userInformation, [field]: value });

  /* Set the type of form on the first render */
  useEffect(() => {
    console.clear();
    console.log(`>> Component [USER] mounted`);
    handleFormType();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* LOG: Mostra todas as informações submetidas pelo formulário no console */
  // useEffect(() => {
  //   if (userInformation) {
  //     console.log(`FORM TYPE: ${formType}`);
  //     console.log(userInformation);
  //   }
  // }, [userInformation, formType]);

  /* Check the existence of params and set the type of form */
  function handleFormType() {
    if (userID && formType !== "update") {
      setFormType("update");
      setInputValues();
      console.log(formType);
    } else if (!userID && formType !== "create") {
      setFormType("create");
      console.log(formType);
    }
  }

  /* Insert the values of the object in the inputs in case of an update */
  function setInputValues() {
    // FIXME: Buscar informações no banco de dados e substituir o objeto abaixo.
    setUserInformation(MOCK_VALUES);
  }

  /* Save the input values in the state and then send to the database */
  function handleButtonClick(action) {
    if (action === "submit") {
      /* TODO:
        1. Validar os dados antes de salvar no banco de dados;
        2. Salvar valores no banco de dados de acordo com o método (criação ou atualização);
      */
      console.log(userInformation);
      axios.post("http://localhost:8000/api/v1/users/", userInformation);
    } else if (action === "cancel") {
      /* TODO:
        1. Criar lógica para o botão de cancelar.
      */
      console.log("Action cancelled!");
    }
  }

  return (
    <>
      <Heading type="primary">
        Esta é a página de cadastro/alteração de usuários, mas ainda não foi
        implementada...
      </Heading>
      <Form>
        <Divider>
          <Field>
            <label htmlFor="">Nome</label>
            <input
              name=""
              onChange={(event) =>
                handleChange("name", event.currentTarget.value)
              }
              value={userInformation.name}
              placeholder="Insira o nome do usuário"
            />
          </Field>
          <Field>
            <label htmlFor="">CPF</label>
            <input
              name=""
              onChange={(event) =>
                handleChange("name", event.currentTarget.value)
              }
              value={userInformation.cpf}
              placeholder=""
            />
          </Field>
          <Field>
            <label htmlFor="">Cargo</label>
            <input
              name=""
              onChange={(event) =>
                handleChange("name", event.currentTarget.value)
              }
              value={userInformation.role}
              placeholder=""
            />
          </Field>
          <Field>
            <label htmlFor="">Local de trabalho</label>
            <input
              name=""
              onChange={(event) =>
                handleChange("name", event.currentTarget.value)
              }
              value={userInformation.workLocation}
              placeholder=""
            />
          </Field>
          <Field>
            <label htmlFor="">E-mail</label>
            <input
              type="email"
              name=""
              onChange={(event) =>
                handleChange("name", event.currentTarget.value)
              }
              value={userInformation.email}
              placeholder=""
            />
          </Field>
          <Field>
            <label htmlFor="">Password</label>
            <input
              type="password"
              name=""
              onChange={(event) =>
                handleChange("name", event.currentTarget.value)
              }
              value={userInformation.password}
              placeholder=""
            />
          </Field>
          <Field>
            <label htmlFor="">Permissão de administrador?</label>
            <input
              type=""
              name=""
              onChange={(event) =>
                handleChange("name", event.currentTarget.value)
              }
              value={userInformation.admin}
              placeholder=""
            />
          </Field>
        </Divider>
        <SubmitContainer>
          <Button type="button" action="cancel" click={handleButtonClick}>
            Cancelar
          </Button>
          <Button type="button" action="submit" click={handleButtonClick}>
            {formType === "create" ? "Cadastrar" : "Salvar"}
          </Button>
        </SubmitContainer>
      </Form>
    </>
  );
}
