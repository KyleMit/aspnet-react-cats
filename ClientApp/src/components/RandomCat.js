import React, { useState, useEffect } from 'react';

export function RandomCat() {
  const [loading, setLoading] = useState(true);
  const [cat, setCat] = useState({});

  const getCat = async () => {
    const response = await fetch('/api/cat');
    const data = await response.json();
    debugger;
    setCat(data)
    setLoading(false);
  }

  // fire on launch as well
  useEffect(() => { getCat() }, {});

  return (
    <div>
      <h1>Random Cat</h1>

      <button className="btn btn-primary" onClick={getCat}>Lazy Load New Cat</button>
      <div>
        {!loading ? <img src={cat.url} alt="random cat picture"/> : ""}
      </div>
    </div>
  );
}
