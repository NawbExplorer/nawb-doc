import React, { FC } from "react";
import "./index.scss";

export interface BubbleCoverProps {
  [k: string]: any;
}

const _BubbleCover: FC<BubbleCoverProps> = function (props) {
  return (
    <div className="bubbleCover_container">
      <div className="wrap">
        {new Array(100).fill("").map((_, index) => {
          return <div className="bubble" key={index}></div>;
        })}
      </div>
    </div>
  );
};

export default _BubbleCover;
