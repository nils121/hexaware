import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

/**
 * Task 2: DONE
 * 1. Open console of stackblitz editor 
 * (at bottom of right side)
 * 2. Visit employee detail page by clicking any employee name
 * 3. go back to employee list page
 * 4. Repeat steps 2 and 3 few times
 * You will see "Employees fetched!" message in
 * console multiple times, means this component make
 * API call for each time we visit it.
 * 
 * Provide your solution to cache the fetched result in redux store. (so that only first request is required to fetch employees and later on cached data can be used from redux store.)
 * (Bonus point if "Refresh list" button will fetch data directly from API instead cached one.)
 */

class EmployeeList extends React.Component {
  render() {
    const { employeeList } = this.props;

    return (
      <div>
        <h3>Employee list </h3>
        <button className="btn-refresh" disabled>Refresh list</button>

        {
          employeeList.map((emp, index) => (
            <Link to={`/detail/${emp.id}`} key={index} className="list-card">
              {emp.name}
            </Link>
          ))
        }
      </div>
    )
  }
}

export default connect(
  (state) => ({ employeeList: state.employeeList })
)(EmployeeList);
