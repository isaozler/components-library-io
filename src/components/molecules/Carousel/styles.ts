import styled, { css } from 'styled-components';
import IProps from './component.types';

export const Wrapper = styled.div.attrs((props: IProps) => props)`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  padding: 0;
  max-width: var(--headerImageWidth);
  position: relative;
`;


export const Caption = styled.div.attrs((props: IProps) => props)`
  position: absolute;
  bottom: ${({ unstacked }) => unstacked && unstacked === 'bottom' ? '40px' : 0};
  left: ${({ unstacked }) => unstacked && unstacked === 'left' ? '40px' : 0};
  width: calc(50% - 2 * var(--gutter));
  margin-left: calc(2 * var(--gutter));
  text-align: left;
  padding: var(--gutter);
`;


export const Container = styled.div.attrs((props: IProps) => props)`
  width: 100%;
  display: block;
  height: var(--headerImageHeight);
`;

export const Controls = styled.div.attrs((props: IProps) => props)`
  display: flex;
  flex: 0 1 var(--controlSize);
  width: var(--controlSize);

  ${({ unstacked }) => {
    if (unstacked) {
      return css`
        position: absolute;

        ${unstacked === 'top'
          ? css`
            top: 0;
            left: 50%;
            transform: translate(-50%, 0);
            height: 30px;
            width: 100%;
            justify-content: space-around;
            > ul { flex-direction: row !important; > li { margin: 0 var(--gutter) 0 0 !important; &:last-child { margin: 0 !important; } } }
          `
          : unstacked === 'right'
            ? css`
              top: 0;
              right: 0;
              width: 30px;
              height: 100%;
              > ul { flex-direction: column !important; > li { margin: 0 0 var(--gutter) 0 !important; &:last-child { margin: 0 !important; } } }
            `
            : unstacked === 'bottom'
              ? css`
                bottom: 0;
                left: 50%;
                transform: translate(-50%, 0);
                height: 30px;
                width: 100%;
                justify-content: space-around;
                > ul { flex-direction: row !important; > li { margin: 0 var(--gutter) 0 0 !important; &:last-child { margin: 0 !important; } } }
              `
              // left
              : css`
                top: 0;
                left: 0;
                width: 30px;
                height: 100%;
                > ul { flex-direction: column !important; > li { margin: 0 0 var(--gutter) 0 !important; &:last-child { margin: 0 !important; } } }
              `
        }
        z-index: 2;

        > ul {
          flex: 0 0;

          > li {
            aspect-ratio: unset;
            margin: 0;
            padding: 0;
            width: 30px;
            height: 30px;
            margin: 0 10px;
            border-radius: 100%;
            
            button {
              border-radius: 100%;
              overflow: hidden;
            }
          }
        }
      `
    }

  }}

  ul {
    display: flex;
    margin: 0;
    padding: 4px;
    list-style: none;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
  }
`;

export const Control = styled.li.attrs((props: IProps) => props)`
  display: flex;
  width: 100%;
  aspect-ratio: 1 / 1;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;

  &:last-child {
    margin: 0;
  }
`;

export const Button = styled.button.attrs((props: { active: boolean }) => props)`
  text-align: center;
  border: 0;
  outline: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  cursor: pointer;
  background: var(--controlColor);

  &:hover {
    background: var(--controlActiveColor);
    color: white;
  }

  ${({ active }) => active ? css`
    background: var(--controlActiveColor);
    color: white;
    border-color: white;
  ` : ''}
  
`;

export const Section = styled.div.attrs(({ active }: { active: boolean }) => ({ active }))`
  flex: 1 0 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  display: ${({ active }) => active ? 'block' : 'none'};
`;
