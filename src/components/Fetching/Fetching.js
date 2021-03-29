import React, {Component} from 'react';
import './Fetching.css';
import axios from 'axios';
import RenderApp from './RenderApp/RenderApp';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

// const withFetching = (url) => (Component) =>
export default class Fetching extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hits: [],
            isLoading: false,
            error: null
        }
    }

    async componentDidMount() {
        this.setState({ isLoading: true });

        try {
            const result = await axios.get(API + DEFAULT_QUERY)
            this.setState({
                hits: result.data.hits,
                isLoading: false
            })
        }
        catch (error) {
            this.setState({ error, isLoading: false })
        }
    }

    render() {       
        return (
            // this.props.children(this.state)
            <RenderApp {...this.state}/>
        )
    }
}