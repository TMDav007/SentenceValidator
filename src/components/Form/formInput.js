import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ErrorIcon from "@material-ui/icons/ErrorOutlined";
import CheckedIcon from "@material-ui/icons/CheckCircleOutline";

import { validateSentence } from "../../helper/inputValidation";
import Nextpage from "../Nextpage/Nextpage";
import Loader from "../../util/Loader";

function FormInput() {
  const [sentence, setSentence] = useState("");
  const [errors, setErrors] = useState("");
  const [submit, setSubmit] = useState(false);
  const [disabledSubmit, setDisabledSubmit] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setSentence(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (errors.length < 1) {
      setLoading(true);
      setDisabledSubmit(true);
      const timer = setTimeout(() => {
        setSubmit(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  };

  useEffect(() => {
    setErrors(validateSentence(sentence));
  }, [sentence]);

  useEffect(() => {
    setDisabledSubmit(sentence.length < 1 || !!errors?.length > 0);
  }, [sentence, errors]);

  return (
    <Container>
      <Title>Validate Input Field</Title>

    {/* Set loading function */}
      {loading ? <Loader /> : ""}

      <Form>
        <InputContainer>
          <InputLabel htmlFor="sentence"> Input your sentence </InputLabel>
          <InputsBox>
            <Input
              errors={errors}
              type="text"
              id="sentence"
              name="sentence"
              onChange={handleChange}
              value={sentence}
              placeholder="sentence"
            />
            <Icons>
              {sentence.length > 0 ? (
                errors?.length > 0 ? (
                  <ErrorIcon style={{ color: "red" }} />
                ) : (
                  <CheckedIcon style={{ color: "green" }} />
                )
              ) : (
                ""
              )}
            </Icons>
          </InputsBox>

          {errors &&
            errors.map((error, id) => {
              return (
                <ErrorText data-testid="error" title="error" key={id}>
                  {error}
                </ErrorText>
              );
            })}

          <Button disabled={disabledSubmit} onClick={handleSubmit}>
            Submit
          </Button>
        </InputContainer>
      </Form>

        {/* Add next onSubmit */}
      {submit ? <Nextpage setLoading={setLoading} /> : ""}
    </Container>
  );
}

export default FormInput;

const Container = styled.div``;
const Title = styled.h2``;
const Form = styled.form``;
const InputContainer = styled.div`
  display: grid;
  width: 70%;
  margin: auto;
`;
const InputLabel = styled.label`
  text-align: left;
  margin: 0.5em 0;
  font-weight: 600;
  font-size: 1.2em;
`;
const Input = styled.input`
  padding: 0.5em;
  border-radius: 10px;
  border: ${({ errors }) =>
    errors?.length > 0 ? "1px solid red " : "1px solid #a9a9c8"};
  outline: none;
  width: 100%;
`;

const ErrorText = styled.span`
  text-align: left;
  color: red;
  font-size: 14px;
`;

const Icons = styled.span`
  margin-left: 5px;
`;
const InputsBox = styled.span`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  margin: 1em 0;
  outline: none;
  padding: 0.5em 1em;
  background: #2fa5a9;
  color: white;
  border: 0;
  border-radius: 5px;
  transition: all 0.3s ease-in;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
  &:disabled {
    opacity: 0.4;
  }
`;
