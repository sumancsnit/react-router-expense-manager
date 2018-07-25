import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioPage = () => (
    <React.Fragment>
        <div>
            <h1>More Details</h1>
            <p>Details of tom dik and harry</p>
            <Link to="/portfolio/47">Item One</Link>
            <Link to="/portfolio/97">Item Two</Link>
        </div>
    </React.Fragment>
);

export default PortfolioPage