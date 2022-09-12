import styled from 'styled-components';

export const SelectWrapper = styled.div`
  display: flex;
  position: relative;
  font-family: Arial;
`;

export const Text = styled.h3`
  font-size: 2em;
  color: #1abc9c;
  margin: 0;
  padding: 20px;
`;

export const TextSelect = styled.select`
  font-size: 1.5em;
  color: #1abc9c;
  padding: 4px 8px;
  border: 1px solid #1abc9c;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;

  position: relative;
  font-family: Arial;
  :after {
    position: absolute;
    content: '';
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: #fff transparent transparent transparent;
  }
`;

export const TextOption = styled.option`
  color: #1abc9c;
  position: absolute;
  background-color: DodgerBlue;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
`;
