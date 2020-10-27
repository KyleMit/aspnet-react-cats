import React, { Component } from 'react';

export class FetchBreeds extends Component {
  static displayName = FetchBreeds.name;

  constructor(props) {
    super(props);
    this.state = { breeds: [], loading: true };
  }

  componentDidMount() {
    this.populateBreedData();
  }

  static renderBreedsTable(breeds) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Name</th>
            <th>Origin</th>
          </tr>
        </thead>
        <tbody>
          {breeds.map(breed =>
            <tr key={breed.id}>
              <td>{breed.name}</td>
              <td>{breed.origin}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchBreeds.renderBreedsTable(this.state.breeds);

    return (
      <div>
        <h1 id="tabelLabel" >Get Breeds</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateBreedData() {
    const response = await fetch('breed');
    const data = await response.json();
    this.setState({ breeds: data, loading: false });
  }
}
