import React, { Component, useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, Label, Input, FormGroup, Form } from 'reactstrap';

const [open, setOpen] = useState(false);
const [focusAfterClose, setFocusAfterClose] = useState(true);

const toggle = () => setOpen(!open);
const handleSelectChange = ({target: { value }}) => {
    setFocusAfterClose(JSON.parse(value));
}
export default class Edit extends Component {
  
  //Constructor
  constructor(props){
    super(props);
    this.state = { }
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

  render () {
    return (
      <div>
          <Form inline onSubmit={(e) => e.preventDefault()}>
              <FormGroup>
                  <Label for="focusAfterClose">Focus After Close</Label>
                  <Input className="mx-2" type="select" id="focusAfterClose" onChange={handleSelectChange}>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                  </Input>
              </FormGroup>
              <Button color="danger" onClick={toggle}>Open</Button>
          </Form>
          <Modal returnFocusAfterClose={focusAfterClose} isOpen={open}>
              <ModalBody>
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
                  </Form>
              </ModalBody>
              <ModalFooter>
                  <Button color="primary" onClick={toggle}>Close</Button>
              </ModalFooter>
          </Modal>
      </div>
  )
  }

}