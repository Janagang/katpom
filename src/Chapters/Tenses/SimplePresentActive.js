import React, {Component} from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';

import { Link} from 'react-router-dom';
// import MyVideos from '../CSS/MyVideos.css';
// import TextStyle from '../CSS/TextStyle.css';
export default class Lesson1 extends Component {
    render(){
        return(
            <div>

                {/* <Link onClick={Lesson2} to = {"/Lets_Read_Numbers"}>  
                <Button onClick={this.Level1Lessons} bsStyle="primary btn btn-primary" 
                    style={{fontSize:"17px", float:"right", marginRight:"50px"}}> >> 
                </Button> 
            </Link> */}

            <br/>
            <br/>


            <h1 className = "LessonMainHeading"> 01. Simple Present Tense </h1>
            <Grid fluid>
                <Row>
                <Col className = "Phara MainKeyPointBorder" style = {{backgroundColor : "#F6FAF3"}} xs={12} sm={12}  md={12} lg={12} >
                <p class="Phara"> ஆங்கிலத்தில் உள்ள மொத்த எழுத்துக்கள் 26 ஆகும். இவை இரண்டு பிரதான பிரிவுகளாக ப்ரிக்கப்படுகின்றன. </p>
        <p class="Phara"> 1. உயிர் எழுத்துக்கள் (Vowels) </p>
        <p class="Phara"> 2. மெய் எழுத்துக்கள். (Consonant) </p>                </Col>                    
                </Row>
            </Grid>



            <Grid flued>
            <Row>
                <Col xs={12} sm={12} md={10} lg={10} className ="Phara" >
                <br />
                <br />
                <p class="LessonSubHeading"> உயிர் எழுத்துக்கள் (Vowels) </p>

<p class="Phara"> தமிழில் அ, ஆ, இ, ஈ, உ, ஊ, எ, ஏ, ஐ, ஒ, ஓ மற்றும் ஓள ஆகிய 12 உயிர் எழுத்துக்களை போன்று ஆங்கிலத்தில் 5 உயிர் எழுத்துக்கள் உள்ளன. அவையாவன A, E, I, O மற்றும் U ஆகும். </p>
<br />
<p class="LessonSubHeading"> தமிழில் 12 உயிர் எழுத்துக்கள். ஆங்கிலத்தில் 5 மாத்திரம்!!! எப்படி? </p>         

<p class="Phara"> தமிழில் உள்ள உயிர் எழுத்துக்கள் ஆனது குறில் எழுத்துக்கள் (short Vowel) (அ, இ, உ, எ, ஒ) மற்றும் நெடில் எழுத்துக்கள் (Long Vowel) (ஆ, ஈ, ஊ, ஏ, ஓ) என பிரிக்கப்பட்டுள்ளது. குறுகிய ஓசையினை உடைய எழுத்துக்கள் குறில் எழுத்துக்கள்  ஆகும்.. உதாரணமாக அ-அம்மா , இ-இல்லம், உ-உலகம், எ-எண்ணம் , ஒ- ஒன்பது. அதே போன்று நீண்ட ஓசையுடன் ஒலிக்கும் எழுத்துக்கள் நெடில் எழுத்துகள் ஆகும். உதாரணமாக ஆ-ஆமை, ஈ-ஈட்டி, ஊ-ஊரார், ஏ-ஏக்கம் </p>

<p class="Phara"> ஆங்கிலத்தில் இவ் 5 எழுத்துக்களை மாத்திரம்  பயன்படுத்தி  குறில் மற்றும் நெடில் ஓசைகள் உண்டாகும் படி உருவாக்கப்பட்டுள்ளது. </p>

<br />

<p class="LessonSubHeading"> A B C D சத்தமாக வாசிப்போம். </p>         

   <p class="Phara">
     இவ் வீடியோவினை அதிக சத்தத்தில் play செய்து இவ் ஆசிரியருடன் சேர்ந்து நீங்களும் சத்தமாக வாசிக்கவும்.
   </p>	


                </Col>
            </Row>

            <Row>
                <Col xs={12} sm={12} md={6} lg={6}  >
                <div className = "VideoResp">
                <iframe class="MyVideo" width="300" height="315" src="https://www.youtube.com/embed/EgzHCuzVKb8?rel=0&amp;start=9" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
                </Col>
            
            </Row>

            <Row>
                <Col xs={12} sm={12} md={10} lg={10} className ="Phara">
                <br />
            
                <p class="LessonSubHeading"> ஏன் இவ் வீடியோவில் z ஆனது சீ என உச்சரிக்கப்பட்டது?	</p>
		
        <p class="Phara">
          ஆங்கில மொழி ஆனது American English , British English மற்றும் இன்னும் சில நாடுகளுக்கு ஏற்ப வித்தியாசப்படுகிறது. அந்த வகையில் Z ஆனது உச்சரிக்கப்படும் முறை வித்தியாசமாகும். British English இல் சற் என உச்சரிக்கப்படுகின்றது. American English இல் சி என உச்சரிக்கப்படுகின்றது. இவ் வீடியோவில் z உச்சரிக்கும் முறையினை அவதானியுங்கள். </p>


      </Col>
      </Row>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6}>
                <div className = "VideoResp">
                  <iframe class="MyVideo" width="300" height="315" src="https://www.youtube.com/embed/el-apFlt2AM?rel=0" frameborder="0" allow="autoplay; encrypted-media" align="center" allowfullscreen></iframe>
                </div>
                </Col>
            </Row>
            </Grid>

            <br/>
            <br/>

                            {/* <Link onClick={Lesson2} to = {"/Lets_Read_Numbers"}>  
                <Button onClick={this.Level1Lessons} bsStyle="primary btn btn-primary" 
                    style={{fontSize:"17px", float:"right", marginRight:"50px"}}> >> 
                </Button> 
            </Link> */}

            <br/>
            <br/>


            </div>
        )
    }
}