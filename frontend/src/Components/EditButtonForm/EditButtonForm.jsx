import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class EditButtonForm extends Component {


componentDidUpdate(prevProps){

    

}
handleChange(data){

}
    render() {
        return (
        <div>
            <TextField
                id="buttonTitle"
                label="Titulo de botón"
                
                value={this.props.button != null ? this.props.button.buttonTitle : null }
                onChange={this.handleChange('name')}
                margin="normal"
            />
            <TextField
                id="buttonQuantity"
                label="Cantidad"
                value={this.props.button != null ? this.props.button.buttonQuantity : null }
                
                onChange={this.handleChange('name')}
                margin="normal"
            />
            <TextField
                id="productCode"
                label="Código de producto"
                value={this.props.button != null ? this.props.button.productCode : null }
                
                onChange={this.handleChange('name')}
                margin="normal"
            />
            <TextField
                id="productName"
                label="Nombre producto"
                value={this.props.button != null ? this.props.button.productName : null }
                
                onChange={this.handleChange('name')}
                margin="normal"
            />
            <TextField
                id="buttonLink"
                label="Link de botón"
                value={this.props.button != null ? this.props.button.buttonLink : null }
                
                onChange={this.handleChange('name')}
                margin="normal"
            />
               <Button >Guardar</Button>

        </div>
    )}

}
export default EditButtonForm;