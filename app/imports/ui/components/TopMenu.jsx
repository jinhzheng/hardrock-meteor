import React from 'react';
import { Container, Divider } from 'semantic-ui-react';
import { Menu, Icon, Dropdown, Segment, Image, Header, Grid, List, Input, Button } from 'semantic-ui-react';

export default class TopMenu extends React.Component {

  render() {
    const itemStyle = { color: "#ccc", fontSize: "22px" };
    return (
        <Menu className="topmenu">
          <Menu.Item><Image
              src='http://courses.ics.hawaii.edu/ics314f17/morea/ui-frameworks/hard-rock-logo.png'/></Menu.Item>
          <Menu.Item style={itemStyle} position="right">CAFES</Menu.Item>
          <Menu.Item style={itemStyle}>CASINOS</Menu.Item>
          <Menu.Item style={itemStyle}>LIVE</Menu.Item>
          <Menu.Item style={itemStyle}>SHOP</Menu.Item>
          <Menu.Item style={itemStyle}>BLOG</Menu.Item>
          <Menu.Item style={itemStyle}>REWARDS</Menu.Item>

        </Menu>
    )
  }
}
