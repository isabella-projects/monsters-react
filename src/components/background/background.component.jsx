import { Component } from "react";

import "./background.styles.css";

class Background extends Component {
    render() {
        return (
            <>
                <div className="stars"></div>
                <div className="twinkling"></div>
                <div className="clouds"></div>
            </>
        );
    }
}

export default Background;
