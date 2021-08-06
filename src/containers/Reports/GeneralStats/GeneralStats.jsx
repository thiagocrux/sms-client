import React from 'react';

import Card from '@components/Common/Card/Card';
import Heading from '@components/Common/Heading/Heading';
import Info from '@components/Common/Info/Info';

export default function GeneralStats({ stats }) {
  return (
    <div>
      <Card>
        <Heading size="medium" align="start" margin="small">
          Informações cadastradas no sistema
        </Heading>
        <div>
          <Heading size="small" align="start" margin="small">
            Estatísticas de paciente
          </Heading>
          <Info
            class="regular"
            label="Total de pacientes cadastrados"
            info={stats && stats.numberOfPatients}
          />
          <Info
            class="regular"
            label="Pacientes do sexo feminino"
            info={stats && stats.numberOfFemalePatients}
          />
          <Info
            class="regular"
            label="Pacientes do sexo masculino"
            info={stats && stats.numberOfMalePatients}
          />
          <Info
            class="regular"
            label="Pacientes intersexuais"
            info={stats && stats.numberOfIntersexPatients}
          />
          <Info
            class="regular"
            label="Casos de sífilis adquirida"
            info={stats && stats.acquiredSyphilisOcurrences}
          />
          <Info
            class="regular"
            label="Casos de sífilis congênita"
            info={stats && stats.congenitalSyphilisOcurrences}
          />
          <Info
            class="regular"
            label="Casos de sífilis em gestante"
            info={stats && stats.gestationalSyphilisOcurrences}
          />
          <Heading size="small" align="start" margin="small">
            Informações cadastradas no sistema
          </Heading>
          <Info
            class="regular"
            label="Total de exames cadastrados"
            info={stats && stats.numberOfExams}
          />
          <Info
            class="regular"
            label="Nº de testes rápidos"
            info={stats && stats.numberOfQuickTests}
          />
          <Info
            class="regular"
            label="Nº de FTA-ABS IgMs"
            info={stats && stats.numberOfIgMTests}
          />
          <Info
            class="regular"
            label="Nº de FTA-ABS IgGs"
            info={stats && stats.numberOfIgGTests}
          />
          <Info
            class="regular"
            label="Nº de resultados reagentes"
            info={stats && stats.numberOfReagentResults}
          />
          <Info
            class="regular"
            label="Nº de resultados não-reagentes"
            info={stats && stats.numberOfNonReagentResults}
          />
          <Info
            class="regular"
            label="Total de notificações"
            info={stats && stats.numberOfNotifications}
          />
          <Info
            class="regular"
            label="Total de observações cadastradas"
            info={stats && stats.numberOfObservations}
          />
          <Info
            class="regular"
            label="Total de tratamentos cadastrados"
            info={stats && stats.numberOfTreatments}
          />
          <Info
            class="regular"
            label="Tratamentos usando penicilina"
            info={stats && stats.numberOfTreatmentsUsingPenilicillin}
          />
          <Info
            class="regular"
            label="Tratamentos usando doxiciclina"
            info={stats && stats.numberOfTreatmentsUsingDoxycycline}
          />
          <Info
            class="regular"
            label="Tratamentos usando ceftriaxona"
            info={stats && stats.numberOfTreatmentsUsingCeftriaxone}
          />
        </div>
      </Card>
    </div>
  );
}
