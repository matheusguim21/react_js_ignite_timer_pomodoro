import { styled } from 'styled-components'

export const CountDownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  font-weight: bold;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 12.375rem;
    text-align: center;
    background-color: ${(props) => props.theme['gray-700']};
    border-radius: 8px;
    width: 8rem;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  align-items: center;

  color: ${(props) => props.theme['green-500']};
  background-color: transparent;
`
