import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import EditButtonForm from '../EditButtonForm';


const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selected : null,
            selectedRow : null
        }
      }

      componentDidMount(){
          fetch('localhost:3000/links').then(result => result.json()).then(rows => this.setState({data : rows})).catch(err => {console.error(err.toString())})
      }
     
      isSelected = id => this.state.selected != null;

      handleClick = (event, id) => {
          this.setState({
              selected : id,
              selectedRow : this.state.data[id]
          })
      }

    render() {
      return (
        <Paper className={styles.root}>
        <Table className={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell numeric>Quantity</TableCell>
            <TableCell numeric>Price</TableCell>
            <TableCell numeric>Link</TableCell>
            <TableCell numeric>Product code</TableCell>
            <TableCell numeric>Product name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.data.map(n => {
            return (
              <TableRow key={n.id}
              hover
              onClick={event => this.handleClick(event, n.id)}
              role="checkbox"
              aria-checked={this.state.selected}
              tabIndex={-1}
              key={n.id}
              selected={this.state.selected}>
              <TableCell padding="checkbox">
                      <Checkbox checked={this.state.selected} />
                    </TableCell>
                <TableCell component="th" scope="row">
                  {n.name}
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

      <EditButtonForm button={this.state.selectedRow} />
    </Paper>
      );
    }
  }
  
  export default Home;