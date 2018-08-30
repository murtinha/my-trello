// @flow

import React from 'react';
import List from '../components/list';
import Card from '../components/card';

import './style.css';

type Props = {}

const Home: SComponent<Props> = () => (
  <div className="Home">
    <List title="Reproved">
      <Card description="Tempo 2:40 - Ao visualizar documento e clicar em informações duas vezes, ele não fecha a info, ele abre novamente." />
      <Card description="Tempo 2:40 - Ao visualizar documento e clicar em informações duas vezes, ele não fecha a info, ele abre novamente." />
      <Card description="Tempo 2:40 - Ao visualizar documento e clicar em informações duas vezes, ele não fecha a info, ele abre novamente." />
      <Card description="Tempo 2:40 - Ao visualizar documento e clicar em informações duas vezes, ele não fecha a info, ele abre novamente." />
      <Card description="Tempo 2:40 - Ao visualizar documento e clicar em informações duas vezes, ele não fecha a info, ele abre novamente." />
      <Card description="Tempo 2:40 - Ao visualizar documento e clicar em informações duas vezes, ele não fecha a info, ele abre novamente." />
      <Card description="Tempo 2:40 - Ao visualizar documento e clicar em informações duas vezes, ele não fecha a info, ele abre novamente." />
    </List>
  </div>
);

export default Home;
