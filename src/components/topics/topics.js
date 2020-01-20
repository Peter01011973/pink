import React from 'react'
import { useRouteMatch, Link, Switch, Route, useParams, Redirect } from 'react-router-dom';

const Topics = () => {
    let {url, path} = useRouteMatch();
    // console.log(match);
    
    return (
        <div>
            <h3>Topics</h3>
            <ul>
                <li><Link to = {`${url}/components`}>Components</Link></li>
                <li><Link to = {`${url}/functions`}>Functions</Link></li>
            </ul>
            <Switch>
                <Route path = {`${path}/:topicId`}><Topic /></Route>
                <Route path = {path}><h3>Please select topic</h3></Route>
            </Switch>
        </div>
    )
}

export default Topics;

const Topic = () => {
    let {topicId} = useParams();
    // console.log(topicId);
    
return (
    <div>
        <h3>A piace of info {topicId}</h3>
    </div>
    )
}
