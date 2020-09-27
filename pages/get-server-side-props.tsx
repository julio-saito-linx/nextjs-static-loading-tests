import Layout from "../components/Layout";
import { GetStaticProps } from "next";
import React from "react";
import Horario from "../components/Horario";
import LoadingProp from "../interfaces/LoadingProp";

type Props = {
  horaDoServidor: string;
};

export const getServerSideProps: GetStaticProps<Props> = async (context) => {
  await new Promise((resolve) => {
    console.log("");
    console.log("GetServerSiteCodePage: getServerSideProps: START");
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
  const novoHorario = new Date().toISOString();
  console.log("GetServerSiteCodePage: getServerSideProps: " + novoHorario);
  return {
    props: {
      horaDoServidor: novoHorario,
    },
  };
};

const GetServerSiteCodePage = ({
  horaDoServidor,
  loading,
}: Props & LoadingProp) => (
  <Layout title="getServerSideProps" loading={loading}>
    <h1>getServerSideProps</h1>
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
    <p>Observe que demora pq está esperando o servidor</p>
  </Layout>
);

export default GetServerSiteCodePage;
