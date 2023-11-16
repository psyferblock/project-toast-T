import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const id = React.useId();
  const [chosenVariant, setChosenVariant] = React.useState("notice");

  const [toastArray, setToastArray] = React.useState([]);
  const [toastOn, setToast] = React.useState(false);

  const messageRef = React.useRef("");

  const inputId = `${id}-${chosenVariant}`;

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const toastMessage = messageRef.current.value;

    // console.log("sumbit");
    const nextToasts = [
      ...toastArray,
      {
        id:crypto.randomUUID(),
        message: toastMessage,
        variant: chosenVariant,
      },
    ];
    setToastArray(nextToasts);

    setToast(true);
    // console.log("toastArray", nextToasts);
  };

  React.useEffect(() => {
    const handleToast = () => {
      if (toastOn) {
        setToast(false);
      }
    };
    handleToast();
  }, [toastOn]);

  ///// delete the toast /////////

  const handleDismiss=(toastId)=>{
    const newArray=[
      ...toastArray.find(id => toastId===toastArray.id)
    ]
    toastArra
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {toastArray.length > 0 && <ToastShelf  handleDismiss ={handleDismiss}toastArray={toastArray} />}

      <div className={styles.controlsWrapper}>
        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                ref={messageRef}
                id="message"
                className={styles.messageInput}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            {VARIANT_OPTIONS.map((name) => (
              <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
                <label htmlFor={name}>
                  <input
                    id={inputId}
                    type="radio"
                    name={name}
                    defaultChecked={"notice"}
                    value={name}
                    checked={name === chosenVariant}
                    onChange={(event) => {
                      setChosenVariant(event.target.value);
                    }}
                  />
                  {name}
                </label>
              </div>
            ))}
          </div>
          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToastPlayground;
