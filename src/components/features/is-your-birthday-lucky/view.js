/* eslint-disable */

import React from "react";
import {
  containsOnlySpaces,
  convertDateOfBirthToDigits,
  convertToInteger,
  isNotANumber,
} from "../../../utils/app-utils";
import DEFAULT_CONSTANTS from "../../../config/app-config";
import { useState } from "react";

function IsYouBirthdayLucky() {
  const [dobInput, setDOBInput] = useState("");
  const [luckyNumberInput, setLuckyNumberInput] = useState("");
  const [outputMessage, setOutputMessage] = useState("");

  //   <-- Validity Functions Begins -->

  /**
   * Function to check validity of check button
   * @returns boolean
   */
  function isCheckButtonInvalid() {
    return dobInput.length < 1 || luckyNumberInput.length < 1;
  }

  /**
   * Function to check integer input validity
   * @param input
   * @returns boolean
   */
  function isIntegerInputValid(input) {
    if (
      isNotANumber(input) ||
      containsOnlySpaces(input) ||
      convertToInteger(input) <= 0 ||
      input === ""
    ) {
      integerInputErrorHandler();
      return false;
    }
    return true;
  }
  //   <-- Validity Functions Ends -->

  //   <-- Error Handling Functions Begins -->

  /**
   * Function to handle invalid integer input
   */
  function integerInputErrorHandler() {
    setOutputMessage(DEFAULT_CONSTANTS.INVALID_INPUT_MESSAGE);
  }

  //   <-- Error Handling Functions Ends -->

  //   <-- Change Handler Functions Begins -->

  /**
   * Function to handle date of birth input change
   * @param event
   */
  function DOBInputChangeHandler(event) {
    let inputDOB = event.target.value;
    setOutputMessage("");
    setDOBInput(inputDOB);
  }

  /**
   * Function to handle lucky number input change
   * @param event
   */
  function luckyNumberInputChangeHandler(event) {
    let inputLuckyNumber = event.target.value;
    if (isIntegerInputValid(inputLuckyNumber)) {
      setOutputMessage("");
      setLuckyNumberInput(inputLuckyNumber);
    } else {
      integerInputErrorHandler();
      setLuckyNumberInput("");
    }
  }

  //   <-- Change Handler Functions Ends -->

  //   <-- Click Handler Functions Begins -->

  /**
   * Function to handle when check button is clicked
   * @param dateOfBirth
   * @param luckyNumber
   */
  function checkButtonClickHandler(dateOfBirth, luckyNumber) {
    dateOfBirth = convertDateOfBirthToDigits(dateOfBirth);
    luckyNumber = convertToInteger(luckyNumber);

    let sumOfDigits = 0;

    while (dateOfBirth > 0) {
      let lastDigit = dateOfBirth % 10;
      sumOfDigits += lastDigit;
      dateOfBirth = Math.trunc(dateOfBirth / 10);
    }

    if (sumOfDigits % luckyNumber === 0) {
      setOutputMessage(DEFAULT_CONSTANTS.LUCKY_MESSAGE);
      return true;
    }
    setOutputMessage(DEFAULT_CONSTANTS.UNLUCKY_MESSAGE);
    return false;
  }

  //   <-- Click Handler Functions Ends -->

  //   <-- Render Functions Begins -->

  /**
   * Function to render app description
   * @returns app description
   */
  function renderAppDescriptionSection() {
    return (
      <div className="sub-section">
        <h3>{DEFAULT_CONSTANTS.APP_DESCRIPTION}</h3>
        <h4>{DEFAULT_CONSTANTS.PRIVACY_NOTICE}</h4>
      </div>
    );
  }

  /**
   * Function to render date of birth input section
   * @returns date of birth input section
   */
  function renderDateOFBirthInputSection() {
    return (
      <div className="sub-section">
        <label htmlFor="dob-bill" className="dob-label">
          Date Of Birth:
        </label>
        <input
          id="dob-bill"
          value={dobInput}
          onChange={DOBInputChangeHandler}
          type={"date"}
        ></input>
      </div>
    );
  }

  /**
   * Function to render check button
   * @returns check button
   */
  function renderCheckButton() {
    return (
      <button
        className={`${isCheckButtonInvalid() ? "btn-disabled" : "btn-enabled"}`}
        disabled={isCheckButtonInvalid()}
        onClick={() => checkButtonClickHandler(dobInput, luckyNumberInput)}
      >
        Check
      </button>
    );
  }

  /**
   * Function to render lucky number input section
   * @returns lucky number input section
   */
  function renderLuckyNumberInputSection() {
    return (
      <div className="sub-section">
        <label htmlFor="input-lucky" className="lucky-label">
          Lucky Number:
        </label>
        <input
          id="input-lucky"
          value={luckyNumberInput}
          onChange={luckyNumberInputChangeHandler}
          placeholder={"Enter your lucky number"}
          type={"number"}
        ></input>

        {renderCheckButton()}
      </div>
    );
  }

  /**
   * Function to render output message
   * @returns output message
   */
  function renderOutput() {
    return (
      <p
        className={`${
          outputMessage == DEFAULT_CONSTANTS.LUCKY_MESSAGE
            ? "output-msg"
            : "error-msg"
        }`}
      >
        {outputMessage}
      </p>
    );
  }
  //   <-- Rendering Is Your Birthday Lucky App -->
  return (
    <section id="app-view" className="section">
      {renderAppDescriptionSection()}
      {renderDateOFBirthInputSection()}
      {renderLuckyNumberInputSection()}
      {renderOutput()}
    </section>
  );
}

export default IsYouBirthdayLucky;
