import React from 'react';
import Api from './api'

class Page extends React.Component {
  constructor() {
    super();
    this.state = { data: null };
    this.GetData = this.GetData.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount START");
    this.GetData();
    console.log("componentDidMount END");
  }

  async GetData() {
    console.log("GetData START");
    const data = await Api();
    this.setState({
      data: data
    });
    console.log("GetData END");
  }

  render() {
    if (this.state.data) {
      return <div>MyPage</div>;
    } else {
      return null;
    }
    //console.log("RENDER", this.state.data);
  }
}


export default Page;
