import React, { Component } from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
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
    style: stylePropType,
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
    style: {},
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
      {
        showBodyAndFooter: !this.state.showBodyAndFooter,
      },
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
      style,
      children,
      ...props
    } = this.props;

    const showBodyAndFooter = closed === null ? this.state.showBodyAndFooter : !closed;

    return (
      <Container
        {...props}
        className={cn(
          {
            [`bg-${color}`]: color,
            'text-white': color && color !== 'light' && color !== 'warning',
          },
          className
        )}
        style={
          fullHeight
            ? {
                display: 'flex',
                height: '100%',
                flexDirection: 'column',
                ...style,
              }
            : style
        }
      >
        {title || controls ? (
          <Header>
            <div
              style={
                controls || (collapsible && !fullHeight)
                  ? {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'end',
                    }
                  : {}
              }
            >
              {typeof title === 'string' ? <h5 className='mr-auto'>{title}</h5> : title}
              {controls}
              {collapsible && !fullHeight ? (
                <Button
                  color={color || 'light'}
                  className='ml-3'
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
            'rounded-bottom': fullHeight && !footer,
          })}
          style={
            fullHeight
              ? {
                  height: '100%',
                  overflow: 'auto',
                }
              : {}
          }
        >
          {children}
        </Body>

        {footer ? <Footer className={cn({ 'd-none': !showBodyAndFooter })}>{footer}</Footer> : null}
      </Container>
    );
  }
}

export default Card;
