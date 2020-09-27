import Layout from "../components/Layout";
import { GetStaticProps } from "next";
import React from "react";
import LoadingProp from "../interfaces/LoadingProp";
import HeroMain from "../components/HeroMain";

type Props = {
  timeOnServer: string;
};

export const getServerSideProps: GetStaticProps<Props> = async (context) => {
  await new Promise((resolve) => {
    console.log("");
    console.log("GetServerSiteCodePage: getServerSideProps: START");
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
  const novoHorario = new Date().toISOString();
  console.log("GetServerSiteCodePage: getServerSideProps: " + novoHorario);
  return {
    props: {
      timeOnServer: novoHorario,
    },
  };
};

const GetServerSiteCodePage = ({
  timeOnServer,
  loading,
}: Props & LoadingProp) => (
  <Layout title="getServerSideProps" loading={loading}>
    <HeroMain
      title="Server: getServerSideProps"
      description="every request will get data from server"
      timeOnServer={timeOnServer}
    />
  </Layout>
);

export default GetServerSiteCodePage;
