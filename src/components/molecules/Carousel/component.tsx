import React, { useCallback, useEffect, useRef, useState } from 'react'

import { Component as Icon } from '@components/atoms/Icon/Icon'

import IProps from './component.types'

import {
  Wrapper,
  Container,
  Controls,
  Control,
  Section,
  Button,
  Body,
} from './styles'

const Component = ({
  defaultSection,
  sections,
  className,
  iconCustom,
  icon,
  unstacked,
  title,
  options,
}: IProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(defaultSection ?? 0)
  const [xDown, setXDown] = useState<number | null>(null)
  const [xUp, setXUp] = useState<number | null>(null)
  const [yDown, setYDown] = useState<number | null>(null)
  const [yUp, setYUp] = useState<number | null>(null)

  const handleTouchStart = useCallback(
    (evt: TouchEvent) => {
      const firstTouch = evt.touches[0]
      setXDown(firstTouch.clientX)
      setYDown(firstTouch.clientY)
    },
    [setXDown, setYDown],
  )

  const handleTouchEnd = useCallback(
    (evt: TouchEvent) => {
      const lastTouch = evt.changedTouches[0]
      setXUp(lastTouch.clientX)
      setYUp(lastTouch.clientY)
    },
    [setXUp, setYUp],
  )

  const resetXY = useCallback(() => {
    setXDown(null)
    setXUp(null)
    setYDown(null)
    setYUp(null)
  }, [setXDown, setXUp, setYDown, setYUp])

  const isHorizontalScroll = useCallback(() => {
    let diff = 0
    let result = false

    if (xDown && xUp) {
      diff = xDown - xUp < 0 ? xUp - xDown : xDown - xUp

      if (diff > 40) {
        result = true
      }
    }

    return result
  }, [xDown, xUp])

  const isVerticalScroll = useCallback(() => {
    let diff = 0
    let result = false

    if (yDown && yUp) {
      diff = yDown - yUp < 0 ? yUp - yDown : yDown - yUp

      if (diff > 40) {
        result = true
      }
    }

    return result
  }, [yDown, yUp])

  const nextSection = useCallback(() => {
    const isXScroll = isHorizontalScroll()
    const isYScroll = isVerticalScroll()

    if (!options || options.swipeDirection === 'horizontal') {
      if (!isYScroll && isXScroll) {
        setActiveIndex(activeIndex < sections.length - 1 ? activeIndex + 1 : 0)
      }
    } else if (options?.swipeDirection === 'vertical') {
      if (isYScroll && !isXScroll) {
        setActiveIndex(activeIndex < sections.length - 1 ? activeIndex + 1 : 0)
      }
    }

    resetXY()
  }, [
    activeIndex,
    sections,
    setActiveIndex,
    resetXY,
    isVerticalScroll,
    isHorizontalScroll,
  ])

  const prevSection = useCallback(() => {
    const isXScroll = isHorizontalScroll()
    const isYScroll = isVerticalScroll()

    if (!options || options.swipeDirection === 'horizontal') {
      if (!isYScroll && isXScroll) {
        setActiveIndex(activeIndex > 0 ? activeIndex - 1 : sections.length - 1)
      }
    } else if (options?.swipeDirection === 'vertical') {
      if (isYScroll && !isXScroll) {
        setActiveIndex(activeIndex > 0 ? activeIndex - 1 : sections.length - 1)
      }
    }

    resetXY()
  }, [
    activeIndex,
    sections,
    setActiveIndex,
    resetXY,
    isVerticalScroll,
    isHorizontalScroll,
  ])

  const navControlHandler = useCallback(
    (index) => {
      setActiveIndex(() => index)
    },
    [setActiveIndex],
  )

  const CustomIconComponent = iconCustom ?? null

  useEffect(() => {
    if (xDown && xUp && yDown && yUp) {
      if (!options || options.swipeDirection === 'horizontal') {
        xUp < xDown ? nextSection() : prevSection()
      } else {
        yUp < yDown ? nextSection() : prevSection()
      }
    }
  }, [xDown, setXDown, xUp, setXUp, nextSection, prevSection, yUp, yDown])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener(
        'touchstart',
        handleTouchStart,
        false,
      )
      containerRef.current.addEventListener('touchend', handleTouchEnd, false)
    }

    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [containerRef.current])

  return (
    <Wrapper className={className}>
      {title ? <h1>{title}</h1> : <></>}
      <Body ref={containerRef} className="body">
        <Container className="container">
          {sections?.map((component, index) => (
            <Section
              className="item"
              active={activeIndex === index}
              key={`section--${index}`}
              style={{}}
            >
              {component}
            </Section>
          ))}
        </Container>
        <Controls className="controls" unstacked={unstacked}>
          <ul>
            {sections?.map((_, index) => (
              <Control
                data-active={activeIndex === index}
                key={`section-control-${index}`}
              >
                <Button
                  active={activeIndex === index}
                  onClick={() => navControlHandler(index)}
                >
                  {icon ? CustomIconComponent ?? <Icon icon={icon} /> : <></>}
                </Button>
              </Control>
            ))}
          </ul>
        </Controls>
      </Body>
    </Wrapper>
  )
}

export default Component
