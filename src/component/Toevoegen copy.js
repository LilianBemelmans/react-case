import React, {Component} from 'react';

import Header from './Header';
import ToevoegenKaart from './ToevoegenKaart';

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
    dataUpload(){
      var url= "https://api.dev-master.ninja/reactjs/smoelenboek/post"
      var body = JSON.stringify(this.state.data);
      fetch(url, {method: 'POST', headers:{'Content-Type': 'application/json'}, body })
        .then(response => response.json())
        .then(data => { console.log(data); })
        .catch( error => {console.log(error);});
      alert("Data has been uploaded")
    }    

    //Event Handlers
    onchangeFN(event){
      this.state.data.firstname = event.target.value
      this.setState({data: this.state.data})
    }

    onchangeLN(event){
      this.state.data.lastname = event.target.value
      this.setState({data: this.state.data})
    }

    onchangeEM(event){
      this.state.data.email = event.target.value
      this.setState({data: this.state.data})
    }
    onchangePH(event){
      this.state.data.phone = event.target.value
      this.setState({data: this.state.data})
    }

    onchangeIMG(event){
    var afbeelding = event.target.files[0];
    var reader = new FileReader();
    reader.onloadend = () => {
      var B64 = reader.result;
      var info = this.state.data; 
      info.img = B64
      this.setState({data: info})
    };

    reader.readAsDataURL(afbeelding)
    }
       
    fileuploadClick(){
      this.refs.uploader.click();
      }

    //Render
    render(){
        
        return(
          <React.Fragment>
     
          <div className="container-fluid">
              <Header></Header>}
    
              <div style={{padding: 50}} className="row">
                <h1 style={{ marginLeft: 327}}> Add Person </h1>
              </div>

              <div className="row">

              <input type="file" id="file" ref="uploader" onChange={this.onchangeIMG.bind(this)} style={{display:"none"}} /> 

                <div onClick={ ()=>this.fileuploadClick()} className="col-md-6">
                  <ToevoegenKaart  data={this.state.data}> </ToevoegenKaart></div>
                
                <div className="col-md-6" style={{marginTop: 5}}>
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

                <div className="row">
                <button className="btn btn-primary" 
                        onClick={()=> this.dataUpload()} 
                        variant="primary">Upload Data
                </button>
              
              </div>
         
              </div>

          </React.Fragment>
        )
      }
}