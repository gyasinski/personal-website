import React,{Component} from "react";
import './Home.css';

export class Home extends Component {
    render() {
        return (
            <div className="screen">
                <div className="glass1">
                    <p>Hello, my name is Greg Yasinski</p>
                    <p>
                        I'm a full stack developer who recently graduated from Kennesaw State University with a Bachelors in
                        software engineering. I'm currently looking for employment as a software developer because it is
                        my passion to create software. The idea of being able to help people on such a widespread scale
                        is what pushes me forward.
                    </p>
                    <p>
                        If you wish to contact me about employment please e-mail, text, or call me. See the 'Contact Me'
                        section
                    </p>
                </div>
                <div className="profile">
                    <div className="glass3">

                    </div>
                    <div className="glass2">

                    </div>
                </div>
            </div>
        )
    }
}