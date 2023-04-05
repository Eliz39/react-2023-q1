import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../components/Input/Input';
import Switcher from '../components/Switcher/Switcher';
import SelectBar from '../components/SelectBar/SelectBar';
import Checkbox from '../components/Checkbox/Checkbox';
import ValidationMessage from '../components/ValidationMessage/ValidationMessage';
import ProfileCardsList from '../components/CardList/ProfileCardsList';
import { colourOptions } from '../colors';

export type FormPageProps = {
  submitted: boolean;
  name: string;
  surname: string;
  sex: string;
  birthDate: string;
  color: string;
  photo: MediaSource;
  consent: boolean;
  validForm: boolean;
};

const FormPage = () => {
  const [state, setState] = useState({
    submitted: false,
    name: '',
    surname: '',
    sex: '',
    birthDate: '',
    color: '',
    photo: {} as MediaSource,
    consent: true,
    validForm: false,
  });

  const [formCards, setFormCards] = useState([] as FormPageProps[]);
  const inputSurnameRef = React.createRef<HTMLInputElement>();
  const inputMaleRef = React.createRef<HTMLInputElement>();
  const inputNameRef = React.createRef<HTMLInputElement>();
  const inputFemaleRef = React.createRef<HTMLInputElement>();
  const inputBirthdayRef = React.createRef<HTMLInputElement>();
  const inputColorRef = React.createRef<HTMLSelectElement>();
  const inputPhotoRef = React.createRef<HTMLInputElement>();
  const inputConsentRef = React.createRef<HTMLInputElement>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      submitted: true,
      name: inputNameRef.current?.value as string,
      surname: inputSurnameRef.current?.value as string,
      sex:
        (inputMaleRef.current?.checked && inputMaleRef.current?.value) ||
        (inputFemaleRef.current?.checked && inputFemaleRef.current?.value) ||
        '',
      birthDate: inputBirthdayRef.current?.value as string,
      color: inputColorRef.current?.value as string,
      photo:
        inputPhotoRef.current?.files && (inputPhotoRef.current?.files[0] as Blob | MediaSource),
      consent: inputConsentRef.current?.checked as boolean,
      validForm:
        inputNameRef.current?.value !== '' &&
        inputSurnameRef.current?.value !== '' &&
        (inputMaleRef.current?.checked || inputFemaleRef.current?.checked) &&
        inputBirthdayRef.current?.value !== '' &&
        inputColorRef.current?.value !== '' &&
        inputPhotoRef.current?.value !== '' &&
        inputConsentRef.current?.checked,
    };
    setState(formData as FormPageProps);
    if (formData.validForm) {
      setFormCards((prevState) => [...prevState, formData as FormPageProps]);
      (event.target as HTMLFormElement).reset();
    }
  };

  const message = 'This field is required';

  return (
    <Div>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Name"
          referense={inputNameRef}
          error={state.submitted && state.name === ''}
          message={message}
        />

        <Input
          type="text"
          label="Surname"
          referense={inputSurnameRef}
          error={state.submitted && state.surname === ''}
          message={message}
        />

        <div>
          <p>Sex</p>
          <Switcher
            name="sex"
            valueFirst="male"
            valueSecond="female"
            refFirst={inputMaleRef}
            refSecond={inputFemaleRef}
            error={state.submitted && state.sex === ''}
            message={message}
          />
        </div>

        <Input
          type="date"
          label="Birth date"
          referense={inputBirthdayRef}
          error={state.submitted && state.birthDate === ''}
          message={message}
        />

        <SelectBar
          label="Favourite color"
          referense={inputColorRef}
          options={colourOptions}
          error={state.submitted && state.color === ''}
          message={message}
        />

        <div>
          <label>
            <Span>Upload a profile photo</Span>
            <InputFile type="file" name="photo" ref={inputPhotoRef} />
          </label>
          {state.submitted && !state.photo && <ValidationMessage message={message} />}
        </div>

        <Checkbox
          referense={inputConsentRef}
          label="I consent to my
            personal data"
          defaultChecked
          error={state.submitted && state.consent === false}
          message={message}
        />

        <ButtonWrapper>
          <Button type="submit">Submit</Button>
        </ButtonWrapper>
      </Form>

      {formCards.length !== 0 && <ProfileCardsList cards={formCards} />}
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 120px);
  height: max-content;
  width: calc(100% - 40px);
  color: #fff;
  margin: 30px;
`;
const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Span = styled.span`
  margin-right: 15px;
`;
const InputFile = styled.input`
  box-sizing: border-box;

  &::-webkit-file-upload-button {
    visibility: hidden;
  }

  &::before {
    content: 'Select from computer';
    display: inline-block;
    background: linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 2px solid #999;
    border-radius: 5px;
    background: #1d2f5a61;
    padding: 8px 12px;
    outline: none;
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition: all 0.2s;
  }

  &:hover {
    &::before {
      background: rgb(0 27 93 / 38%);
    }
  }
`;
const ButtonWrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  padding: 10px 15px;
  background: rgb(0 47 130);
  color: #fff;
  outline: none;
  border-radius: 6px;
  user-select: none;
  border: 1px solid transparent;
  font-size: 16px;
  cursor: pointer;
  margin-top: 25px;
  transition: all 0.3s;

  &:hover {
    background: rgb(4 38 99);
  }
`;

export default FormPage;
