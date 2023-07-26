import React, { useState } from 'react';
import {
  Container,
  InputForm,
  Input,
  Wrapper,
  StatusCard,
  EyeIcon,
} from './Form.styled';
import { BsEyeSlash, BsEye } from 'react-icons/bs';

const Form = () => {
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const [toggleIconPass, setToggleIconPass] = useState(<BsEyeSlash />);

  const togglePassInput = () => {
    if (type === 'password') {
      setType('text');
      setToggleIconPass(<BsEye />);
    } else {
      setType('password');
      setToggleIconPass(<BsEyeSlash />);
    }
  };

  const passStrength = () => {
    if (password.length === 0) {
      return '#cecaca';
    }
    if (password.length < 8) {
      return '#ee3d3d';
    }

    const hasLetters = /[A-Za-z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*()_+\-=[\]{};':"|,.<>/?]/.test(password);

    if (hasLetters && hasDigits && hasSymbols) {
      return '#44c344';
    }

    if (
      (hasLetters && hasDigits) ||
      (hasLetters && hasSymbols) ||
      (hasDigits && hasSymbols)
    ) {
      return '#ffff66';
    }

    return '#ee3d3d';
  };

  const sectionColor = passStrength();

  return (
    <Container>
      <InputForm>
        <h2 sx={{ fontSize: 48 }}>Password Check</h2>

        <Input
          id="outlined-password-input"
          label="Password"
          variant="outlined"
          type={type}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <EyeIcon type="button" onClick={togglePassInput}>
          {toggleIconPass}
        </EyeIcon>
        <Wrapper>
          <StatusCard
            style={{
              backgroundColor:
                sectionColor === '#ee3d3d'
                  ? '#ee3d3d'
                  : sectionColor === '#ffff66'
                  ? '#ffff66'
                  : sectionColor === '#44c344'
                  ? '#44c344'
                  : '#cecaca',
            }}
          >
            easy
          </StatusCard>
          <StatusCard
            style={{
              backgroundColor:
                sectionColor === '#ee3d3d' && password.length < 8
                  ? '#ee3d3d'
                  : sectionColor === '#ffff66'
                  ? '#ffff66'
                  : sectionColor === '#44c344'
                  ? '#44c344'
                  : '#cecaca',
            }}
          >
            medium
          </StatusCard>
          <StatusCard
            style={{
              backgroundColor:
                sectionColor === '#ee3d3d' && password.length < 8
                  ? '#ee3d3d'
                  : sectionColor === '#44c344'
                  ? '#44c344'
                  : '#cecaca',
            }}
          >
            strong
          </StatusCard>
        </Wrapper>
      </InputForm>
    </Container>
  );
};

export default Form;
