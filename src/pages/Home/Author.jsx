import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'dva'
import { AuthorWrapper, AuthorHeader, AuthorItem, AuthorFace, AuthorIntroduction, AuthorAll } from './../style.js';
import { IconGlobal } from './../../assets/fonts/iconfont';

class Author extends Component {
    constructor(){
        super();
        this.toRotate = this.toRotate.bind(this);
        this.attention = this.attention.bind(this);
    }
    toRotate(){
        let deg = this.refs.rotate.style.transform.replace(/[^0-9]/ig,'');
        deg = deg ? parseInt(deg,10) : 0;
        this.refs.rotate.style.transform = "rotate("+(deg+360)+"deg)";
    }
    attention(id){
        axios.get('/api/author?id='+id);
    }
    render() {
        let { toRotate, attention } = this;
        let { dispatch } = this.props;
        let { author, page } = this.props.author;
        if(author){
            author = author.filter((item,index)=>{
                if(index >= page*5 && index < (page+1)*5){
                    return true;
                }else{
                    return false;
                }
            });
        }
        return (
            author
            ? <AuthorWrapper>
                <IconGlobal />
                <AuthorHeader onClick={() => { toRotate(); dispatch({ type: 'author/change', page }) }}>
                    <span>推荐作者</span>
                    <div><span className="iconfont" ref="rotate">&#xe70d;</span>换一批</div>
                </AuthorHeader>
                {
                    author.map((item,index)=>{
                    return <AuthorItem key={index}>
                        <AuthorFace face={item.face}></AuthorFace>
                        <AuthorIntroduction>
                            <header>{item.name}</header>
                            <p>写了{item.fontnumber}字 · {item.love}喜欢</p>
                        </AuthorIntroduction>
                        <div className="attention" onClick={() => { attention(index) }}><span>+</span>关注</div>
                    </AuthorItem>
                    })
                }
                <AuthorAll>查看全部</AuthorAll>
            </AuthorWrapper>
            : null
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