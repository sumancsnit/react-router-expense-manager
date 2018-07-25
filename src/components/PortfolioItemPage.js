import React from 'react'



const PortfolioItem = (props) => (
    <React.Fragment>
        <div>
            <h1>I am a web developer</h1>
            <p>This page is for the item with the id of {props.match.params.id}</p>
        </div>
    </React.Fragment>
);

export default PortfolioItem


