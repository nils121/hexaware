import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

/**
 * Task 1: DONE
 * Get employee details from redux store 
 * and display in the following table.
 * (Redux store already contains list of 
 * employees shown in employee list page.)
 * 
 */

const EmployeeDetail = (props) => {
  console.log(props.empList);

  const emp = props.empList.filter( ( elem ) => {
     return elem.id == props.match.params.eid;
  });

  return (
    <div>
      &lt; <Link to="/">Go Back</Link>

      <div className="detail-card">
        <h3>Employee Detail</h3>
        <table>
          <tbody>
            <tr>
              <td>Employee id</td>
              <td>{props.match.params.eid}</td>
            </tr>
            <tr>
              <td>Employee name </td>
              <td>{emp[0].name}</td>
            </tr>
            <tr>
              <td>Salary </td>
              <td>{emp[0].salary}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    empList : state.employeeList
  }
};

export default connect(mapStateToProps, null)(EmployeeDetail);
