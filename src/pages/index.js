import { IndexWrapper, IndexLeft, IndexRight } from './style'
import Banner from './../assets/imgs/banner.png'
import Hotlist from './Home/Hotlist'
import Recommend from './Home/Recommend'
import Author from './Home/Author'
export default function() {
  return (
    <div>
      <IndexWrapper>
        <IndexLeft>
          <img src={Banner} alt="共抗疫情 武汉加油" className="banner"/>
          <Hotlist />
        </IndexLeft>
        <IndexRight>
          <Recommend />
          <Author />
        </IndexRight>
      </IndexWrapper>
    </div>
  );
}
