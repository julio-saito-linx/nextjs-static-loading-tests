import Layout from "../components/Layout";
import { GetStaticProps } from "next";
import React from "react";
import Horario from "../components/Horario";
import LoadingProp from "../interfaces/LoadingProp";

type Props = {
  horaDoServidor: string;
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  await new Promise((resolve) => {
    console.log("");
    console.log("IndexPage: getStaticProps: START");
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
  const novoHorario = new Date().toISOString();
  console.log("IndexPage: getStaticProps: " + novoHorario);

  return {
    props: {
      horaDoServidor: novoHorario,
    },
  };
};

const IndexPage = ({ horaDoServidor, loading }: Props & LoadingProp) => (
  <Layout title="Index: getStaticPropsPage" loading={loading}>
    <h1>Index: getStaticPropsPage</h1>
    <p>Hora do Servidor:</p>
    <Horario>{horaDoServidor}</Horario>
    <hr />
    <button
      type="button"
      onClick={() => {
        document.location.reload();
      }}
    >
      Recarregar
    </button>

    <p>Tudo estático aqui, só pega a informação em tempo de build</p>
  </Layout>
);

export default IndexPage;
