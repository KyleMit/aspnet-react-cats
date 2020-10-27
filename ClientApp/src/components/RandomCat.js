import React, { Component } from 'react';

export class RandomCat extends Component {
  static displayName = RandomCat.name;

  constructor(props) {
    super(props);
    this.state = { cat: {}, loading: true};

    this.getCat = this.getCat.bind(this);
  }

  componentDidMount() {
    this.getCat();
  }

  render() {
    return (
      <div>
        <h1>Random Cat</h1>

        <button className="btn btn-primary" onClick={this.getCat}>Lazy Load New Cat</button>
        <div>
          {!this.state.loading ? <img src={this.state.cat.url} alt="random cat picture"/> : ""}
        </div>
      </div>
    );
  }

  async getCat() {
    const response = await fetch('cat');
    const data = await response.json();
    this.setState({ cat: data, loading: false });
  }
}
