import React, {Component} from 'react';
import logoHome from '../img/icons/home.png'; 
import logoAboutUS from '../img/icons/aboutus.png'; 
import Layout from './Layout';
import {Grid, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import homeContent from './homeContent';
import myHeader from '../CSS/myHeader.css';
import About from './about';


export default class Header extends Component {
  render(){
    return (
      <Layout
        header = {
          <Grid fluid>
            <Row>
              <Col className="HeaderStyle" xs={12} sm={6}  md={6} lg={6} >
              <br/>
                <p className = "webHeading"> பலதும் கற்போம் <span style = {{color : "yellow"}}>  katpom.com  </span> </p>  
              </Col>

              <Col className="HeaderStyle" xs={12} sm={6}  md={6} lg={6} >
              <Link  onClick={homeContent} to = {"/"}>  <img src={logoHome} alt="katpom" height = "35px;" width = "35px;"/>; </Link>
              <Link  onClick={About} to = {"/about"}> <img src={logoAboutUS} alt="katpom"  height = "50px;" align="middle" width = "50px;" />;  </Link>              
              </Col>
            </Row>
            <br />
            <br />
          </Grid>
        }
      >
      </Layout>
  )
  }
}





