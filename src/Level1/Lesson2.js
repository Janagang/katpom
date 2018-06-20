import React, {Component} from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import MyBorders from '../CSS/MyBorders.css';
import TextStyle from '../CSS/TextStyle.css'; 

import Lesson3 from './Lesson3';
import {Link} from 'react-router-dom';

export default class Lesson1 extends Component {
    render(){
        return(
            <div>
                  <br/>
            <br/>

            <Link onClick={Lesson3} to = {"/Level1_Nouns_01"}>  
                <Button onClick={this.Level1Lessons} bsStyle="primary btn btn-primary" 
                    style={{fontSize:"17px", float:"right", marginRight:"50px"}}> >> 
                </Button> 
            </Link>

            <br/>
            <br/>


            <h1 className = "LessonMainHeading"> 02. English Words </h1>
            <Grid fluid>
                <Row>
                <Col className = "Phara MainKeyPointBorder" style = {{backgroundColor : "#F6FAF3"}} xs={12} sm={12}  md={12} lg={12} >
                <p class="Phara"> 26 எழுத்துக்களை பயன்படுத்தி உருவாக்கப்பட்ட பல இலட்சம் சொற்களும் 8 வகையினுள் அடக்கப்படுகின்றது. </p>                
                </Col>                    
                </Row>

                <Row>
                <Col className = "Phara" xs={12} sm={12}  md={6} lg={6} >
                <br/>
                <br/>

<ul class="list-group">
  <li class="list-group-item Phara"> 01. Noun - பெயர்ச்சொற்கள் </li>
  <li class="list-group-item Phara"> 02. Verb - வினைச்சொற்கள்</li>
  <li class="list-group-item Phara"> 03. Conjunction - இடைச்சொற்கள்</li>
  <li class="list-group-item Phara"> 04. Pronoun - பிரதிப்பெயர்ச்சொற்கள்</li>
  <li class="list-group-item Phara"> 05. Adverb - வினையுரிச்சொல்</li>
  <li class="list-group-item Phara"> 06. Adjective - பெயருரிச்சொல்  </li>
  <li class="list-group-item Phara"> 07. Preposition - முன்னிடைச்சொற்கள்  </li>
  <li class="list-group-item Phara"> 08. Interjection - வியப்புச்சொற்கள்  </li>
</ul>
</Col>                    
</Row>
    <Row>
        <Col xs={12} sm={12} md={3} lg={3}>
                    <br/> <br/>
                    <div className = "OverlTitleBorder" style ={{backgroundColor : "#C0392B"}}> Noun </div>
                    <div className = "MyNotesBorder" style ={{backgroundColor : "#F9EBEA"}}>
                    <p className = "Phara">
            உலகில் உள்ள அனைத்து பொருட்கள் நபர்களின் பெயர்களை இது குறிக்கும். 
            காலத்தின் மாற்றத்திற்கு ஏற்ப சில புதிய பொருட்கள் தோற்றம் பெறுவதும். சில பொருட்களின் பெயர்கள் மறைந்து போவதும் பொதுவானது. இனி வரப்போகும் சந்ததிக்கு Floppy Disk என்றால் தெரியவா போகிறது!
          </p>
                    </div>
        </Col>

        <Col xs={12} sm={12} md={3} lg={3}>
                    <br/> <br/>
                    <div className = "OverlTitleBorder" style ={{backgroundColor : "#16A085"}}> Verb </div>
                    <div className = "MyNotesBorder" style ={{backgroundColor : "#EAF2F8"}}>
                    <p className="Phara">
            செயலை குறிக்கும் சொற்கள் வினைச்சொற்கள் ஆகும் என்று சிறு வயதில் படித்தோம். 

            ஆனால் like, love, depend, believe, trust போன்ற சொற்கள் run, play , read போன்று செயலினை குறிக்கவில்லை. வினைச்சொற்களினை பற்றி விபரமாக கற்ற பின்னர் இவற்றுக்குரிய வேறுபாடு புரியும்.
          </p>                    </div>
        </Col>

        <Col xs={12} sm={12} md={3} lg={3}>
                    <br/> <br/>
                    <div className = "OverlTitleBorder" style ={{backgroundColor : "#283747"}}> Adverb </div>
                    <div className = "MyNotesBorder" style ={{backgroundColor : "#EBEDEF"}}>
                    <p className="Phara"> வினைச்சொற்களை விசேடிக்கும் சொற்கள் வினையுரிச்சொற்கள் (Adverb) ஆகும். உதாரணமாக run என்றால் ஓடு. இவ் வினைச்சொல்லை விசேடிக்கும். வேகமாக (fast) மெதுவாக (slowly) போன்ற சொற்கள் adverb ஆகும். 
            இதில் பல வகைகள் உள்ளன.</p>
        </div>                   
                    </Col>

        <Col xs={12} sm={12} md={3} lg={3}>
                    <br/> <br/>
                    <div className = "OverlTitleBorder" style ={{backgroundColor : "#B7950B"}}> Adjective </div>
                    <div className = "MyNotesBorder" style ={{backgroundColor : "#FEF9E7"}}>
                    <p className= "Phara"> பெயர்ச்சொற்களை விசேடிக்கும் சொற்கள் பெயருரிச்சொற்கள் (Adjective) ஆகும். உதாரணமாக house என்றால் வீடு. இப் பெயர்ச்சொல்லை விசேடிக்கும். அழகான (beautiful) பெரிய (big), சிறிய (small) பழைய (old), புதிய (new) போன்ற சொற்கள் adjective ஆகும். 
          </p>
                    </div>
                    </Col>
                </Row>

                    <Row>
        <Col xs={12} sm={12} md={3} lg={3}>
                    <br/> <br/>
                    <div className = "OverlTitleBorder"style ={{backgroundColor : "#239B56"}} > Conjunction </div>
                    <div className = "MyNotesBorder" style ={{backgroundColor : "#EAFAF1"}}>
                    <p className="Phara">
            when, while, before , after, although போன்ற இடைச்சொற்கள் (conjunction) ஆனது சொற்களை அல்லது வாக்கிய கூறுகளை (Clauses) இணைப்பதற்கு பயன்படுத்தப்படுகின்றது. 
          </p>
                    </div>
        </Col>

        <Col xs={12} sm={12} md={3} lg={3}>
                    <br/> <br/>
                    <div className = "OverlTitleBorder" style ={{backgroundColor : "#7D3C98"}}> Preposition </div>
                    <div className = "MyNotesBorder" style ={{backgroundColor : "#F5EEF8"}}>
                    <p className="Phara">
          பெரும்பாலானோர் ஆங்கிலத்தினை வெறுப்பதற்கு காரனகர்த்தா இந்த வகை சொல்லே. in ஐ பயன்படுத்துவதா at ஐ பயன்படுத்துவதா என்ற குழப்பம்
          I go to school.
          I go home.

          Home இற்கு ஏன் to பயன்படுத்தவில்லை என்ற குழப்பம்.  இவ்வாறு பல பல குழப்பங்களும் இவ் 12 levels இனை முடித்த பின்னர் நீங்கிவிடும். 
           </p>
      </div>
        </Col>

        <Col xs={12} sm={12} md={3} lg={3}>
                    <br/> <br/>
                    <div className = "OverlTitleBorder" style ={{backgroundColor : "#808B96"}}> Pronoun </div>
                    <div className = "MyNotesBorder" style ={{backgroundColor : "#EAECEE"}}>
                    <p className="Phara">
            ஒரு பெயர்ச்சொல்லிற்கு பதிலாக பயன்படுத்தப்படும் சொற்களே பிரதிப்பெயர்ச்சொல் (pronooun) ஆகும்.  உதாரணம் He, she, it, we, they </p>

          <p className="Phara">
            இதனை தவிர relative pronoun who, which, whom, that போன்ற சொற்களை பற்றியும் விபரமாக கற்கவுள்ளோம். 
          </p>        
          </div>    
                    </Col>

        <Col xs={12} sm={12} md={3} lg={3}>
                    <br/> <br/>
                    <div className = "OverlTitleBorder" style ={{backgroundColor : "#9A7D0A"}}> Interjection </div>
                    <div className = "MyNotesBorder" style ={{backgroundColor : "#F9E79F"}}>
                    <p className="Phara">
            மேலே உள்ள 7 வகை சொற்களும் மிக முக்கியமானவை. பல விடயங்கள் அவை தொடர்பாக கற்கவுள்ளோம். Interjection (வியப்புச்சொற்கள் என்பது ஆச்சரியமடையும் சந்தர்ப்பத்தில் பொதுவாக இச் சொற்கள் பயன்படுத்தப்படுகின்றன. (wow :)
          </p>
                    </div>
                    </Col>
                </Row>

                    <br />
                    <br />                    

                                    <p className = "Phara">  முதலில் Noun தொடர்பான அடிப்படையான விளக்கங்களை பார்க்கலாம். </p>


            </Grid>

                  <br/>
            <br/>

                            <Link onClick={Lesson3} to = {"Level1_Nouns_01"}>  
                <Button onClick={this.Level1Lessons} bsStyle="primary btn btn-primary" 
                    style={{fontSize:"17px", float:"right", marginRight:"50px"}}> >> 
                </Button> 
            </Link>

            <br/>
            <br/>


            </div>
        )
    }
}

