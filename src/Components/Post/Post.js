import React from 'react';
import {NavLink, withRouter} from "react-router-dom";

const Post = ({item, match: {url}}) => {
    return (
        <div>
            {item.id} - {item.title} - <NavLink to={`${url}/${item.id}`}>details</NavLink>
        </div>
    );
}

export default withRouter(Post);
