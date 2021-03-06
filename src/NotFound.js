const { Link } = require("react-router-dom")

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page cannot be Found</p>
            <Link to="/">Back to Home Page</Link>
        </div>
     );
}
 
export default NotFound;