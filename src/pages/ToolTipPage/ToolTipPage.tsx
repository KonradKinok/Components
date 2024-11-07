import React from "react";
import scss from "./ToolTipPage.module.scss";
import toast from "react-hot-toast";
import { FcAlarmClock } from "react-icons/fc";
let toastLoading: string | null = null;

export default function ToolTipPage() {
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;

    if (name === "toast-blank") {
      toast("Hello World");
    }
    if (name === "toast-success") {
      toast.success("Successfully created!");
    }
    if (name === "toast-error") {
      toast.error("This is an error!");
    }
    if (name === "toast-custom-jsx") {
      toast.custom(<div>Hello World</div>);
    }
    if (name === "toast-loading") {
      toastLoading = toast.loading("Waiting...");
    }
    if (name === "toast-endloading") {
      if (toastLoading !== null) {
        toast.dismiss(toastLoading);
      }
    }
    if (name === "toast-changeloading") {
      if (toastLoading !== null) {
        toast.success("This worked", {
          id: toastLoading,
        });
      }
    }
    if (name === "toast-custom-2") {
      toast(
        <span>
          Custom and <b>bold</b>
        </span>,
        {
          icon: <FcAlarmClock />,
        },
      );
    }
    if (name === "toast-with-button") {
      toast(
        (t) => (
          <span>
            Custom and <b>bold</b>
            <button onClick={() => toast.dismiss(t.id)}>Dismiss</button>
          </span>
        ),
        {
          icon: <FcAlarmClock />,
        },
      );
    }
    if (name === "toast-custom-all") {
      toast("Hello World", {
        duration: 4000,
        position: "top-center",

        // Styling
        style: {},
        className: scss["toast-custom-all"],

        // Custom Icon
        icon: "👏",

        // Change colors of success/error/loading icon
        iconTheme: {
          primary: "#000",
          secondary: "#fff",
        },

        // Aria
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      });
    }
  };

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
      <div className={scss["toast"]}>
        <h2>2. Toast</h2>
        <div className={scss["container-toast-button"]}>
          <button
            name="toast-blank"
            className={scss["button-2"]}
            type="button"
            onClick={handleOnClick}>
            Toast Blank
          </button>
          <button
            name="toast-success"
            className={scss["button-2"]}
            type="button"
            onClick={handleOnClick}>
            Toast Success
          </button>
          <button
            name="toast-error"
            className={scss["button-2"]}
            type="button"
            onClick={handleOnClick}>
            Toast Error
          </button>
          <button
            name="toast-custom-jsx"
            className={scss["button-2"]}
            type="button"
            onClick={handleOnClick}>
            Toast Custom (JSX)
          </button>
          <button
            name="toast-loading"
            className={scss["button-2"]}
            type="button"
            onClick={handleOnClick}>
            Toast Loading
          </button>
          <button
            name="toast-endloading"
            className={scss["button-2"]}
            type="button"
            onClick={handleOnClick}>
            Toast End Loading
          </button>
          <button
            name="toast-changeloading"
            className={scss["button-2"]}
            type="button"
            onClick={handleOnClick}>
            Toast End Loading
          </button>
          <button
            name="toast-custom-2"
            className={scss["button-2"]}
            type="button"
            onClick={handleOnClick}>
            Toast Custom 2
          </button>
          <button
            name="toast-with-button"
            className={scss["button-2"]}
            type="button"
            onClick={handleOnClick}>
            Toast With Button
          </button>
          <button
            name="toast-custom-all"
            className={scss["button-2"]}
            type="button"
            onClick={handleOnClick}>
            Toast Custom All
          </button>
        </div>
      </div>
    </div>
  );
}
