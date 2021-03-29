import React from 'react'
import { useRouteMatch, Switch, Route, useParams } from 'react-router-dom';

const Topics = (props) => {
    let {url, path} = useRouteMatch();
    let params = useParams();
    console.log('params ', params);
    let match = useRouteMatch('/topics/components');
    console.log('useRouteMatch', match);
    console.log('props', props);
    
    
    return (
        <div>
            <h3>Topics</h3>
            <Switch>
                <Route path = {`${path}/:topicId`}><Topic /></Route>
                <Route path = {path}><h3>Please select topic</h3></Route>
                <Route ><h1>not found</h1></Route>
            </Switch>
        </div>
    )
}

export default Topics;

const Topic = () => {
    let {topicId} = useParams();
    let params = useParams();
    console.log('params topicId',params);
    
return (
    <div>
        <h3>A piace of info {topicId}</h3>
    </div>
    )
}
