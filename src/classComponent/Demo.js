import React, { Component } from 'react'
import Modal from 'react-modal'
export default class Demo extends Component {
  constructor(){
    super();{
      this.state={
        infoList:[],
        name:"",
        age:"",
        phone:"",
        selectedPerson:null,
        isModalOpen:false,
        edit:null
      }
    }
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  handleSubmit=(e)=>{
    e.preventDefault()
    const {name, age, infoList}=this.state
    const addnew={name,age}
    if(this.edit!==null){
      const updated=[...infoList]
      updated[this.edit]=addnew
      this.edit=null
      this.setState({name:'',age:'',infoList:updated})
    }
    else{
    const updated=[...this.state.infoList, addnew]
    this.setState({name:'', age:'', infoList:updated})
    console.log(infoList)
  }
  }
  handleDelete=(person)=>{
    const {infoList}=this.state
    const delData=infoList.filter((ele)=>ele!==person)
    this.setState({infoList:delData})
    console.log(infoList)
  }
  handleEdit=(person,index)=>{
    this.edit=index
    this.setState({name:person.name, age:person.age})
  }
  handleOpenModal=(person)=>{
    this.setState({selectedPerson:person, isModalOpen:true})
  }
  handleCloseModal=()=>{
    this.setState({isModalOpen:false})
  }
  componentDidUpdate(){console.log("componentDidUpdate")}
  render() {
    const {name, age, infoList, selectedPerson, isModalOpen}=this.state
    return (
      <div>
        <h3>Add Information</h3>
        <form onSubmit={this.handleSubmit}>
          <lable>Name:<input type='text' name='name' value={name} onChange={this.handleChange}></input></lable>
          <br/>
          <lable>Age:<input type='text' name='age' value={age} onChange={this.handleChange}></input></lable>
          <br/>
          <button type='submit'>Add</button>
        </form>
        <br/><br/>
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {infoList.map((person,index)=>(
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td><button onClick={()=>this.handleEdit(person,index)}>Edit</button></td>
              <td><button onClick={()=>this.handleDelete(person)}>Delete</button></td>
              <td><button onClick={()=>this.handleOpenModal(person,index)}>View</button></td>
            </tr>
          ))}
        </table>
        <Modal isOpen={isModalOpen}>
            <h3>Detail</h3>
            {selectedPerson&&(
              <div>
                <p>Name:{selectedPerson.name}</p>
                <p>Age:{selectedPerson.age}</p>
              </div>
            )}
            <button onClick={this.handleCloseModal}>Close</button>
        </Modal>
      </div>
    )
  }
}
