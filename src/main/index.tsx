import '../styles/app.scss';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import store from './store';

const root = document.getElementById('root');

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   root,
);
