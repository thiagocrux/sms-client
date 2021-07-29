import React, { useEffect, useState } from 'react';
import api from '@utils/api';

import Heading from '@components/Common/Heading/Heading';
import FilteredStats from '../FilteredStats/FilteredStats';
import GeneralStats from '../GeneralStats/GeneralStats';

// import style from './ReportsPage.module.css';

export default function ReportsPage() {
  const [stats, setStats] = useState(null);
  const [filteredStats, setFilteredStats] = useState(null);
  const [filter, setFilter] = useState(new Date().getFullYear());

  useEffect(() => {
    api.get('/reports').then((response) => setStats(response.data.stats));

    console.log(stats);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    api
      .get(`/reports/${filter}`)
      .then((response) => setFilteredStats(response.data.stats));

    console.log(filteredStats);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    api
      .get(`/reports/${filter}`)
      .then((response) => setFilteredStats(response.data.stats));
  }, [filter]);

  const handleFilterSelection = (filter) => {
    setFilter(filter);
  };

  return (
    <div>
      <Heading size="huge" align="center" margin="big">
        Relatórios
      </Heading>
      <FilteredStats
        stats={filteredStats}
        selectFilter={handleFilterSelection}
      />
      {/* <GeneralStats stats={stats} /> */}
    </div>
  );
}
