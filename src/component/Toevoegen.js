import React, {Component} from 'react';

import Header from  './Header';


export default class Toevoegen extends Component {
 
  //Constructor
  constructor(props){
    super(props);
    this.state = {
      data: { id: "",
              firstname: "",
              lastname: "",
              email: "",
              phone: "",
              date_of_birth: "09-09-1974",
              img: "",
              } }
  }
  
  //API
  dataSaved(){
      var url= "https://api.dev-master.ninja/reactjs/smoelenboek/post"
      var body = JSON.stringify(this.state.data);
      fetch(url, {method: 'POST', headers:{'Content-Type': 'application/json'}, body })
      .then(response => response.json())
      .then(data => { console.log(data); })
      .catch( error => {console.log(error);});
      alert("Data has been saved")
  } 

  //Event Handler
  onChangeFN(event) {
    var data = this.state.data; 
    data.firstname = event.target.value
    this.setState({data: data})
  }
  onChangeLN(event) {
    var data = this.state.data; 
    data.lastname = event.target.value
    this.setState({data: data})    
  }
  onChangeEM(event) {
    var data = this.state.data; 
    data.email = event.target.value
    this.setState({data: data})    
  }
  onChangePH(event) {
    var data = this.state.data; 
    data.phone = event.target.value
    this.setState({data: data})    
  }
  saveProfile() {
    this.refs.uploader.click();
  }

    //Render
    render(){
        return(
          <React.Fragment>
              <div className="container-fluid"> 
                <Header></Header>

                <div className="row">
                    <div onClick={ ()=>this.saveProfile()} className="col-md-6">
                        <div className="col-md-6">
                            <label style={{width:100}}> First name:  &nbsp; </label>
                            <input type="text" style={{width: 500}} onChange={this.onchangeFN.bind(this)} placeholder={"First Name"}/><br></br>
                        
                            <label style={{width:100}}> Last name:  &nbsp; </label>
                            <input type="text" style={{width: 500}} onChange={this.onchangeLN.bind(this)} placeholder={"Last Name"}/> <br></br>
                            
                            <label style={{width:100}}> E-mail:  &nbsp; </label>
                            <input type="text" style={{width: 500}} onChange={this.onchangeEM.bind(this)}  placeholder={"E-Mail"}/><br></br>
                            
                            <label style={{width:100}}> Phone:  &nbsp; </label>
                            <input style={{width: 500}} type="text" onChange={this.onchangePH.bind(this)} placeholder={"Phone"}/><br></br>
                        </div>
                    </div>         
              </div>
            </div>
          </React.Fragment>
        )
      }
}