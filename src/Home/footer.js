import React, {Component} from 'react';
import Layout from './Layout';
import {Grid, Row, Col, Clearfix, Button} from 'react-bootstrap';



export default class Footer extends Component {
  render(){
    return (
      <Layout
      footer= {
          <Grid fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Row>
              <Col className="FooterStyle" xs={12} sm={6}  md={6} lg={6} >
                <h1> I am footer </h1>
              </Col>

              <Col xs={12} sm={6}  md={6} lg={6} className="FooterStyle">
                
                
              </Col>
            </Row>
          </Grid>
        }
      >
      </Layout>
  )
  }
}





