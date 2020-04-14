import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
            <Header></Header>
            <Form>
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input type="text" onChange={this.onchangeFN.bind(this)} placeholder="First Name" />
              </FormGroup>
              <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input type="text" onChange={this.onchangeLN.bind(this)} placeholder="Last Name" />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="text" onChange={this.onchangeEM.bind(this)} placeholder="Email" />
              </FormGroup>
              <FormGroup>
                <Label for="phone">Phone</Label>
                <Input type="text" onChange={this.onchangePH.bind(this)} placeholder="Phone" />
              </FormGroup>
              <Button className="btn btn-primary" 
                        onClick={()=> this.dataUpload()} 
                        variant="primary">Upload Data</Button>
            </Form>
          </React.Fragment>
        )
      }
}