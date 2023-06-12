import React, { Component } from 'react'
import EmployeeService from './services/EmployeeService';
import { Link } from 'react-router-dom';
import CreateEmployeeComponent from './CreateEmployeeComponent';
import axios from 'axios';


class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
         this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }
    

    deleteEmployee(id){
        const conf= window.confirm("Do you want to delete ?");

        if(conf){
            EmployeeService.deleteEmployee(id)
            .then( res => {
                this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
                window.location.reload();

            });
    
        // axios.delete('http://localhost:8090/api/v1/employees/'+id)
    
        // .then(res => {
    
        //   window.location.reload();
         
    
        // })
    
        // .catch(err => console.log(err));
    
    //     EmployeeService.deleteEmployee(id).then( res => {
    //         this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
    //     });
     }
    
}
    viewEmployee(id){
        <Link to={`/view-employee/${id}`}>this.props.history.push(`/view-employee/${id}`);</Link>
    }
    editEmployee(id){
        <Link to={`/update-employee/${id}`}>this.props.history.push(`/update-employee/${id}`);</Link>
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee(){

        this.props.history.push('/add-employee');
    }

    render() {
        return (
            
            <div style={{backgroundImage:`url('https://www.pixelstalk.net/wp-content/uploads/2016/08/Background-Full-HD-Images-For-Desktop.png')`, height: '900px'}}>
                <div>
                <Link to='/'> <button  class="btn btn-outline-warning btn-lg float-right" size="sm" style={{marginRight: "5px",size:'sm'}}>{"LOGOUT->"}</button></Link>
                </div>
                <div className='container'>
                    <h2 className="text-center" style={{color:"white"}}>Employees List</h2>
                    <div className = "row">
                        <Link to='/add-employee'><button className='btn btn-primary'>Add Employee</button></Link>                    
                    </div>
                    <br></br>
                    <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead class='thead-dark'>
                                <tr>
                                    <th> First Name</th>
                                    <th> Last Name</th>
                                    <th> Email Id</th>
                                    <th> Department</th>
                                    <th> Salary</th>
                                    <th> Gender</th>
                                    <th> Date Of Birth</th>
                                    <th style={{width:"200px",textAlign:"center"}}> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td style={{color:"white"}}> { employee.firstName} </td>   
                                             <td style={{color:"white"}}> {employee.lastName}</td>
                                             <td style={{color:"white"}}> {employee.emailId}</td>
                                             <td style={{color:"white"}}> {employee.department}</td>
                                             <td style={{color:"white"}}> {employee.salary}</td>
                                             <td style={{color:"white"}}> {employee.gender}</td>
                                             <td style={{color:"white"}}> {employee.dob}</td>
                                             <td>

                                          <Link to={`/update-employee/${employee.id}`}><button style={{marginLeft:"20px"}} onClick={ () => this.editEmployee(employee.id)} className="btn btn-success" >Edit</button></Link>

                                           <Link to={'/employees'}><button style={{marginLeft:"20px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button></Link>

                                            {/* <Link to={`/view-employee/${employee.id}`}><button style={{marginLeft:"20px"}}onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View</button></Link> */}

                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListEmployeeComponent
