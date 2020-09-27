import Layout from "../components/Layout";
import { GetStaticProps } from "next";
import React from "react";
import LoadingProp from "../interfaces/LoadingProp";
import HeroMain from "../components/HeroMain";

type Props = {
  timeOnServer: string;
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  await new Promise((resolve) => {
    console.log("");
    console.log("IndexPage: getStaticProps: START");
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
  const novoHorario = new Date().toISOString();
  console.log("IndexPage: getStaticProps: " + novoHorario);

  return {
    props: {
      timeOnServer: novoHorario,
    },
  };
};

const IndexPage = ({ timeOnServer, loading }: Props & LoadingProp) => (
  <Layout title="Index: getStaticPropsPage" loading={loading}>
    <HeroMain
      title="Home: static"
      description="The date is fixed, created on server at build time."
      timeOnServer={timeOnServer}
    />
  </Layout>
);

export default IndexPage;
