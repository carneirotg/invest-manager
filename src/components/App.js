import React, {Component} from 'react';
import '../styles/App.css';
import {Container, Row} from 'react-bootstrap';

import Upload from './Upload'
import InvestHeader from './InvestHeader'

class App extends Component{
  constructor(){
    super();
    this.state = {
      results: {}
    }
  }

  render() {
    return(
      <Container>
        <Row>
          <InvestHeader />
        </Row>
        <div className="Card">
          <Upload />
        </div>
      </Container>
    );
  }
}



export default App;
