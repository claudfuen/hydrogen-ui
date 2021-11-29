import React from "react";
import CloseButton from "./CloseButton";
import Button from "./Button";

export default function Container({
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
  backgroundColor="#4f46e5",
  buttonColor="#4f46e5",
  textColor="#FFFFFF"
}) {
  return (
    <div className="relative rounded-md text-center flex flex-col justify-between gap-4 overflow-y-auto max-w-2xl w-144 max-h-128"
    style={{ 
        backgroundColor: backgroundColor,
        color: textColor
    }}>
      {/* Header */}
      <div className="flex justify-end mt-2 mr-2">
        {displaySkipButton ? <CloseButton handleSkip={handleSkip} /> : null}
      </div>
      {/* CONTENT */}
      <div className="p-8">
        <div>
          <h3 className="text-2xl font-semibold text-left mb-2">
            {title}
          </h3>
          {imageURL ? (
            <img
              src={imageURL}
              className="rounded-md w-full max-h-72 object-cover mb-2"
              alt="modal graphic"
            ></img>
          ) : null}
          <p className="text-left mb-2">{description}</p>
        </div>
        {/* FOOTER */}
        <div className="flex justify-between items-center mt-8">
          <div>
            {displayStepCount ? (
              <p className="">
                {currentStep}/{totalSteps}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="flex gap-2">
            {displayBackButton ? (
              <Button onClick={handleBack} label={backButtonLabel} color={buttonColor} />
            ) : (
              ""
            )}
            <Button onClick={handleContinue} label={continueButtonLabel} color={buttonColor}/>
          </div>
        </div>
      </div>
    </div>
  );
}
