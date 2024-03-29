import React from 'react';
import { Container, Divider } from 'semantic-ui-react';
import { Menu, Icon, Dropdown, Segment, Image, Header, Grid, List, Input, Button } from 'semantic-ui-react';

export default class Bottom extends React.Component {

  render() {

    return (
        <Grid className='footer-background'>
          <Grid columns={2}>
            <Grid.Column Container width={16} textAlign='center' className='footer-one'>
              HARD ROCK CAFE HONOLULU
            </Grid.Column>
            <Grid.Column Container width={16} textAlign='center'>
              <Icon name="phone icon"/>
              +1-808-955-7383
              <Icon name='mail icon'/>
              Email Us
              <Icon name='home icon'/>
              280 Beachwalk, Honolulu, Hawaii 96815
              <Icon name="twitter icon"></Icon>
              <Icon name="facebook f icon"></Icon>
              <Icon name="instagram icon"></Icon>
              <Icon name="pinterest icon"></Icon>
              <Icon name="tripadvisor icon"></Icon>
            </Grid.Column>
          </Grid>
        </Grid>
    );
  }
}
