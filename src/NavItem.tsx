import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import { useBootstrapPrefix } from './ThemeProvider';
import { BsPrefixProps, BsPrefixRefForwardingComponent } from './helpers';

export interface NavItemProps
  extends BsPrefixProps,
    React.HTMLAttributes<HTMLElement> {}

const propTypes = {
  /**
   * @default 'nav-item'
   */
  bsPrefix: PropTypes.string,

  /** The ARIA role of the component */
  role: PropTypes.string,

  as: PropTypes.elementType,
};

const NavItem: BsPrefixRefForwardingComponent<
  'div',
  NavItemProps
> = React.forwardRef<HTMLElement, NavItemProps>(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({ bsPrefix, className, children, as: Component = 'div', ...props }, ref) => {
    bsPrefix = useBootstrapPrefix(bsPrefix, 'nav-item');

    return (
      <Component
        {...props}
        ref={ref}
        className={classNames(className, bsPrefix)}
      >
        {children}
      </Component>
    );
  },
);

NavItem.displayName = 'NavItem';
NavItem.propTypes = propTypes;

export default NavItem;
