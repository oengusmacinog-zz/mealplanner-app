import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import './css/style.css';

const Root = () => {
  return (
    <Fabric>
      <App />
    </Fabric>
  )
}

render(<Root/>, document.querySelector('#main'));
