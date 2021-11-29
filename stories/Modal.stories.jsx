import React, { useState } from "react";
import { Modal } from "../src";

export default {
  title: "Example/Modal",
  component: Modal,
};

const Template = (args) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(true)}>show</button>
      <Modal handleClose={() => setShow(false)} show={show} {...args} />
    </div>
  );
};

export const Main = Template.bind({});
Main.args = {
  title: "Welcome to my Product!",
  description:
    "Let's get you started. First, you must work with X Y and Z to do N.",
  continueButtonLabel: "Continue",
  backButtonLabel: "Back",
  displayBackButton: true,
  displaySkipButton: true,
  displayStepCount: true,
  currentStep: 1,
  totalSteps: 2,
  imageURL: "",
  backgroundColor: "#4f46e5",
  buttonColor: "#4239e1",
  textColor: "#FFFFFF",
  handleSkip: () => console.log("skip"),
  handleBack: () => console.log("back"),
  handleContinue: () => console.log("submitted"),
};
