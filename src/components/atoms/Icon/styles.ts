import styled from 'styled-components';
import { IProps } from './Icon';

export const StyledElement = styled.div.attrs((props: IProps) => ({}))`
  color: ${props => props.color};
`;
