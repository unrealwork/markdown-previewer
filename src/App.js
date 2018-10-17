import React, {Component} from 'react';
import './App.css';
import {Editor} from "./Editor";
import {Preview} from "./Preview"

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            markdown: ''
        };
        this.handleMarkdown = this.handleMarkdown.bind(this);
    }

    handleMarkdown(md) {
        this.setState({
            markdown: md
        })
    }

    render() {
        return (
            <div className="App container is-fluid">
                <nav>
                    <h2 className={"title is-2"}>Markdown Preview</h2>
                </nav>
                <hr className="navbar-divider"/>
                <div className={"columns is-narrow"}>
                    <div className={"column"}>
                        <Editor onMarkdownChange={this.handleMarkdown}/>
                    </div>
                    <div className={"column"}>
                        <Preview content={this.state.markdown}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
