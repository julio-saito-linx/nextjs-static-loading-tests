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
    console.log("ACadaCincoSegundosPage: getStaticProps: START");
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
  const novoHorario = new Date().toISOString();
  console.log("ACadaCincoSegundosPage: getStaticProps: " + novoHorario);
  return {
    props: {
      horaDoServidor: novoHorario,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 5, // In seconds,
  };
};

const ACadaCincoSegundosPage = ({
  horaDoServidor,
  loading,
}: Props & LoadingProp) => (
  <Layout title="ACadaCincoSegundosPage" loading={loading}>
    <h1>ACadaCincoSegundosPage</h1>
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
    <p>Aqui é sempre instantâneo, ele pega so servidor em background</p>
  </Layout>
);

export default ACadaCincoSegundosPage;
