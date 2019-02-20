import { NavLinkProps } from 'react-router-dom';

export default  interface faceNavLink extends NavLinkProps {
  readonly id: string;
  readonly text?: string,
}

