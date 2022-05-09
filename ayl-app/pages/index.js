import Head from "next/head";
import MyProject from "../components/MyProject";
import ProjectsIHaveWorkedOn from "../components/ProjectsIHaveWorkedOn";
import About from "../components/About";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio Landing Page </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <About />
        <MyProject />
        <ProjectsIHaveWorkedOn />
      </Layout>
    </>
  );
}
