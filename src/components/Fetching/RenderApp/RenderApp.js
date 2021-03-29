import React from 'react';

const RenderApp = ({hits, isLoading, error}) => {

    if (isLoading) return (<p>Loading...</p>)
    if (!hits) return (<p>Not data yet...</p>)
    if (error) return (<p>{error.message}</p>)
    const renderHits = hits.map(hit => <li key={hit.objectID}><a href={hit.url}>{hit.title}</a></li>)
    return (
        <div className='fetching'>
        <h1>Fetching</h1>
        <ul>
            {renderHits}
        </ul>
    </div>
    )
}

export default RenderApp
