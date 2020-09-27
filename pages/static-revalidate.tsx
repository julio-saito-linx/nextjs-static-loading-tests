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
    console.log("ACadaCincoSegundosPage: getStaticProps: START");
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
  const novoHorario = new Date().toISOString();
  console.log("ACadaCincoSegundosPage: getStaticProps: " + novoHorario);
  return {
    props: {
      timeOnServer: novoHorario,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 5, // In seconds,
  };
};

const ACadaCincoSegundosPage = ({
  timeOnServer,
  loading,
}: Props & LoadingProp) => (
  <Layout title="ACadaCincoSegundosPage" loading={loading}>
    <HeroMain
      title="Static: with revalidate"
      description="No loading time, but refresh when requested after 5 seconds passed"
      timeOnServer={timeOnServer}
    />
  </Layout>
);

export default ACadaCincoSegundosPage;
