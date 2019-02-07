import React, { Component } from 'react';
import { UncontrolledCollapse, Collapse, Button, CardBody, Card } from 'reactstrap';
import  StudioGhibli from './Studio_Ghibliapi'

class Infomation extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    let items = this.props.items
    return (
      <div>
        <div>
          <Button color="info" id="info" style={{ marginBottom: '1rem' }}>info</Button>
          <UncontrolledCollapse toggler="#info">
            <Card>
              <CardBody id='info[type="Main itle"]'>

              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </div>
      </div>
    );
  }
}

export default Infomation;
