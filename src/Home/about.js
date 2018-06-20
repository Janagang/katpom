import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';



export default class About  extends Component {
    render(){
        return(
        <Grid>
            <Row>
                <Col className = "MyBorder Phara" xs = {12} sm = {12} md = {12} lg = {12} style = {{backgroundColor : "#D1F2EB"}} >
                <h2 style = {{fontSize : "28px"}}> about us </h2> 
                <p> Student Success Centre இனால் தயாரிக்கப்படும் இவ் இணையத்தளமானது மிக அடிப்படையிலிருந்து Advanced Level வரைக்கும் சகல English Grammar இனையும் உள்ளடக்கியதாக அமையும். 15 Levels ஆக பிரிக்கப்பட்டுள்ள சகல Grammar ம் வீட்டிலிருந்தவாறு இலகுவான முறையில் வகுப்பிற்கு செல்லாமல் கற்க கூடியதாக அமையும். </p>

                <p> மிக அடிப்படையான விடயங்களுடன் வெளியிடப்பட்டுள்ள www.katpom.com ஆனது level 01 இனை மாத்திரம் தற்போது கொண்டுள்ளது. வைகாசி மாதம் 15 ஆம் திகதி Level 2 ஆனது பதிவிடப்படும். </p>

                <p> இவ் இணையத்தளம் தொடர்பான நிறை மற்றும் குறைகளை வழங்கி இலங்கை, இந்திய நாடுகளில் உள்ள எமது தமிழ், முஸ்லீம் மாணவர்களுக்காக  என்னால் எவ்வகையான சேவையினை வழங்க முடியுமென கீழே உள்ள email முகவரியில் தொடர்புகொண்டு உங்கள் கருத்துக்களை வழங்குங்கள்.  </p>

                <p> நன்றி G.Janagan jaffnassc@gmail.com 
                 </p>
                </Col>
            </Row>
        </Grid>
        )
    }
}
