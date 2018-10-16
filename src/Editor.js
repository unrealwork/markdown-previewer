import * as React from "react";

export class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: ''
        }
        this.markdownChanged = this.markdownChanged.bind(this);
    }

    markdownChanged(e) {
        this.setState({
            markdown: e.target.value
        });
        this.props.onMarkdownChange(e.target.value);
    }

    render() {
        return (<div>
            <p className={"subtitle"}>Editor</p>
            <textarea className="textarea" type="text" id={"editor"} placeholder={"Markdown"}
                      onChange={this.markdownChanged}></textarea>
        </div>);
    }
}