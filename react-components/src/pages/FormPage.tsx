import React, { Component } from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import Switcher from '../components/Switcher';
import SelectBar from '../components/SelectBar';
import Checkbox from '../components/Checkbox';
import ValidationMessage from '../components/ValidationMessage';
import ProfileCardsList from '../components/ProfileCardsList';
import { colourOptions } from '../colors';

export type FormPageProps = {
  submitted: boolean;
  name: string | undefined;
  surname: string | undefined;
  sex: string | undefined;
  birthDate: string | undefined;
  color: string | undefined;
  photo: Blob | MediaSource;
  consent: boolean | undefined;
  validForm: boolean | undefined;
};

export default class FormPage extends Component<FormPageProps> {
  constructor(props: FormPageProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state: FormPageProps = {
    submitted: false,
    name: '',
    surname: '',
    sex: '',
    birthDate: '',
    color: '',
    photo: {} as MediaSource,
    consent: true,
    validForm: false,
  };
  formCards = [] as FormPageProps[];
  private inputNameRef = React.createRef<HTMLInputElement>();
  private inputSurnameRef = React.createRef<HTMLInputElement>();
  private inputMaleRef = React.createRef<HTMLInputElement>();
  private inputFemaleRef = React.createRef<HTMLInputElement>();
  private inputBirthdayRef = React.createRef<HTMLInputElement>();
  private inputColorRef = React.createRef<HTMLSelectElement>();
  private inputPhotoRef = React.createRef<HTMLInputElement>();
  private inputConsentRef = React.createRef<HTMLInputElement>();

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = {
      submitted: true,
      name: this.inputNameRef.current?.value,
      surname: this.inputSurnameRef.current?.value,
      sex:
        (this.inputMaleRef.current?.checked && this.inputMaleRef.current?.value) ||
        (this.inputFemaleRef.current?.checked && this.inputFemaleRef.current?.value) ||
        '',
      birthDate: this.inputBirthdayRef.current?.value,
      color: this.inputColorRef.current?.value,
      photo: this.inputPhotoRef.current?.files && (this.inputPhotoRef.current?.files[0] as Blob),
      consent: this.inputConsentRef.current?.checked,
      validForm:
        this.inputNameRef.current?.value !== '' &&
        this.inputSurnameRef.current?.value !== '' &&
        (this.inputMaleRef.current?.checked || this.inputFemaleRef.current?.checked) &&
        this.inputBirthdayRef.current?.value !== '' &&
        this.inputColorRef.current?.value !== '' &&
        this.inputPhotoRef.current?.value !== '' &&
        this.inputConsentRef.current?.checked,
    };
    this.setState(formData);
    if (formData.validForm) {
      this.formCards.push(formData as FormPageProps);
      (event.target as HTMLFormElement).reset();
    }
  }

  message = 'This field is required';

  render() {
    return (
      <Div>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            label="Name"
            referense={this.inputNameRef}
            error={this.state.submitted && this.state.name === ''}
            message={this.message}
          />

          <Input
            type="text"
            label="Surname"
            referense={this.inputSurnameRef}
            error={this.state.submitted && this.state.surname === ''}
            message={this.message}
          />

          <div>
            <p>Sex</p>
            <Switcher
              name="sex"
              valueFirst="male"
              valueSecond="female"
              refFirst={this.inputMaleRef}
              refSecond={this.inputFemaleRef}
              error={this.state.submitted && this.state.sex === ''}
              message={this.message}
            />
          </div>

          <Input
            type="date"
            label="Birth date"
            referense={this.inputBirthdayRef}
            error={this.state.submitted && this.state.birthDate === ''}
            message={this.message}
          />

          <SelectBar
            label="Favourite color"
            referense={this.inputColorRef}
            options={colourOptions}
            error={this.state.submitted && this.state.color === ''}
            message={this.message}
          />

          <div>
            <label>
              <Span>Upload a profile photo</Span>
              <InputFile type="file" name="photo" ref={this.inputPhotoRef} />
            </label>
            {this.state.submitted && !this.state.photo && (
              <ValidationMessage message={this.message} />
            )}
          </div>

          <Checkbox
            referense={this.inputConsentRef}
            label="I consent to my
            personal data"
            defaultChecked
            error={this.state.submitted && this.state.consent === false}
            message={this.message}
          />

          <ButtonWrapper>
            <Button type="submit">Submit</Button>
          </ButtonWrapper>
        </Form>

        {this.state.submitted && this.formCards.length !== 0 && this.state.validForm && (
          <ProfileCardsList cards={this.formCards} />
        )}
      </Div>
    );
  }
}

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
