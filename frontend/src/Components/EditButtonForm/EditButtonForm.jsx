import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class EditButtonForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: props.button
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

    let elementToUpdate = this.props.rows.some(row => {
        return this.state.data.productCode == row.productCode
    })
    if (elementToUpdate != null) {
        
        this.update()
        alert(JSON.stringify(this.state.data))

    } else {
        this.create()
        //save new row
    }


   
  
}
create(){
    fetch('http://localhost:8080/items', 
    {method:'POST',body: this.state.data})
    .then(result => result.json().then( data => alert(JSON.stringify(data))))
    .catch(err => { console.error(err.toString()) })
}

update(){
    fetch('http://localhost:8080/items/' + this.state.data.productCode,
    {method:'PUT',body: this.state.data})
    .then(result => result.json().then( data => alert(JSON.stringify(data))))
    .catch(err => { console.error(err.toString()) })
}

delete(){}

handleChange = name => event =>{
    switch(name){
        case "buttonTitle":
        var data = this.state.data
         data.buttonTitle= event.target.value 
        this.setState({data:data})
        break;
        case "buttonQuantity":
        var data = this.state.data
         data.buttonQuantity= event.target.value 
        this.setState({data:data})
        break;
        case "productCode" :
        var data = this.state.data
         data.productCode= event.target.value 
        this.setState({data:data})
        break;
        case "productName":
        var data = this.state.data
         data.productName= event.target.value 
        this.setState({data:data})
        break;
        case "buttonLink":
        var data = this.state.data
         data.buttonLink= event.target.value 
        this.setState({data:data})
        break;

        
        
    }
}
    render() {
        return (
        <div>
            Titulo de botón: <TextField
                id="buttonTitle"
                
                
                value={this.props.button !== null ? this.props.button.buttonTitle : "" }
                onChange={this.handleChange('buttonTitle')}
                margin="normal"
            />
            Cantidad: <TextField
                id="buttonQuantity"
                
                value={this.props.button != null ? this.props.button.buttonQuantity : "" }
                
                onChange={this.handleChange('buttonQuantity')}
                margin="normal"
            />
            Código de producto <TextField
                id="productCode"
                
                value={this.props.button != null ? this.props.button.productCode : "" }
                
                onChange={this.handleChange('productCode')}
                margin="normal"
            />
            Nombre ce producto: <TextField
                id="productName"
                
                value={this.props.button != null ? this.props.button.productName : "" }
                
                onChange={this.handleChange('productName')}
                margin="normal"
            />
            Link de botón: <TextField
                id="buttonLink"
                
                value={this.props.button != null ? this.props.button.buttonLink : "" }
                
                onChange={this.handleChange('buttonLink')}
                margin="normal"
            />
               <Button onClick={this.save.bind(this)}>Guardar </Button>
               <Button >Borrar</Button>

        </div>
    )}

}
export default EditButtonForm;