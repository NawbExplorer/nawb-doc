import useBaseUrl from "@docusaurus/useBaseUrl";
import React, { FC } from "react";
import Link from "@docusaurus/Link";

export const DevelopingCard: FC = function () {
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <h1>ζ½ε·₯δΈ­...π§π§π§</h1>
      <div>
        <img src={useBaseUrl("/img/carla_lazy.svg")} width="40" />
        {/* <Link to="/blog/job-hunt"> {">>ζ±θ<<"}</Link> */}
        <Link to="/more/join-me"> {">>ε ε₯ζ<<"}</Link>
      </div>
    </div>
  );
};
