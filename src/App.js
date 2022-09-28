import logo from './logo.svg';
import './App.css';
import classnames from 'classnames';
import OrderSummary from './components/OrderSummary';

import PatternBackgroundDesktop from './images/pattern-background-desktop.svg';
import PatternBackgroundMobile from './images/pattern-background-mobile.svg';

function App() {
  let width = window.innerWidth;
  return (
    <div className={classnames(`App flex h-screen w-screen ${(width > 800) ? "bg-bg-desktop" : "bg-bg-desktop"}`)}>
      <OrderSummary />
    </div>
  );
}

export default App;
