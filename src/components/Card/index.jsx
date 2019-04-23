import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Button from '../Button';
import Icon from '../Icon';

import colors from '../../utils/colors';
import createComponent from '../../utils/createComponent';

import './index.css';

const Container = createComponent('Card.Container', 'card');
const Header = createComponent('Card.Header', 'card-header');
const HeaderInner = createComponent('Card.HeaderInner', 'card-header-inner');
const HeaderTitle = createComponent('Card.HeaderTitle', 'card-header-title');
const Body = createComponent('Card.Body', 'card-body');
const Footer = createComponent('Card.Footer', 'card-footer');

class Card extends Component {
  static propTypes = {
    color: PropTypes.oneOf(colors),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    controls: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    collapsible: PropTypes.bool,
    closed: PropTypes.oneOf([true, false, null]),
    onToggle: PropTypes.func,
    customBody: PropTypes.bool,
    footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    fullHeight: PropTypes.bool,
    children: PropTypes.node,
  };

  static defaultProps = {
    color: undefined,
    title: null,
    controls: null,
    collapsible: true,
    closed: null,
    onToggle: () => {},
    customBody: false,
    footer: null,
    fullHeight: false,
    children: null,
  };

  static Container = Container;

  static Header = Header;

  static HeaderInner = HeaderInner;

  static HeaderTitle = HeaderTitle;

  static Body = Body;

  static Footer = Footer;

  state = {
    showBodyAndFooter: true,
  };

  toggleBodyAndFooter = () =>
    this.setState(
      state => ({
        showBodyAndFooter: !state.showBodyAndFooter,
      }),
      this.props.onToggle
    );

  render() {
    const {
      color,
      title,
      controls,
      collapsible,
      closed,
      customBody,
      footer,
      fullHeight,
      children,
      ...props
    } = this.props;

    const showBodyAndFooter = closed === null ? this.state.showBodyAndFooter : !closed;
    const containerClassName = cn(
      {
        'card-on-full-height': fullHeight,
        [`bg-${color}`]: color,
        'text-white': color && color !== 'light' && color !== 'warning',
      },
      props.className
    );
    const bodyClassName = cn({
      'd-none': !showBodyAndFooter,
      'card-body-on-full-height': fullHeight,
      'rounded-top': fullHeight && !(title || controls),
      'rounded-bottom': fullHeight && !footer,
    });
    const footerClassName = cn({ 'd-none': !showBodyAndFooter });

    return (
      <Container {...props} className={containerClassName}>
        {title || controls ? (
          <Card.Header>
            <HeaderInner>
              {typeof title === 'string' ? <HeaderTitle>{title}</HeaderTitle> : title}
              {typeof controls === 'string' ? <div>{controls}</div> : controls}
              {collapsible && !fullHeight ? (
                <Button
                  color={color || 'light'}
                  className='card-toggle'
                  onClick={this.toggleBodyAndFooter}
                >
                  <Icon name={`chevron-${showBodyAndFooter ? 'down' : 'up'}`} />
                </Button>
              ) : null}
            </HeaderInner>
          </Card.Header>
        ) : null}

        {customBody ? (
          <div className={bodyClassName}>{children}</div>
        ) : (
          <Card.Body className={bodyClassName}>{children}</Card.Body>
        )}

        {footer ? <Card.Footer className={footerClassName}>{footer}</Card.Footer> : null}
      </Container>
    );
  }
}

export default Card;
