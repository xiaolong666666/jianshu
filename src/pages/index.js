import React, { Component } from 'react';
import { connect } from 'dva'
import { IndexWrapper, IndexLeft, IndexRight, IndexFooter } from './style'
import Banner from './../assets/imgs/banner.png'
import Hotlist from './Home/Hotlist'
import Recommend from './Home/Recommend'
import Author from './Home/Author'
import Link from './Home/Link'
import Copy from './Home/Copy'

class index extends Component {
  render() {
    return (
      <IndexWrapper>
        <IndexLeft>
          <img src={Banner} alt="共抗疫情 武汉加油" className="banner" />
          <Hotlist />
        </IndexLeft>
        <IndexRight>
          <Recommend />
          <Author />
        </IndexRight>
        <IndexFooter>
          <Link />
          <Copy />
        </IndexFooter>
      </IndexWrapper>
    );
  }
  componentDidMount(){
    this.bindEvent();
  }
  bindEvent(){
    window.addEventListener("scroll", this.throttling(this.listener,200));
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
  listener(){
    if(document.documentElement.scrollTop>300){
      console.log(">300");
    }else{
      console.log("<300");
    }
  }
}

const mapStateToprops = (state) => {
  return {
    top: state.top
  }
}

export default connect(mapStateToprops)(index);
