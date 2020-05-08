import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'dva'
import { IndexLink, IndexLinkItem } from './../style';

class Link extends Component {
    render() {
        let { link } = this.props.link;
        return (
            link
            ? <IndexLink>
                {
                    link.map(item => {
                        return <IndexLinkItem key={item.id} href={item.url}>{item.title}</IndexLinkItem>
                    })
                }
            </IndexLink>
            : null
        );
    }
    componentDidMount(){
        let { dispatch } = this.props;
        axios.get('/api/link')
        .then(res=>{
            dispatch({ type: 'link/fetch_success', link: res.data.linkList.data });
        })
        .catch(e=>{
            dispatch({ type: 'link/fetch_error', error: e });
        })
    }
}

const mapStateToProps = (state) => {
    return {
        link: state.link
    }
}

export default connect(mapStateToProps)(Link);