import * as ReactDOM from 'react-dom';
import * as React from 'react';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';


console.log(WEB_ENV);

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();

if (module.hot) {
    module.hot.accept();
}
