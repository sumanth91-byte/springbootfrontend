import React, { Component } from 'react'
import EmployeeService from './services/EmployeeService';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export function withRouter(Children){
    return(props)=>{
        const match={params:useParams()};
        return  <Children{...props} match={match}/>
    }
}

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // step 2
            id:this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: '',
            department:'',
            salary:'',
            gender:'',
            dob:''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then((res)=>{
            let employee =res.data;
            this.setState({firstName:employee.firstName,
            lastName:employee.lastName,
             emailId:employee.emailId,
             department:employee.department,
             salary:employee.salary,
             gender:employee.gender,
             dob:employee.dob

    });
});
    }
    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId,department :this.state.department,salary:this.state.salary,gender:this.state.gender,dob:this.state.dob};
        console.log('employee => ' + JSON.stringify(employee));

       
        // const conf= window.confirm("Do you want to update ?");

        if (this.state.firstName.length === 0) {
            alert("firstName field is Empty");
          }
         else if (this.state.lastName.length === 0) {
            alert("lastName field is Empty");
          }
          else if (this.state.emailId.length === 0  ) {
            alert("emailId field is Empty");
          }
          else if (this.state.department.length === 0) {
            alert("Department field is Empty");
          }
          else if (this.state.salary.length === 0) {
            alert("salary field is Empty");
          }
          else if (this.state.gender.length === 0) {
            alert("gender field is Empty");
          }
          else if (this.state.dob.length === 0) {
            alert("dob field is Empty");
          }

        else if(window.confirm("Do you want to save ?"))
        { EmployeeService.updateEmployee(employee,this.state.id)
            .then(res =>{
            <Link to='/employees'> this.props.history.push('/employees');</Link>
        
            
                window.location.replace("/employees");
                
            });

            }
    }
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    changeDepartmentHandler= (event) => {
        this.setState({department: event.target.value});
    }
    changeSalaryHandler= (event) => {
        this.setState({salary: event.target.value});
    }
    changeGenderHandler= (event) => {
        this.setState({gender: event.target.value});
    }
    changeDobHandler= (event) => {
        this.setState({dob: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }
    render(){
        return( <div style={{backgroundImage:`url('https://e0.pxfuel.com/wallpapers/369/837/desktop-wallpaper-youtube-background-2048x1152-banner.jpg')`, height: '900px'}}>
            
            
               <div className = "container">
                    <div className = "row">
                        <div className = " w-50 vh-50 justify-content-center align-items-center" style={{ margin: '5rem',backgroundColor:'' }}>
                            
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                          <h3 className="text-center" style={{fontFamily:'cursive',color:'white'}} >Update employee</h3>
                                        <label style={{fontFamily:'-moz-initial',color:'white'}}> First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control" 
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label style={{fontFamily:'-moz-initial',color:'white'}}> Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control" 
                                            value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label style={{fontFamily:'-moz-initial',color:'white'}}> Email Id: </label>
                                        <input placeholder="Email Address" name="emailId" className="form-control" 
                                            value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label style={{fontFamily:'-moz-initial',color:'white'}}> Department: </label>
                                        <select placeholder="Department" name="department" className="form-control" 
                                            value={this.state.department} required onChange={this.changeDepartmentHandler}>
                                                <option>None</option>
                                                <option>FullStackDeveloper</option>
                                                <option>Tester</option>
                                                <option>JavaDeveloper</option>
                                                <option>sales</option>

                                         </select>
                                    </div>
                                    <div className = "form-group">
                                        <label style={{fontFamily:'-moz-initial',color:'white'}}> Salary: </label>
                                        <input type="number" placeholder="salary" name="salary" className="form-control" 
                                            value={this.state.salary} onChange={this.changeSalaryHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label style={{fontFamily:'-moz-initial',color:'white'}}> Gender: </label>
                                        <select placeholder="Enter M or F" name="gender" className="form-control" 
                                            value={this.state.gender} onChange={this.changeGenderHandler}>
                                                 <option>None</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                        </select>
                                    </div>
                                    <div className = "form-group">
                                        <label style={{fontFamily:'-moz-initial',color:'white'}}> DateofBirth: </label>
                                        <input placeholder="dob" name="dob" className="form-control"  type='date'
                                            value={this.state.dob} onChange={this.changeDobHandler}/>
                                    </div>
                                    <div className = "form-group">

                                    <Link to='/employees'><button className="btn btn-success"  onClick={this.updateEmployee}>Save</button></Link>
                                    <Link to='/employees'> <button className="btn btn-danger"  style={{marginLeft: "10px"}}>Cancel</button></Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

               </div>
        </div>
    )
}
        
    }


export default withRouter(UpdateEmployeeComponent)
