import React from 'react';
import PropTypes from 'utils/propTypes';

import bn from 'utils/bemnames';
import Typography from './Typography';

const bem = bn.create('page');

const Page = ({
  title,
  description,
  breadcrumbs,
  tag: Tag,
  className,
  children,
  ...restProps
}) => {
  const classes = bem.b('px-3', className);

  return (
    <Tag className={classes} {...restProps}>
      <div className={bem.e('header')}>
        {title && typeof title === 'string' ? (
          <Typography type="h1" className={bem.e('title')}>
            {title}
          </Typography>
        ) : (
          title
        )}
      </div>
      <Typography type="h1" className={bem.e('description')}>
           {description}
      </Typography>
      {children}
    </Tag>
  );
};

Page.propTypes = {
  tag: PropTypes.component,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  children: PropTypes.node,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      active: PropTypes.bool,
    }),
  ),
};

Page.defaultProps = {
  tag: 'div',
  title: '',
};

export default Page;
