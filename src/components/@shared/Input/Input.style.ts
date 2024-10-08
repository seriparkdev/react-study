import { COLORS } from '@/constants/colors';
import { ElementSize } from '@/types/common';
import styled, { css } from 'styled-components';

export const Input = styled.input<{ size: ElementSize }>`
  ${({ size }) => inputSize[size]}
  border: none;
  border-bottom: 1px solid ${COLORS.GREY[20]};
  outline: none;
`;

const inputSize = {
  small: css`
    width: 150px;
    padding: 8px 10px;
    border-radius: 4px;
    font-size: 15px;
  `,
  medium: css`
    width: 200px;
    padding: 10px 12px;
    border-radius: 6px;
    font-size: 16px;
  `,
  large: css`
    width: 230px;
    padding: 12px 16px;
    border-radius: 8px;
    font-size: 17px;
  `,
  full: css`
    width: 100%;
    padding: 12px 16px;
    font-size: 17px;
  `,
};
