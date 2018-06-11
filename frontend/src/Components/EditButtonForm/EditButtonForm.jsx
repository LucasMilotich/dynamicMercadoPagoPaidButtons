import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class EditButtonForm extends Component {

    /*buttonTitle
buttonQuantity
buttonPrice
productCode
productName
buttonLink*/
componentDidUpdate(prevProps){

    

}
    render() {
        <div>
            <TextField
                id="name"
                label="Name"
                className={classes.textField}
                value={this.props.button.buttonTitle}
                onChange={this.handleChange('name')}
                margin="normal"
            />
            <TextField
                id="name"
                label="Name"
                className={classes.textField}
                value={this.props.button.buttonQuantity}
                onChange={this.handleChange('name')}
                margin="normal"
            />
            <TextField
                id="name"
                label="Name"
                className={classes.textField}
                value={this.props.button.productCode}
                onChange={this.handleChange('name')}
                margin="normal"
            />
            <TextField
                id="name"
                label="Name"
                className={classes.textField}
                value={this.props.button.productName}
                onChange={this.handleChange('name')}
                margin="normal"
            />
            <TextField
                id="name"
                label="Name"
                className={classes.textField}
                value={this.props.button.buttonLink}
                onChange={this.handleChange('name')}
                margin="normal"
            />
         
        </div>
    }

}