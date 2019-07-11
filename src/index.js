import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { BrowserRouter, Route } from 'react-router-dom';
import EmployeeList from './pages/EmployeeList';
import EmployeeDetail from './pages/EmployeeDetail';
import { Provider } from 'react-redux';
import store from './redux/store';
import {getEmployees} from "./api";
import actions from "./redux/actions";

getEmployees().then(emps => {
    // console.log('Employees fetched!', emps);
    store.dispatch({ type: actions.FETCH_EMPLOYEES, payload: emps });
});

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" exact component={EmployeeList} />
      <Route path="/detail/:eid" component={EmployeeDetail} />
    </BrowserRouter>
  </Provider>
);

render(<App />, document.getElementById('root'));
