import styled from 'styled-components';
import IProps from './component.types';

export const Wrapper = styled.div.attrs(() => ({}))`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
`;

export const Time = styled.time.attrs((_: IProps) => ({}))`
  display: flex;
  flex-direction: column;
  aspect-ratio: 1 / 1.2;
  height: 100%;
  padding: var(--gutter);
`;

const Date = styled.span.attrs((_: IProps) => ({}))`
  display: flex;
  flex: 1 1;
  justify-content: center;
  align-items: center;
`

export const Day = styled(Date)`
  font-size: 1.6rem;
  font-weight: bold;

  &.month {
    text-transform: uppercase;
    font-size: 0.9rem;
  }
`;

export const Month = styled(Date)`
  text-transform: uppercase;
  font-size: 0.9rem;
`;

export const Content = styled.div.attrs((_: IProps) => ({}))`
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  justify-content: center;
  padding: 0 var(--gutter);

  h3 {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }
`;

export const Links = styled.div`

`
