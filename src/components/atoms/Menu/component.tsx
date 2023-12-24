import React, { FunctionComponent } from 'react'

import IProps from './component.types'

import { Menu, Ul, Li, A } from './styles'

let incrementKey = 0

const LiCreator = (
  label: string,
  href: string,
  ulChildren: any,
  options: {
    isRoot?: boolean
    isFullWidth?: boolean
  },
  LinkWrapper?: FunctionComponent<any>,
  target: string | null = null,
  callBackHandler: Function | null = null,
) => {
  const onClick = (e: MouseEvent) => {
    e.preventDefault()
  }
  const linkProps = {
    ...(ulChildren ? { onClick } : {}),
  }

  const allProps = {
    ...linkProps,
    ...(target ? { target } : {}),
    ...(callBackHandler ? { onClick: callBackHandler } : {}),
  }
  return (
    <Li
      key={`menu-link--${href}`}
      isRoot={options.isRoot}
      isFullWidth={options.isFullWidth}
    >
      {LinkWrapper ? (
        <LinkWrapper href={href} passHref>
          <A href={href} {...allProps}>
            {label}
          </A>
        </LinkWrapper>
      ) : (
        <A href={href} {...allProps}>
          {label}
        </A>
      )}
      {ulChildren}
    </Li>
  )
}

const UlTreeBuilder = ({
  id,
  arrObjs,
  isRoot,
  isFullWidth,
  linkWrapper,
}: {
  id: string
  arrObjs: any[]
  isRoot?: boolean
  isFullWidth?: boolean
  linkWrapper?: FunctionComponent<any>
}) => {
  if (!arrObjs?.length) return null

  const UlParent = ({ children }: any) => {
    return <Ul>{children}</Ul>
  }

  let MenuItems = []
  let childUl = (children: JSX.Element[]) => (
    <UlParent>
      {children.map((LiChild) => ({
        ...LiChild,
        key: `${id}__nav-child-li--${incrementKey++}`,
      }))}
    </UlParent>
  )

  for (const element of arrObjs) {
    let liSingle

    if (element.children) {
      let ulWithChildren = UlTreeBuilder({
        id,
        isRoot,
        arrObjs: element.children,
        linkWrapper,
      })
      liSingle = LiCreator(
        element.label,
        element.href,
        ulWithChildren,
        { isRoot, isFullWidth },
        linkWrapper,
        element.target,
        element.onClick,
      )
    } else {
      liSingle = LiCreator(
        element.label,
        element.href,
        undefined,
        { isRoot, isFullWidth },
        linkWrapper,
        element.target,
        element.onClick,
      )
    }

    MenuItems.push(liSingle)
  }

  return childUl(MenuItems)
}

const Component = ({
  id,
  className,
  menu,
  isFullWidth,
  linkWrapper,
}: IProps) => {
  return (
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
  )
}

export default Component
