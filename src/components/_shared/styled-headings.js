import styled from '@emotion/styled';

export const StyledH1 = styled.h1`
  width: 100%;
  font-weight: 800;
  margin: 20px 0;
  white-space: nowrap;
  position: relative;

  &:first-letter {
    color: var(--link-color);
  }

  &:after {
    background-color: var(--link-color);
    content: '';
    position: absolute;
    top: -30px;
    left: 0;
    width: 30px;
    height: 2px;
  }
`;

export const StyledH2 = styled.h2`
  color: var(--title-color);
  margin: 20px 0;
  position: relative;

  &:after {
    background-color: var(--link-color);
    content: '';
    position: absolute;
    top: -20px;
    left: 0;
    width: 30px;
    height: 2px;
  }
`;
