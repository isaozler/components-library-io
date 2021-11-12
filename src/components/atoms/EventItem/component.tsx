import React, { Fragment } from 'react';
import dayjs from 'dayjs';
import GlobalStyle from '@components/globalStyle';

import IProps from './schema';
import { Wrapper, Time, Day, Month, Content } from './styles';

const Component = ({ dateTime, title, text, className }: IProps) => {
  if (!dateTime) return <></>;

  const date = dayjs(dateTime);
  const day = date.format('DD');
  const month = date.format('MMM');

  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper className={className}>
        <Time dateTime={date.toISOString()}>
          <Day>{day}</Day>
          <Month>{month}</Month>
        </Time>
        <Content>
          <h3>{title}</h3>
          <p>{text}</p>
        </Content>
      </Wrapper>
    </Fragment>
  );
};

export default Component;
