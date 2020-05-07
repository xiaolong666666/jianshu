import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'dva'
import { AuthorWrapper, AuthorHeader } from './../style.js';
import { IconGlobal } from './../../assets/fonts/iconfont';

class Author extends Component {
    constructor(){
        super();
        this.toRotate = this.toRotate.bind(this);
    }
    toRotate(){
        let deg = this.refs.rotate.style.transform.replace(/[^0-9]/ig,'');
        deg = deg ? parseInt(deg,10) : 0;
        this.refs.rotate.style.transform = "rotate("+(deg+360)+"deg)";
    }
    render() {
        let { toRotate } = this;
        let { author } = this.props.author;
        console.log(author);
        return (
            <AuthorWrapper>
                <IconGlobal />
                <AuthorHeader onClick={toRotate}>
                    <span>推荐作者</span>
                    <div><span className="iconfont" ref="rotate">&#xe70d;</span>换一批</div>
                </AuthorHeader>
                Author组件
            </AuthorWrapper>
        );
    }
    componentDidMount(){
        let { dispatch } = this.props;
        axios.get('/api/author')
        .then(res=>{
            dispatch({ type: 'author/fetch_success', author: res.data.authorList.data })
        })
        .catch(e=>{
            dispatch({ type: 'author/fetch_error', error: e })
        })
    }
}

const mapStateToProps = (state) => {
    return {
        author: state.author
    }
}

export default connect(mapStateToProps)(Author);