import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import faceNavLink from "./Interface";

import shortid from "shortid";

const NavArray: faceNavLink[] = [
  {
    to: "/1",
    text: "1",
    id: shortid.generate()
  },
  {
    to: "/2",
    text: "2",
    id: shortid.generate()
  },
  {
    to: "/3",
    text: "3",
    id: shortid.generate()
  },
  {
    to: "/4",
    text: "4",
    id: shortid.generate()
  }
];

const DupNavLink: React.FC<{}> = () => (
  <Fragment>
    {NavArray.map(
      ({
        to,
        id,
        replace,
        activeClassName,
        activeStyle,
        exact,
        strict,
        isActive,
        text
      }: faceNavLink) => (
        <NavLink
          key={id}
          to={to}
          replace={replace}
          activeClassName={activeClassName}
          activeStyle={activeStyle}
          exact={exact}
          strict={strict}
          isActive={isActive}
        >
          {text}
        </NavLink>
      )
    )}
  </Fragment>
);

export default DupNavLink;
