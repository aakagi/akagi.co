import { css } from 'styled-components';

export const mobile = (inner: string) => css`
  @media (max-width: ${1000 / 16}em) {
    ${inner}
  }
`;
