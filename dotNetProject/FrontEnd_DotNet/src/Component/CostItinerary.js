import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
function PackageMaster() {
  const [tourDetails, setTourDetails] = useState([]);
  const { catid } = useParams();
  const pkgId = sessionStorage.getItem("pkgid");
  let navigate = useNavigate();
  useEffect(() => {
    fetch("https://localhost:7003/bycat/" + catid)
      .then(res => res.json())
      .then(result => setTourDetails(result));
      console.log();
  }, []);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  minHeight: '100vh' }}>
  <h1 align="center">Itinerary Details</h1>
  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Itinerary DayNo</th>
      <th scope="col">Itinerary Detail</th>
    </tr>
  </thead>
  <tbody>
  {tourDetails.map(td => (
        <tr key={td.itrId}>
          <td>{td.dayNo}</td>
          <td>{td.itrDetails}</td>
          
          {/* <td><Button onClick={() => navigate(`/bycostMasterId/${dat.catMasterId}`)}>Show Costs</Button></td> */}
          {/* <td><Button onClick={()=>{navigate(`/bycostMasterId/${dat.departDate}`)}}>Show Costs</Button></td> */}
          {/* <td><Button onClick={() => handleButtonClick(dat)}>View Details</Button></td> */}
        </tr>
    ))}
  </tbody>
</table>
      {/* <button onClick={() => navigate(`/bypassenger/${pkgId}`)}>View Details</button> */}
      {/* <Button variant="primary" onClick={() =>  navigate(`/bypassenger/${catid}`)}> */}
      <Button variant="primary" onClick={() => navigate(`/login/${pkgId}`)}>
                            Book My Tour
        </Button>
    </div>
  );
}

export default PackageMaster;

