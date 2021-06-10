import React from "react";
import { Search } from "react-bootstrap-icons";

import Field from "../../Layout/Form/Field/Field";
import Heading from "../../Layout/Heading/Heading";

import style from "./SearchForm.module.css";

export default function SearchForm({
  handleSubmit,
  search,
  setSearch,
  formHeader,
}) {
  const { criterion, inputValue } = search;

  return (
    <div className={style["patient-search"]}>
      <Heading type="primary">{formHeader}</Heading>
      <div className={style["grid-container"]}>
        <Field>
          <label htmlFor="search-criterion">Critério de pesquisa</label>
          <select
            value={criterion}
            name="search-criterion"
            className={style["search-criterion"]}
            onChange={(event) =>
              setSearch({ ...search, criterion: event.currentTarget.value })
            }
          >
            <option value="susCardNumber">Número do cartão do SUS</option>
            <option value="cpf">Número do CPF</option>
            <option value="name">Nome do paciente</option>
          </select>
        </Field>
        <Field>
          <label htmlFor="search-input">&nbsp;</label>
          <input
            value={inputValue}
            name="search-input"
            type="text"
            placeholder={
              criterion === "susCardNumber"
                ? "Insira o número do cartão do SUS do paciente"
                : criterion === "cpf"
                ? "Insira o CPF do paciente"
                : "Insira o nome do paciente"
            }
            className={style["search-input"]}
            onChange={(event) =>
              setSearch({ ...search, inputValue: event.currentTarget.value })
            }
          />
        </Field>
      </div>
      <div className={style["flex-container"]}>
        <button className={style.button} onClick={handleSubmit}>
          <Search className={style.icon} />
          Pesquisar
        </button>
      </div>
    </div>
  );
}
