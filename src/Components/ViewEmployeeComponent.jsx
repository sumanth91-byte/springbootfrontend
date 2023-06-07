import React, { Component } from 'react'
import EmployeeService from './services/EmployeeService';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


export function withRouter(Children){
    return(props)=>{
        const match={params:useParams()};
        return  <Children{...props} match={match}/>
    }
}
class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            
            <div  style={{ backgroundImage:`url('https://www.pixelstalk.net/wp-content/uploads/2016/08/Background-Full-HD-Images-Free-Download.png')` , height:'800px'}}>
                <br></br>
                <div>
                <Link to='/employees'> <button className="btn btn-danger" size="xl" style={{marginLeft: "10px",size:'xl'}}>{"<<Back"}</button></Link>
                </div>
                <div className = "  justify-content-center align-items-center" style={{ margin: '8rem'}}>
                <div className = "card col-md-6 onset-md-5" >
                    <h3 className = "text-center" style={{fontFamily:'cursive',color:'orange',fontSize:30}}> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label style={{fontFamily:'cursive',color:'orange'}}> Employee First Name: </label>
                            <div> { this.state.employee.firstName }</div>
                        </div>
                        <div className = "row">
                            <label style={{fontFamily:'cursive',color:'orange'}}> Employee Last Name: </label>
                            <div> { this.state.employee.lastName }</div>
                        </div>
                        <div className = "row">
                            <label style={{fontFamily:'cursive',color:'orange'}}> Employee Email ID: </label>
                            <div> { this.state.employee.emailId }</div>
                        </div>
                        <div className = "row">
                            <label style={{fontFamily:'cursive',color:'orange'}}> Employee Department: </label>
                            <div> { this.state.employee.department }</div>
                        </div>
                        <div className = "row">
                            <label style={{fontFamily:'cursive',color:'orange'}}> Employee Salary: </label>
                            <div> { this.state.employee.salary }</div>
                        </div>
                        <div className = "row">
                            <label style={{fontFamily:'cursive',color:'orange'}}> Employee Gender: </label>
                            <div> { this.state.employee.gender }</div>
                        </div>
                        <div className = "row">
                            <label style={{fontFamily:'cursive',color:'orange'}}> Employee DateOfBirth: </label>
                            <div> { this.state.employee.dob }</div>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default withRouter(ViewEmployeeComponent);