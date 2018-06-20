import React, {Component} from 'react';


export default class Layout extends Component {

    render(){
        return (
            <div>
                <header className ='App-Header'>
                    {this.props.header}
                </header>

                <div className = 'App-Content'>
                    {this.props.children}
                </div>

                <footer className = 'App-Footer'>
                    {this.props.footer}
                </footer>
            </div>

        )
    }
}