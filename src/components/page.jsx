import React from 'react';
import Spin from './spinner'
import Table from 'react-bootstrap/Table'

import { connect } from 'react-redux';
import { actions } from './dataActions';
class Page extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    if (this.props.data) {
      return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Singer</th>
            <th>Song</th>
            <th>Album</th>
            <th>Ganre</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
        {this.props.data.map((e) => {
          return(
          <tr>
            <td>{e.artist}</td>
            <td>{e.track_name}</td>
            <td>{e.album}</td>
            <td>{e.tag}</td>
            <td>{e.year}</td>
          </tr>
        )})}
        </tbody>
      </Table>)
    } else {
      return <Spin />;
    }
  }
}

const mapStateToProps = state => ({
  data: state.data,
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(actions.getData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);
