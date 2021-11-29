import React from "react";
import { Tooltip } from "../src";

export default {
  title: "Example/Tooltip",
  component: Tooltip,
};

const Template = (args) => <Tooltip {...args} />;

export const Main = Template.bind({});
Main.args = {
    title: "Welcome to my Product!",
    description: "Let's get you started. First, you must work with X Y and Z to do N.",
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
