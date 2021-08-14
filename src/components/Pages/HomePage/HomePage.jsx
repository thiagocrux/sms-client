import React from 'react';

import Heading from '../../Common/Heading/Heading';

import style from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={style.homePage}>
      <Heading size="big" align="center" margin="small">
        Sobre o sistema
      </Heading>
      <p className={`${style.paragraph} ${style.firstParagraph}`}>
        O Sistema de Gerenciamento de Casos de Sífilis no Município de Petrolina
        - SGCS, tem como objetivo auxiliar os servidores da saúde que
        desenvolvem seus trabalhos no combate e na erradicação dos casos da
        doença na cidade. Aqui é possível: Ter acesso às informações cadastrais,
        inserir novos pacientes e editar os dados de: notificações, exames,
        tratamentos e outras observações destes pacientes. Vale lembrar, que
        essas informações devem ser editadas e vinculas por profissionais das
        unidades de saúde que sejam devidamente cadastrados e autorizados dentro
        do sistema.
      </p>
      <Heading size="big" align="center" margin="small">
        Orientação ao profissional
      </Heading>
      <p className={`${style.paragraph} ${style.secondParagraph}`}>
        Em caso de dúvida sobre os protocolos de diagnósticos e tratamento leia
        o{' '}
        <span>
          Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às
          Pessoas com Infecções Sexualmente Transmissíveis (IST) - PCDT-IST
        </span>
        , que pode ser encontrado&nbsp;
        <a href="http://www.aids.gov.br/pt-br/pub/2015/protocolo-clinico-e-diretrizes-terapeuticas-para-atencao-integral-pessoas-com-infeccoes">
          aqui
        </a>
        .
      </p>
    </div>
  );
}
