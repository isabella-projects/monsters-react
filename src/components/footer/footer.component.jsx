import { Component } from "react";

import "./footer.styles.css";

class Footer extends Component {
    render() {
        return (
            <div className="wrapper">
                <p className="copyright">
                    &copy; Monsters React Beginner Project by{" "}
                    <span className="author">D. Minkov</span>
                </p>
            </div>
        );
    }
}

export default Footer;
