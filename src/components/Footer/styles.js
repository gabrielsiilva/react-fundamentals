import styled from 'styled-components';

export const Container = styled.footer`
  background: ${({ theme }) => theme.footerBackgroundColor };;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-radius: ${({ theme }) => theme.borderRadius };
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing.medium + 'px' };

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;