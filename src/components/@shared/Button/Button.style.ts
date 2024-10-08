import styled, { css } from 'styled-components';
import { ButtonColor } from './Button';
import { COLORS } from '@/constants/colors';
import { ElementSize } from '@/types/common';

export const Button = styled.button<{
  size: ElementSize;
  color: ButtonColor;
}>`
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  ${({ size }) => buttonSize[size]};
  ${({ color }) => buttonColor[color]};
`;

const buttonSize = {
  small: css`
    padding: 4px 8px;
    border-radius: 8px;
  `,
  medium: css`
    padding: 8px 16px;
    border-radius: 12px;
    font-size: 17px;
  `,
  large: css`
    padding: 12px 24px;
    border-radius: 16px;
    font-size: 18px;
  `,
  full: css`
    width: 100%;
    padding: 12px;
    border-radius: 16px;
    font-size: 18px;
  `,
};

const buttonColor = {
  light: css`
    background-color: ${COLORS.BLUE[30]};
  `,
  dark: css`
    background-color: ${COLORS.BLUE[100]};
    color: ${COLORS.WHITE};
  `,
};
