import React from "react";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import clsx from "clsx";

function Home() {
  const context = useDocusaurusContext();
  const {
    siteConfig: { customFields = {}, tagline, npmPluginsUrl } = {},
  } = context;
  console.log();
  return (
    <Layout title={tagline} description={customFields.description}>
      <main>
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <h1 className={styles.heroProjectTagline}>
              <img
                className={styles.heroLogo}
                src={useBaseUrl("/img/carla_lazy_transparent.svg")}
              />
              <span
                className={styles.heroTitleTextHtml}
                dangerouslySetInnerHTML={{
                  __html: translate({
                    id: "homepage.hero.title",
                  }),
                }}
              />
            </h1>
            <div className={styles.indexCtas}>
              <Link
                className="button button--secondary button--outline"
                to="/docs"
              >
                <Translate id="homepage.hero.start">Start</Translate>
              </Link>

              <Link
                className="button button--secondary button--outline"
                to="https://new.docusaurus.io"
              >
                <Translate id="homepage.hero.download">Download</Translate>
              </Link>
              <Link
                className="button button--secondary button--outline"
                to={customFields.npmPluginsUrl}
              >
                <Translate id="homepage.hero.plugins">Plugins</Translate>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className="container text--center margin-bottom--xl">
            <div className="row">
              <div className="col">
                <img
                  className={styles.featureImage}
                  alt="Powered by MDX"
                  src={useBaseUrl("/img/undraw_typewriter.svg")}
                />
                <h2 className={clsx(styles.featureHeading)}>
                  <Translate>Powered by Markdown</Translate>
                </h2>
                <p className="padding-horiz--md">
                  <Translate>
                    Save time and focus on your project's documentation. Simply
                    write docs and blog posts with Markdown/MDX and Docusaurus
                    will publish a set of static HTML files ready to serve. You
                    can even embed JSX components into your Markdown thanks to
                    MDX.
                  </Translate>
                </p>
              </div>
              <div className="col">
                <img
                  alt="Built Using React"
                  className={styles.featureImage}
                  src={useBaseUrl("/img/undraw_react.svg")}
                />
                <h2 className={clsx(styles.featureHeading)}>
                  <Translate>Built Using React</Translate>
                </h2>
                <p className="padding-horiz--md">
                  <Translate>
                    Extend or customize your project's layout by reusing React.
                    Docusaurus can be extended while reusing the same header and
                    footer.
                  </Translate>
                </p>
              </div>
              <div className="col">
                <img
                  alt="Ready for Translations"
                  className={styles.featureImage}
                  src={useBaseUrl("/img/undraw_around_the_world.svg")}
                />
                <h2 className={clsx(styles.featureHeading)}>
                  <Translate>Ready for Translations</Translate>
                </h2>
                <p className="padding-horiz--md">
                  <Translate>
                    Localization comes pre-configured. Use Crowdin to translate
                    your docs into over 70 languages.
                  </Translate>
                </p>
              </div>
            </div>
          </div>
          <div className="container text--center">
            <div className="row">
              <div className="col col--4 col--offset-2">
                <img
                  alt="Document Versioning"
                  className={styles.featureImage}
                  src={useBaseUrl("/img/undraw_version_control.svg")}
                />
                <h2 className={clsx(styles.featureHeading)}>
                  <Translate>Document Versioning</Translate>
                </h2>
                <p className="padding-horiz--md">
                  <Translate>
                    Support users on all versions of your project. Document
                    versioning helps you keep documentation in sync with project
                    releases.
                  </Translate>
                </p>
              </div>
              <div className="col col--4">
                <img
                  alt="Document Search"
                  className={styles.featureImage}
                  src={useBaseUrl("/img/undraw_algolia.svg")}
                />
                <h2 className={clsx(styles.featureHeading)}>
                  <Translate>Content Search</Translate>
                </h2>
                <p className="padding-horiz--md">
                  <Translate>
                    Make it easy for your community to find what they need in
                    your documentation. We proudly support Algolia documentation
                    search.
                  </Translate>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
