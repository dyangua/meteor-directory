import React from "react";
import { createContainer } from "react-meteor-data";
import { Meteor } from "meteor/meteor";
import { Employees } from "../../../imports/collections/employees";
import EmployeeDetail from "./employee_detail";

const PER_PAGE = 20;

class EmployeeList extends React.Component {
  state = {
    PER_PAGE
  };

  handleLoadMore = () => {
    const { PER_PAGE } = this.state;
    const PER_PAGE_VALUE = PER_PAGE + 20;
    Meteor.subscribe("employees", PER_PAGE_VALUE);

    this.setState({
      PER_PAGE: PER_PAGE_VALUE
    });
  };
  render() {
    const { employees } = this.props;

    return (
      <div className="container">
        <div className="row">
          {employees.map(employee => {
            return (
              <EmployeeDetail
                key={employee._id}
                name={employee.name}
                avatar={employee.avatar}
                phone={employee.phone}
                email={employee.email}
              />
            );
          })}
        </div>
        <button onClick={this.handleLoadMore} className="btn  btn-success ">
          Load More
        </button>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe("employees", PER_PAGE);
  return { employees: Employees.find({}).fetch() };
}, EmployeeList);
