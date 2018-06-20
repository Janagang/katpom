import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Link, Switch} from 'react-router-dom';
//import TextStyle from'......./CSS/TextStyle.css'; 
import SimplePresentActive from './SimplePresentActive';
// import Lesson3 from './Lesson3';

export default class Level1Main extends Component{
    render(){
        return(
            <div>
            <Grid>
                <Row>
                <Col xs={12} sm={12} md={6} lg={6}>
            <Router>
                <Switch>
                    <ul className ="ListHeading list-group webHeading">
                        <li class="list-group-item active">   Active Voice </li>  
                        <Link onClick={SimplePresentActive} to = {"/Tenses_Simple_Present_Tense_Active_Voice"}> <li class="list-group-item ListHeading">   01. Simple Present Tense  </li>  </Link> 
                         {/* <Link onClick={Lesson2} to = {"/Level1_English_Words"}> <li class="list-group-item ListHeading">   02. Clauses </li>  </Link> 
                         <Link onClick={Lesson3} to = {"/Level1_Nouns_01"}> <li class="list-group-item ListHeading">  03. Idioms </li>  </Link>  */}
                    </ul>
                </Switch>
            </Router>
            </Col>
            </Row>
            </Grid>
            </div>
        )
    }
}