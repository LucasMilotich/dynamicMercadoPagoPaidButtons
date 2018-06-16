import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class EditButtonForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: null
        }

    }

componentDidUpdate(prevProps){

    if (  this.props.button != null && prevProps.button != this.props.button){
        this.setState({data:this.props.button})
    } else {
        if (this.props.button == null && prevProps.button !== null){
            this.setState({data:null})
        }
    }
    
}

save(){
    var dis = this;
    let elementToUpdate = this.props.rows.some(row => {
        return dis.state.data.productCode == row.productCode
    })
    if (elementToUpdate) {
        
        this.update()
        

    } else {
        this.create()
        //save new row
    }


   
  
}
create(){
    
    fetch('http://localhost:8080/items', 
    {method:'POST',body: JSON.stringify(this.state.data),  headers: {"Content-Type": "application/json"}})
    .then(result => result.json().then( data => alert("Botón creado")))
    .catch(err => { console.error("Error creando el botón " + err.toString()) })
}

update(){
    fetch('http://localhost:8080/items/' + this.state.data.productCode,
    {method:'PUT',body: JSON.stringify(this.state.data),    headers: {"Content-Type": "application/json"}
}) 
    .then(result => result.json().then( data => alert("Botón actualizado")))
    .catch(err => { console.error("Hubo un error actualizando el botón  " + err.toString()) })
}

delete(){
    fetch('http://localhost:8080/items/' + this.state.data.productCode,
    {method:'DELETE',    headers: {"Content-Type": "application/json"}
}) 
    .then(result => result.json().then( data => alert("Botón borrado")))
    .catch(err => { console.error("Hubo un error borrando el botón " + err.toString()) })
}

handleChange = name => event =>{
    var data
    if (this.state.data == null){
        data = {}
    } else {
        data = this.state.data
    }
    switch(name){
        case "buttonTitle":
        
         data.buttonTitle= event.target.value 
        this.setState({data:data})
        break;
        case "buttonQuantity":
        
         data.buttonQuantity= Number(event.target.value) 
        this.setState({data:data})
        break;
        case "productCode" :
        
         data.productCode= event.target.value 
        this.setState({data:data})
        break;
        case "productName":
        
         data.productName= event.target.value 
        this.setState({data:data})
        break;
      
        case "buttonPrice":
        
         data.buttonPrice= Number(event.target.value) 
        this.setState({data:data})
        break;
        
        
    }
}
    render() {
        return (
        <div>
            Titulo de botón: <TextField
                id="buttonTitle"
                
                
                value={this.state.data !== null ? this.state.data.buttonTitle : "" }
                onChange={this.handleChange('buttonTitle')}
                margin="normal"
            />
            Cantidad: <TextField
                id="buttonQuantity"
                
                value={this.state.data != null ? this.state.data.buttonQuantity : "" }
                
                onChange={this.handleChange('buttonQuantity')}
                margin="normal"
            />
             Precio: <TextField
                id="buttonPrice"
                
                value={this.state.data != null ? this.state.data.buttonPrice : "" }
                
                onChange={this.handleChange('buttonPrice')}
                margin="normal"
            />
            Código de producto <TextField
                id="productCode"
                
                value={this.state.data != null ? this.state.data.productCode : "" }
                
                onChange={this.handleChange('productCode')}
                margin="normal"
            />
            Nombre de producto: <TextField
                id="productName"
                
                value={this.state.data != null ? this.state.data.productName : "" }
                
                onChange={this.handleChange('productName')}
                margin="normal"
            />
           
               <Button onClick={this.save.bind(this)}>Guardar </Button>
               <Button onClick={this.delete.bind(this)} >Borrar</Button>

        </div>
    )}

}
export default EditButtonForm;