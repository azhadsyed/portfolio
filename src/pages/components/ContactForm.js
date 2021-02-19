import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import emailjs from "emailjs-com";

const ContactForm = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState("");

  const handleNameChange = (e) => {
    setInputName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setInputEmail(e.target.value);
    setEmailError(false);
    setEmailHelperText("");
  };

  const handleMessageChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSubmit = async () => {
    const inputIsEmail = /[^@]*@.*[.].*/.test(inputEmail);

    if (inputIsEmail) {
      const serviceId = process.env.GATSBY_SERVICE_ID;
      const templateId = process.env.GATSBY_TEMPLATE_ID;
      const userId = process.env.GATSBY_USER_ID;
      const variables = {
        from_name: inputName,
        reply_to: inputEmail,
        message: inputMessage,
      };

      await emailjs.send(serviceId, templateId, variables, userId);

      setSubmitMessage("Sent! Thanks for reaching out :)");
      setSubmitted(true);
    } else {
      setEmailError(true);
      setEmailHelperText("I don't think this is a real email...");
    }
  };

  return (
    <form>
      <TextField id="standard-basic" label="Name" onChange={handleNameChange} />
      <br />
      <TextField
        id="standard-basic"
        label="Email"
        onChange={handleEmailChange}
        error={emailError}
        helperText={emailHelperText}
      />{" "}
      <br />
      <br />
      <TextField
        id="outlined-multiline-static"
        label="Message"
        multiline
        rows={4}
        fullWidth
        variant="outlined"
        onChange={handleMessageChange}
      />
      <br />
      <br />
      <Button
        variant="contained"
        disabled={
          inputName.length === 0 ||
          inputEmail.length === 0 ||
          inputMessage === 0 ||
          submitted
        }
        onClick={handleSubmit}
      >
        Submit
      </Button>
      <br />
      <br />
      {submitMessage}
    </form>
  );
};

export default ContactForm;
