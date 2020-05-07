import './style.js';
import Header from './header'

function BasicLayout(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}

export default BasicLayout;
