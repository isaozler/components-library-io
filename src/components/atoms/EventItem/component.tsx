import React, { Fragment } from 'react';
import dayjs from 'dayjs';

import IProps from './component.types';
import { Wrapper, Time, Day, Month, Content, Links } from './styles'

const Component = ({
  dateTime,
  title,
  text,
  className,
  links: LinksNodes,
}: IProps) => {
  if (!dateTime) return <></>

  const date = dayjs(dateTime)
  const day = date.format('DD')
  const month = date.format('MMM')

  return (
    <Fragment>
      <Wrapper className={[className, 'event-item--wrapper'].join(' ')}>
        <Time className="event-item--time" dateTime={date.toISOString()}>
          <Day>{day}</Day>
          <Month>{month}</Month>
        </Time>
        <Content className="event-item--content">
          <h3>{title}</h3>
          <p>{text}</p>
        </Content>
        {LinksNodes ? (
          <Links className="event-item--links-wrapper">{LinksNodes}</Links>
        ) : (
          <></>
        )}
      </Wrapper>
    </Fragment>
  )
}

export default Component;
