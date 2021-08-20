import React from 'react';

import Heading from '../../Common/Heading/Heading';
import image from '../../../assets/images/campanha_sifilis.jpeg';

import style from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={style.homePage}>
      <Heading size="big" align="center" margin="medium">
        Sobre o sistema
      </Heading>
      <div className={style.flex}>
        <div className={style.flexInnerContainer1}>
          <img
            src={image}
            alt="Campanha: Sífilis não! Teste, trate, cure"
            srcset=""
          />
          <p className={style.imageSource}>
            Fonte: Departamento de Vigilância, Prevenção e Controle das IST, do
            HIV/Aids e das Hepatites Virais do MS
          </p>
        </div>
        <div className={style.flexInnerContainer2}>
          <p className={`${style.paragraph} ${style.firstParagraph}`}>
            O Sistema de Gerenciamento de Casos de Sífilis no Município de
            Petrolina - SGCS, tem como objetivo auxiliar os servidores da saúde
            que desenvolvem seus trabalhos no combate e na erradicação dos casos
            da doença na cidade. Aqui é possível: Ter acesso às informações
            cadastrais, inserir novos pacientes e editar os dados de:
            notificações, exames, tratamentos e outras observações destes
            pacientes. Vale lembrar, que essas informações devem ser editadas e
            vinculas por profissionais das unidades de saúde que sejam
            devidamente cadastrados e autorizados dentro do sistema.
          </p>
        </div>
      </div>
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
        , que pode ser encontrado em:{' '}
        <a
          href="http://www.aids.gov.br/pt-br/pub/2015/protocolo-clinico-e-diretrizes-terapeuticas-para-atencao-integral-pessoas-com-infeccoes"
          target="_blank"
          rel="noreferrer"
        >
          http://www.aids.gov.br/pt-br/pub/2015/protocolo-clinico-e-diretrizes-terapeuticas-para-atencao-integral-pessoas-com-infeccoes
        </a>
        .
      </p>
      <p className={`${style.paragraph} ${style.secondParagraph}`}>
        Outra fonte de informações é o{' '}
        <span>
          Departamento de Doenças de Condições Crônicas e Infecções Sexualmente
          Transmissíveis
        </span>
        , acessível em:{' '}
        <a
          href="http://www.aids.gov.br/pt-br/search/content/S%C3%ADfilis"
          target="_blank"
          rel="noreferrer"
        >
          http://www.aids.gov.br/pt-br/search/content/S%C3%ADfilis
        </a>
        .
      </p>
    </div>
  );
}
