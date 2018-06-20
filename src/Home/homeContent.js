import React, {Component} from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Level1Main from '../Level1/Level1Main';
import mySubjects from'../CSS/mySubjects.css'; 
import TextStyle from'../CSS/TextStyle.css'; 
import MyBorders from'../CSS/MyBorders.css'; 
import ChapterContents from '../Chapters/ChapterContents';



export default class Body extends Component {
  render() {
    return (        
      <div>
          <Grid>
            <Row>
              
                <Col className = "EnglishHeadingBox" xs = {12} sm = {12} md = {12} lg = {12} >
                <p> English Grammar Lessons </p>
                </Col>

                <Col className= "MainKeyPointBorder" xs = {12} sm = {6} md = {6} lg = {4} 
                style={{fontsize:"12px", backgroundColor : "#D1F2EB"}}>
                    <p className ="Phara"> அடிப்படையிலிருந்து  கற்றுக்கொள்ள...   </p>
                    <Link  onClick={Level1Main} to = {"/Level1Main"}> <Button bsStyle="primary btn btn-primary" onClick = {this.Test} data-toggle="dropdown"> Level 01 </Button> </Link>
                </Col>

                <Col className= "MainKeyPointBorder" xs = {12} sm = {6} md = {6} lg = {4} 
                style={{fontsize:"12px", backgroundColor : "#D1F2EB"}}>
                    <p className ="Phara"> ஒவ்வொரு பாட அலகாக கற்றுக்கொள்ள...  </p>
                    <Link  onClick={ChapterContents} to = {"/English_Grammar_Chapters"}> <Button bsStyle="primary btn btn-primary" onClick = {this.Test} data-toggle="dropdown"> >> </Button> </Link>
                </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}
    
