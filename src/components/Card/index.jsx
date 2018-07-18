import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Button from '../Button';
import Icon from '../Icon';

import Container from './Container';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

import colors from '../../utils/colors';

import './index.css';

class Card extends Component {
  static propTypes = {
    color: PropTypes.oneOf([...colors, '']),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    controls: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    collapsible: PropTypes.bool,
    closed: PropTypes.oneOf([true, false, null]),
    onToggle: PropTypes.func,
    customBody: PropTypes.bool,
    footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    fullHeight: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    color: '',
    title: null,
    controls: null,
    collapsible: true,
    closed: null,
    onToggle: () => {},
    customBody: false,
    footer: null,
    fullHeight: false,
    className: '',
    children: null,
  };

  static Container = Container;

  static Header = Header;

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
      className,
      children,
      ...props
    } = this.props;

    const showBodyAndFooter = closed === null ? this.state.showBodyAndFooter : !closed;

    return (
      <Container
        {...props}
        className={cn(
          {
            'card-on-full-height': fullHeight,
            [`bg-${color}`]: color,
            'text-white': color && color !== 'light' && color !== 'warning',
          },
          className
        )}
      >
        {title || controls ? (
          <Header>
            <div className='card-header-inner'>
              {typeof title === 'string' ? <div className='card-header-title'>{title}</div> : title}
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
            </div>
          </Header>
        ) : null}

        <Body
          custom={customBody}
          className={cn({
            'd-none': !showBodyAndFooter,
            'card-body-on-full-height': fullHeight,
            'rounded-top': fullHeight && !(title || controls),
            'rounded-bottom': fullHeight && !footer,
          })}
        >
          {children}
        </Body>

        {footer ? <Footer className={cn({ 'd-none': !showBodyAndFooter })}>{footer}</Footer> : null}
      </Container>
    );
  }
}

export default Card;
