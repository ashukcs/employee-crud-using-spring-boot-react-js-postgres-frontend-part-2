import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''

        }
    }

    componentDidMount(event){
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            let employee = res.data;
            this.setState({
                firstName: employee.firstName,
                lastName: employee.lastName,
                emailId: employee.emailId
            })            
        })
    }
    cancel(){
        this.props.history.push('/employees');
    }
    render() {
        return (
            <div>
                <div className = "container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <h3 className="text-center">View Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group" style={{marginTop: '20px'}}>
                                        <label>First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler} readOnly></input>
                                    </div>
                                    
                                    <div className="form-group" style={{marginTop: '20px'}}>
                                        <label>Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                        value={this.state.lastName} onChange={this.changeLastNameHandler} readOnly></input>
                                    </div>
                                    
                                    <div className="form-group" style={{marginTop: '20px'}}>
                                        <label>Email Address: </label>
                                        <input placeholder="Email Address" name="emailId" className="form-control"
                                        value={this.state.emailId} onChange={this.changeEmailHandler} readOnly></input>
                                    </div>
                                    <div style={{marginTop: '20px', float: 'right'}}>
                                        {/* <button className="btn btn-success" onClick={this.saveEmployee}>Save</button> */}
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: '10px'}}>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;