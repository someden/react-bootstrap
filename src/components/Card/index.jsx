import React, { Component } from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

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
    } = this.props;

    const showBodyAndFooter = closed === null ? this.state.showBodyAndFooter : !closed;

    return (
      <Container
        className={`
          ${color ? `bg-${color}` : ''}
          ${color && color !== 'light' && color !== 'warning' ? ' text-white' : ''}
          ${className}
        `}
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
              {typeof title === 'string' ? <h5 className='mr-auto my-2'>{title}</h5> : title}
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
          className={showBodyAndFooter ? '' : 'd-none'}
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

        {footer ? <Footer className={showBodyAndFooter ? '' : 'd-none'}>{footer}</Footer> : null}
      </Container>
    );
  }
}

Card.Container = Container;
Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
