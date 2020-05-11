import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'dva'
import { IndexLink, IndexLinkItem } from './../style';

class Link extends Component {
    
    render() {
        let { link } = this.props.link;
        let { nightFlag, songFont } = this.props.Aa;
        let fontstyle = songFont ? "song " : "hei ";
        let nightstyle = nightFlag ? "night" : "";
        return (
            link
            ? <IndexLink className={fontstyle + nightstyle}>
                {
                    link.map(item => {
                        return <IndexLinkItem key={item.id} href={item.url}>{item.title}</IndexLinkItem>
                    })
                }
            </IndexLink>
            : null
        );
    }

    // 获取链接信息
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
        link: state.link,
        Aa: state.Aa
    }
}

export default connect(mapStateToProps)(Link);