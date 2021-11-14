import React, { Fragment } from 'react';
import GlobalStyle from '@components/globalStyle';

import IProps from './schema';

import { Menu, Ul, Li, A } from './styles';

const LiCreator = (label: string, href: string, ulChildren: any, options: { isRoot?: boolean, isFullWidth?: boolean }) => {
  const onClick = (e: MouseEvent) => {
    e.preventDefault();
  }
  const linkProps = {
    ...(ulChildren ? { onClick } : {}),
  }
  return (
    <Li isRoot={options.isRoot} isFullWidth={options.isFullWidth}>
      <A href={href} {...linkProps}>
        {label}
      </A>
      {ulChildren}
    </Li>
  )
};

const UlTreeBuilder = ({ arrObjs, isRoot, isFullWidth }: { arrObjs: any[], isRoot?: boolean, isFullWidth?: boolean }) => {
  if (!arrObjs?.length) return null;

  const UlParent = ({ children }: any) => {
    return <Ul>{children}</Ul>
  };

  let MenuItems = [];
  let childUl = (children: JSX.Element[]) => <UlParent>{children.map(li => li)}</UlParent>

  for (let i = 0; i < arrObjs.length; i++) {
    let liSingle;

    if (arrObjs[i].children) {
      let ulWithChildren = UlTreeBuilder({ isRoot, arrObjs: arrObjs[i].children })
      liSingle = LiCreator(arrObjs[i].label, '#', ulWithChildren, { isRoot, isFullWidth });
    } else {
      liSingle = LiCreator(arrObjs[i].label, arrObjs[i].href, undefined, { isRoot, isFullWidth });
    }
    MenuItems.push(liSingle)
  }

  return childUl(MenuItems)
};

const Component = ({ className, menu, isFullWidth }: IProps) => {
  return (
    <Fragment>
      <GlobalStyle />
      <Menu className={className}>
        {menu.length ? UlTreeBuilder({ arrObjs: menu, isRoot: true, isFullWidth }) : <></>}
      </Menu>
    </Fragment>
  );
};

export default Component;
