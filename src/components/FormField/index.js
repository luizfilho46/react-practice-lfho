/* eslint-disable-next-line linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }

  input[type="color"] {
    padding-left: 56px;
  }
`;

const Label = styled.label``;
Label.Text = styled.span`
  color: #E5E5E5;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;
  display: flex;
  align-items: center;
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  transition: .1s ease-in-out;
`;

const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;

  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color .3s;

  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(0.7) translateY(-10px);
  }
  ${({ hasValue }) => hasValue && css`
        &:not([type='color']) + span{
          transform: scale(.7) translateY(-10px);
        }
      `}
`;

function FormField({
  type, name, value, onChange, label, suggestions,
}) {
  const fieldId = `id_${name}`;
  const tag = type === 'textarea' ? 'textarea' : 'input';

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        <Input
          as={tag}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          hasValue={value.length}
          autoComplete={suggestions ? 'off' : 'on'}
          list={`suggestion_${fieldId}`}
        />
        <Label.Text>
          { label }
          :
        </Label.Text>
        {
          suggestions && (
          <datalist id={`suggestion_${fieldId}`}>
            {
            // eslint-disable-next-line max-len
            suggestions.map((suggestion) => (<option key={suggestion} value={suggestion}>{suggestion}</option>))
          }
          </datalist>

          )
        }
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  suggestions: [],
};

FormField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
