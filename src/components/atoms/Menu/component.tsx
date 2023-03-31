import { Fragment, FunctionComponent } from 'react';

import IProps from './component.types';

import { Menu, Ul, Li, A } from './styles';

let incrementKey = 0;

const LiCreator = (
  label: string,
  href: string,
  target: string | null = null,
  callBackHandler: Function | null = null,
  ulChildren: any,
  options: {
    isRoot?: boolean,
    isFullWidth?: boolean,
  },
  LinkWrapper?: FunctionComponent<any>
) => {
  const onClick = (e: MouseEvent) => {
    e.preventDefault();
  }
  const linkProps = {
    ...(ulChildren ? { onClick } : {}),
  }

  const allProps = {
    ...linkProps,
    ...(target ? { target } : {}),
    ...(callBackHandler ? { onClick: callBackHandler } : {})
  }
  return (
    <Li key={`menu-link--${href}`} isRoot={options.isRoot} isFullWidth={options.isFullWidth}>
      {
        LinkWrapper ?
          <LinkWrapper href={href} passHref>
            <A href={href} {...allProps}>
              {label}
            </A>
          </LinkWrapper>
          :
          <A href={href} {...allProps}>
            {label}
          </A>
      }
      {ulChildren}
    </Li>
  )
};

const UlTreeBuilder = (
  { id, arrObjs, isRoot, isFullWidth, linkWrapper }:
    { id: string, arrObjs: any[], isRoot?: boolean, isFullWidth?: boolean, linkWrapper?: FunctionComponent<any> }
) => {
  if (!arrObjs?.length) return null;

  const UlParent = ({ children }: any) => {
    return <Ul>{children}</Ul>
  };

  let MenuItems = [];
  let childUl = (children: JSX.Element[]) => <UlParent>{children.map(LiChild => ({ ...LiChild, key: `${id}__nav-child-li--${incrementKey++}` }))}</UlParent>

  for (let i = 0; i < arrObjs.length; i++) {
    let liSingle;

    if (arrObjs[i].children) {
      let ulWithChildren = UlTreeBuilder({ id, isRoot, arrObjs: arrObjs[i].children, linkWrapper })
      liSingle = LiCreator(
        arrObjs[i].label,
        arrObjs[i].href,
        arrObjs[i].target,
        arrObjs[i].onClick,
        ulWithChildren,
        { isRoot, isFullWidth },
        linkWrapper,
      )
    } else {
      liSingle = LiCreator(arrObjs[i].label, arrObjs[i].href, arrObjs[i].target, arrObjs[i].onClick, undefined, { isRoot, isFullWidth }, linkWrapper);
    }

    MenuItems.push(liSingle);
  }

  return childUl(MenuItems);
};

const Component = ({ id, className, menu, isFullWidth, linkWrapper }: IProps) => {
  return (
    <Fragment>
      <Menu className={[className, 'menu-wrapper'].join(' ')}>
        {menu.length ? (
          UlTreeBuilder({
            id,
            arrObjs: menu,
            isRoot: true,
            isFullWidth,
            linkWrapper,
          })
        ) : (
          <></>
        )}
      </Menu>
    </Fragment>
  )
};

export default Component;
