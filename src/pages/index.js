import React, { Component } from 'react';
import { connect } from 'dva'
import { IndexDiv, IndexWrapper, IndexLeft, IndexRight, IndexFooter, BackTop, BackTopTips } from './style'
import Banner from './../assets/imgs/banner.png'
import Hotlist from './Home/Hotlist'
import Recommend from './Home/Recommend'
import Author from './Home/Author'
import Link from './Home/Link'
import Copy from './Home/Copy'
import { IconGlobal } from './../assets/fonts/iconfont'

class index extends Component {
  constructor(){
    super();
    this.listener = this.listener.bind(this);
  }
  
  render() {
    let { dispatch } = this.props;
    let { topFlag, topTips } = this.props.top;
    let { nightFlag, songFont } = this.props.Aa;
    let fontstyle = songFont ? "song " : "hei ";
    let nightstyle = nightFlag ? "night" : "";
    return (
      <IndexDiv className={fontstyle + nightstyle}>
        <IndexWrapper>
          <IconGlobal />

          {/* 最新文章部分 */}
          <IndexLeft>
            <img src={Banner} alt="共抗疫情 武汉加油" className="banner" />
            <Hotlist />
          </IndexLeft>

          {/* 推荐/作者部分 */}
          <IndexRight>
            <Recommend />
            <Author />
          </IndexRight>

          {/* 底部信息部分 */}
          <IndexFooter>
            <Link />
            <Copy />
          </IndexFooter>

          {/* 返回顶部部分 */}
          {
            topFlag
              ? <BackTop className={fontstyle + nightstyle}
                onClick={() => { this.handdleTop(); dispatch({ type: 'top/out' }) }}
                onMouseOver={() => { dispatch({ type: 'top/over' }) }}
                onMouseOut={() => { dispatch({ type: 'top/out' }) }}
              ><span className="iconfont">&#xe670;</span></BackTop>
              : null
          }
          {
            topTips ? <BackTopTips>回到顶部</BackTopTips> : null
          }
        </IndexWrapper>
      </IndexDiv>
    );
  }

  // 调用监听事件
  componentDidMount(){
    this.bindEvent();
  }

  // 溢出监听滚动条
  componentWillUnmount(){
    window.removeEventListener("scroll", this.throttling(this.listener, 100));
  }

  // 添加监听滚动条
  bindEvent(){
    window.addEventListener("scroll", this.throttling(this.listener, 100));
  }

  // 节流
  throttling(event, interval){
    let previous = 0;
    return () => {
      let now =+ new Date();
      if((now - previous)>interval){
        event();
        previous = now;
      }
    }
  }

  // 监听改变topFlag
  listener(){
    let { dispatch } = this.props;
    let { topFlag } = this.props.top;
    if(document.documentElement.scrollTop>300){
      if(!topFlag){
        dispatch({ type: 'top/show' });
      }
    }else{
      if(topFlag){
        dispatch({ type: 'top/hide' });
      }
    }
  }

  // 缓动滚动到顶部
  handdleTop(){
    let nowposition = document.documentElement.scrollTop;
    let cut = 10;
    let goTop = setInterval(()=>{
      if(nowposition>cut){
        nowposition -= cut;
        window.scrollTo(0,nowposition);
      }else{
        window.scrollTo(0,0);
        clearInterval(goTop);
      }
    },1);
  }
}

const mapStateToprops = (state) => {
  return {
    Aa: state.Aa,
    top: state.top
  }
}

export default connect(mapStateToprops)(index);
