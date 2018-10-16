import * as React from "react";
import * as marked from "marked";

export class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.content
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.content && nextProps.content !== this.props.content) {
            this.setState({
                content: nextProps.content
            })
        }
    }


    render() {
        return (<div>
            <p className={"subtitle"}>Preview</p>
            <pre id={"preview"} className={"content"} dangerouslySetInnerHTML={{__html: marked(this.state.content)}}/>
        </div>)
    }
}