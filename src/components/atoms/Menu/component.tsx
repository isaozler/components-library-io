import React, { Fragment } from 'react';
import GlobalStyle from '@components/globalStyle';

import IProps from './schema';

import { Menu, Ul, Li, A } from './styles';

let incrementKey = 0;

const LiCreator = (label: string, href: string, target: string | null = null, callBackHandler: Function | null = null, ulChildren: any, options: { isRoot?: boolean, isFullWidth?: boolean }) => {
  const onClick = (e: MouseEvent) => {
    e.preventDefault();
  }
  const linkProps = {
    ...(ulChildren ? { onClick } : {}),
  }
  return (
    <Li key={`menu-link--${href}`} isRoot={options.isRoot} isFullWidth={options.isFullWidth}>
      <A href={href} {...linkProps} {...(target ? { target } : {})} {...(callBackHandler ? { onClick: callBackHandler } : {})}>
        {label}
      </A>
      {ulChildren}
    </Li>
  )
};

const UlTreeBuilder = ({ id, arrObjs, isRoot, isFullWidth }: { id: string, arrObjs: any[], isRoot?: boolean, isFullWidth?: boolean }) => {
  if (!arrObjs?.length) return null;

  const UlParent = ({ children }: any) => {
    return <Ul>{children}</Ul>
  };

  let MenuItems = [];
  let childUl = (children: JSX.Element[]) => <UlParent>{children.map(LiChild => ({ ...LiChild, key: `${id}__nav-child-li--${incrementKey++}` }))}</UlParent>

  for (let i = 0; i < arrObjs.length; i++) {
    let liSingle;

    if (arrObjs[i].children) {
      let ulWithChildren = UlTreeBuilder({ id, isRoot, arrObjs: arrObjs[i].children })
      liSingle = LiCreator(arrObjs[i].label, '#', arrObjs[i].target, arrObjs[i].onClick, ulWithChildren, { isRoot, isFullWidth });
    } else {
      liSingle = LiCreator(arrObjs[i].label, arrObjs[i].href, arrObjs[i].target, arrObjs[i].onClick, undefined, { isRoot, isFullWidth });
    }

    MenuItems.push(liSingle);
  }

  return childUl(MenuItems);
};

const Component = ({ id, className, menu, isFullWidth }: IProps) => {
  return (
    <Fragment>
      <GlobalStyle />
      <Menu className={className}>
        {menu.length ? UlTreeBuilder({ id, arrObjs: menu, isRoot: true, isFullWidth }) : <></>}
      </Menu>
    </Fragment>
  );
};

export default Component;
