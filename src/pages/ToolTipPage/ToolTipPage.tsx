import React from "react";
import scss from "./ToolTipPage.module.scss";

export default function ToolTipPage() {
  return (
    <div className={scss["container-tooltip-page"]}>
      <h1>ToolTip page</h1>
      <div className={scss["container-tooltip-1"]}>
        <h2>1. ToolTip 1</h2>
        <p>
          The unlimited creative{" "}
          <a href="#" data-tooltip="From just €14.50/month.">
            subscription
          </a>
          .
        </p>
        <p>
          The unlimited creative{" "}
          <a href="#" data-tooltip="Inny text tooltip">
            subscription
          </a>
          .
        </p>
      </div>
    </div>
  );
}
