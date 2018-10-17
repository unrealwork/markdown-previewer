import React, {Component} from 'react';
import './App.css';
import {Editor} from "./Editor";
import {Preview} from "./Preview"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`
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
                <div className={"columns is-narrow panel"}>
                    <div className={"column"}>
                        <Editor onMarkdownChange={this.handleMarkdown} markdown={this.state.markdown}/>
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
