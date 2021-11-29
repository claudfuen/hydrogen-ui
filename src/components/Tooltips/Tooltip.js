import React from "react";
import Container from "../Container";

export default function Tooltip({
  title,
  description,
  continueButtonLabel,
  backButtonLabel,
  displaySkipButton,
  displayBackButton,
  displayStepCount,
  currentStep,
  totalSteps,
  imageURL,
  handleSkip,
  handleBack,
  handleContinue,
  backgroundColor,
  buttonColor,
  textColor
}) {
  return (
    <>
      <div className="z-40 bg-gray-800 h-screen w-screen fixed top-0 left-0 opacity-90"></div>
      <div className="z-50 h-screen w-screen fixed top-0 left-0 opacity-80 flex justify-center items-center p-8 py-12 overflow-y-none overscroll-y-none">
        <div>
          <div
            className="h-8 w-8 ml-8 transform rotate-45 rounded-sm -mb-4"
            style={{ backgroundColor: backgroundColor }}
          ></div>
          <Container
            title={title}
            description={description}
            continueButtonLabel={continueButtonLabel}
            backButtonLabel={backButtonLabel}
            displaySkipButton={displaySkipButton}
            displayBackButton={displayBackButton}
            displayStepCount={displayStepCount}
            currentStep={currentStep}
            totalSteps={totalSteps}
            imageURL={imageURL}
            handleSkip={handleSkip}
            handleBack={handleBack}
            handleContinue={handleContinue}
            backgroundColor={backgroundColor}
            buttonColor={buttonColor}
            textColor={textColor}
          />
        </div>
      </div>
    </>
  );
}
