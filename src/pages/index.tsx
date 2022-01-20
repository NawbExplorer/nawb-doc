import React from "react";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "../components/Layout";
import BubbleCover from "../components/BubbleCover";
import styles from "./index.module.css";
import clsx from "clsx";

function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <div>
      <Layout
        title={siteConfig.tagline}
        description={siteConfig.customFields.description as string}
      >
        <main>
          <BubbleCover/>
          <div style={{ height: "100vh" }}></div>
        </main>
      </Layout>
    </div>
  );
}

export default Home;
