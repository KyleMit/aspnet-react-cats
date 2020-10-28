import React, { useState, useEffect } from 'react';


export function Breeds() {
  const [loading, setLoading] = useState(true);
  const [breeds, setBreeds] = useState([]);

  useEffect(async () => {
    const response = await fetch('/api/breeds');
    const data = await response.json();

    setBreeds(data)
    setLoading(false);
  }, []);

  const renderBreedsTable = (breedList) => {
    return (
      <table className='table table-striped' aria-labelledby="tableLabel">
        <thead>
          <tr>
            <th>Name</th>
            <th>Origin</th>
          </tr>
        </thead>
        <tbody>
          {breedList.map(breed =>
            <tr key={breed.id}>
              <td>{breed.name}</td>
              <td>{breed.origin}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  const contents = loading
    ? <p><em>Loading...</em></p>
    : renderBreedsTable(breeds);


  return (
    <div>
      <h1 id="tableLabel" >Get Breeds</h1>
      <p>This component demonstrates fetching data from the server.</p>
      {contents}
    </div>
  );
}
