import React, { Component } from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import CreateEmployeeComponent from '../components/CreateEmployeeComponent';
import EmployeeComponent from '../components/EmployeeComponent';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponent';
import ViewEmployeeComponent from '../components/ViewEmployeeComponent';

class EmployeeRouter extends Component {
    render() {
        return (
            <div>
                <Router>
                    <HeaderComponent />
                    <div className="container">
                        <Switch>
                            <Route path="/" exact component={EmployeeComponent}></Route>
                            <Route path="/employees" component={EmployeeComponent}></Route>
                            //reuse exising component to update data
                            <Route path="/add-employee/:id" component={CreateEmployeeComponent}></Route>
                            <Route path="/view-employee/:id" component={ViewEmployeeComponent}></Route>
                            {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                        </Switch>
                    </div>
                    <FooterComponent />
                </Router>
            </div>
        );
    }
}

export default EmployeeRouter;