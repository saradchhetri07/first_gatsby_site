import * as React from "react";
import { Layout } from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <h1>this is an index page</h1>
      <StaticImage alt="gatsby icon" src="../images/icon.png"></StaticImage>
    </Layout>
  );
};

export const Head = () => <title>Home</title>;
export default IndexPage;
