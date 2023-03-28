import React,{Component} from "react";

export class Toolbar extends Component {
    render() {
        return (
            <div className="toolBar">
                <div className="toolButtons">
                    <button className="toolButton" type="button">Projects</button>
                    <button className="toolButton" type="button">Experience</button>
                    <button className="toolButton" type="button">Contact Me</button>
                </div>
          </div>
        )
    }
}