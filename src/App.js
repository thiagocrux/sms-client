import React from 'react';
import Header from './components/Layout/Header/Header';
import Section from './components/Layout/Section/Section';
import Routes from './routes/Routes';

export default function App() {
  return (
    <>
      <Header />
      <Section>
        <Routes />
      </Section>
    </>
  );
}
