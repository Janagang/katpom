import React, {Component} from 'react';
import Header from './Home/Header';
import About from './Home/about';

import ChapterContents from './Chapters/ChapterContents';
import TenseContents from './Chapters/Tenses/TenseContents';
import SimplePresentActive from './Chapters/Tenses/SimplePresentActive';

import homeContent from './Home/homeContent';
import Level1Main from './Level1/Level1Main';
import Lesson1 from './Level1/Lesson1';
import Lesson2 from './Level1/Lesson2';
import Lesson3 from './Level1/Lesson3';
import {BrowserRouter as Router, Route} from 'react-router-dom';

{/* English Chapters */}



export default class App extends Component{
    render() {
        return (
            
            <Router>
                <div>
                
            <Header />
                <Route path = "/" exact strict component = {homeContent} />
                <Route path = "/about" exact strict component = {About} />
                <Route path = "/Level1Main" component = {Level1Main} />
                <Route path = "/Level1_English_Letters"  component = {Lesson1} />
                <Route path = "/Level1_English_Words"  component = {Lesson2} />
                <Route path = "/Level1_Nouns_01"  component = {Lesson3} />
                
                {/* English Chapters */}
                <Route path = "/English_Grammar_Chapters"  component = {ChapterContents} />
                <Route path = "/Tenses_Active_Voice_Contents"  component = {TenseContents} />
                <Route path = "/Tenses_Simple_Present_Tense_Active_Voice"  component = {SimplePresentActive} />


                <br />
                <br />
                <br />      
            </div>

            </Router>
            
        )
    }
}