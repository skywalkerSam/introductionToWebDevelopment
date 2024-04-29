import React from "react";

const Card = ({id, name, email}) => {
    return (
        <div className="tc bg-light-green dib br4 pa3 grow bw2 shadow-5 mr3 ma3 mt3 mb3">
            <img alt="robots" src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;
