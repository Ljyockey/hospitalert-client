const React = require('react');
const {connect} = require('react-redux');

export class Footer extends React.Component {
    render() {
        return (
            <footer>
                <ul>
                    <li>Made by <a id="footer-links-name" href="http://ljyockey.com" about="blank" rel="noopener noreferrer">L.J. Yockey</a></li>
                    <li><a className="footer-links-social" href="https://github.com/Ljyockey" about="blank" rel="noopener noreferrer"><i className="fa fa-github fa-2x" aria-hidden="true"></i><span className="visuallyhidden">GitHub</span></a></li>
                    <li><a className="footer-links-social" href="https://twitter.com/Ljyockey" about="blank" rel="noopener noreferrer"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i><span className="visuallyhidden">Twitter</span></a></li>
                    <li><a className="footer-links-social" href="https://medium.com/@Ljyockey" about="blank" rel="noopener noreferrer"><i className="fa fa-medium fa-2x" aria-hidden="true"></i><span className="visuallyhidden">Medium</span></a></li>
                </ul>
            </footer>
        );
    }
}

export default connect()(Footer);