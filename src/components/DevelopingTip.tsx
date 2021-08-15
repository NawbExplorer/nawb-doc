import useBaseUrl from "@docusaurus/useBaseUrl";
import React, { FC } from "react";
import Link from "@docusaurus/Link";

export const DevelopingTip: FC = function () {
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <h1>施工中...🚧🚧🚧</h1>
      <div>
        <img src={useBaseUrl("/img/carla_lazy.svg")} width="40" />
        <Link to="/blog/job-hunt"> {">>求职<<"}</Link>
        <Link to="/more/join-me"> {">>加入我<<"}</Link>
      </div>
    </div>
  );
};
