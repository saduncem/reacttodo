import Router from './Router';
import { Provider } from 'react-redux';
import store from './Reducers/Store';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <Provider store={store as any}>
    <Router />
  </Provider>);
