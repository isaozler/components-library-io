import styled, { css } from 'styled-components';
import ButtonProps from './schema';

export const ButtonStyle = styled.button.attrs((props: ButtonProps) => ({
  backgroundColor: props.backgroundColor,
  color: props.color,
  size: props.size,
  borderRadius: props.borderRadius,
}))`
  border: 0;
  border-radius: ${props => props.borderRadius || 0}px;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: ${props => props.color};
  background-color: ${props => !props.backgroundColor ? 'transparent' : props.backgroundColor};
  ${props => ButtonSizes[props.size || 'medium']}
`;

export const ButtonPrimary = styled(ButtonStyle)`
  background-color: #1ea7fd;
`

export const ButtonSecondary = styled(ButtonStyle)`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
`

export const ButtonSizes = {
  small: css`
    font-size: 12px;
    padding: 10px 16px;
  `,
  medium: css`
    font-size: 14px;
    padding: 11px 20px;
  `,
  large: css`
    font-size: 16px;
    padding: 12px 24px;
  `,
}
