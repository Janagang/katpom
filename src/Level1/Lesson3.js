import React, {Component} from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import MyBorders from '../CSS/MyBorders.css';
import TextStyle from '../CSS/TextStyle.css'; 





export default class Lesson1 extends Component {
    render(){
        return(
            <div>
                  <br/>
            <br/>

                            {/* <Link onClick={} to = {"/How_old_are_you"}>  
                <Button onClick={this.Level1Lessons} bsStyle="primary btn btn-primary" 
                    style={{fontSize:"17px", float:"right", marginRight:"50px"}}> >> 
                </Button> 
            </Link> */}

            <br/>
            <br/>


            <h1 className = "LessonMainHeading"> 03. Noun - பெயர்ச்சொற்கள் </h1>
            <Grid fluid>
                <Row>
                <Col className = "Phara MainKeyPointBorder" style = {{backgroundColor : "#F6FAF3"}} xs={12} sm={12}  md={12} lg={12} >
                <p className="Phara">  இவ் உலகில் உள்ள அனைத்து உயிர் பிறப்புக்கள் மற்றும் உயிரற்ற பொருட்களினுடைய பெயர்களை இது குறிக்கும்.
                இவை இரண்டு வகைப்படும்.  </p>
                <ul>
                    <li> Proper Noun - விசேட பெயர்ச்சொற்கள்</li>
                    <li> Common Noun - பொதுப்பெயர்ச்சொற்கள் </li>
                </ul>

                </Col>                    
                </Row>

                <Row>
                    <Col xs={12} sm={12} md={6} lg={6}>
                    <br />
                    <br />
                    <h1 className = "LessonSubHeading"> Proper Noun - விசேட பெயர்ச்சொற்கள் </h1>
                    <p className="Phara"> Proper Noun இற்குரிய முக்கியமான விதி இச் சொற்களின் முதல் எழுத்தானது எப்போதும் Capital letter இல் எழுதுதல் வேண்டும். சில உதாரணங்களை பார்க்கலாம்.  </p>
                    </Col>
                </Row>

                  <br/>
            <br/>

    <Row>
        <Col xs={12} sm={12} md={3} lg={3}>
                    <br/> <br/>
                    <div className = "SquereTitleBorder" style ={{backgroundColor : "#808B96"}}> Person - நபர்கள் </div>
                    <div className = "SquireNoteBorder" style ={{backgroundColor : "#EAECEE"}}>                    <ul className = "Special_One">
                        <li> <span className ="FirstLetter">B</span>ala </li>
                        <li> <span className ="FirstLetter">M</span>ala </li>
                        <li> <span className ="FirstLetter">S</span>iva </li>
                        <li> <span className ="FirstLetter">K</span>umar </li>
                        <li> <span className ="FirstLetter">R</span>ajah </li>
                        <li> <span className ="FirstLetter">S</span>elva </li>
                        <li> <span className ="FirstLetter">N</span>athan </li>
                    </ul>
                    </div>
        </Col>

        <Col xs={12} sm={12} md={3} lg={3}>
                    <br/> <br/>
                    <div className = "SquereTitleBorder" style ={{backgroundColor : "#808B96"}}> Country - நாடுகள் </div>
                    <div className = "SquireNoteBorder" style ={{backgroundColor : "#EAECEE"}}>                    <ul className = "Special_One">
                        <li> <span className ="FirstLetter">S</span>ri lanka </li>
                        <li> <span className ="FirstLetter">I</span>ndia </li>
                        <li> <span className ="FirstLetter">P</span>akistan </li>
                        <li> <span className ="FirstLetter">C</span>hina </li>
                        <li> <span className ="FirstLetter">J</span>apan </li>
                        <li> <span className ="FirstLetter">P</span>akistan </li>
                        <li> <span className ="FirstLetter">N</span>orway </li>
                    </ul>
                    </div>
        </Col>

        <Col xs={12} sm={12} md={3} lg={3}>
                    <br/> <br/>
                    <div className = "SquereTitleBorder" style ={{backgroundColor : "#808B96"}}> City - நகரங்கள் </div>
                    <div className = "SquireNoteBorder" style ={{backgroundColor : "#EAECEE"}}>                    <ul className = "Special_One">
                        <li> <span className ="FirstLetter">J</span>affna </li>
                        <li> <span className ="FirstLetter">L</span>ondon </li>
                        <li> <span className ="FirstLetter">C</span>olombo </li>
                        <li> <span className ="FirstLetter">T</span>rinco </li>
                        <li> <span className ="FirstLetter">C</span>hennai </li>
                        <li> <span className ="FirstLetter">A</span>mpara </li>
                        <li> <span className ="FirstLetter">M</span>annar </li>
                    </ul>
        </div>                   
</Col>

        <Col xs={12} sm={12} md={3} lg={3}>
                    <br/> <br/>
                    <div className = "SquereTitleBorder" style ={{backgroundColor : "#808B96"}}> Week - கிழமை நாட்கள் </div>
                    <div className = "SquireNoteBorder" style ={{backgroundColor : "#EAECEE"}}>                    <ul className = "Special_One">
                        <li> <span className ="FirstLetter">S</span>unday </li>
                        <li><span className ="FirstLetter">M</span>onday </li>
                        <li><span className ="FirstLetter">T</span>uesday </li>
                        <li><span className ="FirstLetter">W</span>ednesday </li>
                        <li> <span className ="FirstLetter">T</span>hursday </li>
                        <li> <span className ="FirstLetter">F</span>riday </li>
                        <li> <span className ="FirstLetter">S</span>aturday </li>
                    </ul>
                    </div>
                    </Col>
                </Row>
                    <Row>
        <Col xs={12} sm={12} md={3} lg={3}>
                    <br/> <br/>
                    <div className = "SquereTitleBorder" style ={{backgroundColor : "#808B96"}}> Months - மாதங்கள் </div>
                    <div className = "SquireNoteBorder" style ={{backgroundColor : "#EAECEE"}}>                    <ul className = "Special_One">
                        <li> <span className ="FirstLetter">J</span>anuary </li>
                        <li> <span className ="FirstLetter">F</span>ebruary </li>
                        <li><span className ="FirstLetter">M</span>arch </li>
                        <li><span className ="FirstLetter">A</span>pril </li>
                        <li><span className ="FirstLetter">M</span>ay </li>
                        <li> <span className ="FirstLetter">J</span>une </li>
                        <li> <span className ="FirstLetter">J</span>uly </li>
                        <li> <span className ="FirstLetter">A</span>ugust </li>
                        <li> <span className ="FirstLetter">S</span>eptember </li>
                        <li><span className ="FirstLetter">O</span>ctober </li>
                        <li><span className ="FirstLetter">N</span>ovember </li>
                        <li> <span className ="FirstLetter">D</span>ecember </li>
                    </ul>
                    </div>
        </Col>

        <Col xs={12} sm={12} md={3} lg={3}>
                    <br/> <br/>
                    <div className = "SquereTitleBorder" style ={{backgroundColor : "#808B96"}}> Festival - பண்டிகைகள் </div>
                    <div className = "SquireNoteBorder" style ={{backgroundColor : "#EAECEE"}}>                    <ul className = "Special_One">
                        <li> <span className ="FirstLetter">C</span>hristmas </li>
                        <li> <span className ="FirstLetter">N</span>ew <span className ="FirstLetter">Y</span>ear </li>
                        <li><span className ="FirstLetter">T</span>haiponkal </li>
                        <li><span className ="FirstLetter">V</span>esak </li>
                        <li><span className ="FirstLetter">H</span>aj </li>
                        <li> <span className ="FirstLetter">D</span>eepavali </li>
                    </ul>

      </div>
        </Col>


                </Row>
            {/* <Link onClick={} to = {"//How_old_are_you"}>  
                <Button onClick={this.Level1Lessons} bsStyle="primary btn btn-primary" 
                    style={{fontSize:"17px", float:"right", marginRight:"50px"}}> >> 
                </Button> 
            </Link> */}

            <br/>
            <br/>
            </Grid>
            </div>
        )
    }
}

