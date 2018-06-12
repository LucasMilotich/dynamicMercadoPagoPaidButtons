import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import EditButtonForm from '../EditButtonForm/EditButtonForm';


const styles = theme => ({
  root: {
    // width: '100%',
    // marginTop: theme.spacing.unit * 3,
    // overflowX: 'auto',
  },
  table: {
    // minWidth: 700,
  },
});



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isSelected: false,
      
      selectedRow: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/links').then(result => result.json()).then(rows => {
      rows.forEach(data => { data.selected = false })
      this.setState({ data: rows })
    }).catch(err => { console.error(err.toString()) })

  }



  handleClick = (event, id) => {
    let element = this.state.data.filter(row => { return row.productCode === id })[0]

    this.state.data.forEach(data => {
      if (data.productCode != id) {
        data.selected = false
      }

    })



    element.selected = !element.selected
    if ( element.selected ){
      this.setState({
        isSelected: !element.selected,
        
        selectedRow: element
      })
    }else {
      this.setState({
        isSelected: !element.selected,
        
        selectedRow: null
      })
    }
   



  }

  render() {
    return (
      <Paper className={styles.root}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell>Seleccionar</TableCell>
              <TableCell string>Title</TableCell>
              <TableCell numeric>Quantity</TableCell>
              <TableCell numeric>Price</TableCell>
              <TableCell numeric>Product code</TableCell>
              <TableCell numeric>Product name</TableCell>
              <TableCell numeric>Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.data.map(n => {
              return (
                <TableRow key={n.productCode}
                  hover
                  onClick={event => this.handleClick(event, n.productCode)}
                  role="checkbox"
                  aria-checked={n.selected}
                  tabIndex={-1}
                  key={n.productCode}
                  selected={n.selected}>
                  <TableCell padding="checkbox">
                    <Checkbox checked={n.selected} />
                  </TableCell>
                  <TableCell numeric>{n.buttonTitle}</TableCell>
                  <TableCell numeric>{n.buttonQuantity}</TableCell>
                  <TableCell numeric>{n.buttonPrice}</TableCell>
                  <TableCell numeric>{n.productCode}</TableCell>
                  <TableCell numeric>{n.productName}</TableCell>
                  <TableCell numeric>{n.buttonLink}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        <EditButtonForm button={this.state.selectedRow} rows={this.state.data} />
      </Paper>
    );
  }
}

export default Home;