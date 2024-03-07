import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
function PackageMaster() {
  const [tourDetails, setTourDetails] = useState([]);
  const { pkgId } = useParams();
  let navigate = useNavigate();
  const catid = sessionStorage.getItem("catid")
  useEffect(() => {
    fetch("http://localhost:8081/api/itinerary_master/ById/" + catid)
      .then(res => res.json())
      .then(result => setTourDetails(result));
      console.log();
  }, [pkgId]);
  return (
    // <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  minHeight: '100vh' }}>
    //   {tourDetails.map((category, index) => (
    //     <div key={index} style={{ width: '18rem', margin: '1rem' }}>
    //       <img
    //         src={"/"+category.imagePath}
    //         style={{ maxWidth: '100%' }}
    //       />
    //       <div>
    //         <p>{category.itineraryDetail}</p>
            
    //       </div>
    //     </div>
    //   ))}
    //   {/* <button onClick={() => navigate(`/bypassenger/${pkgId}`)}>View Details</button> */}
    //   <Button variant="primary" onClick={() =>  navigate(`/bypassenger/${pkgId}`)}>
    //                         Book My Tour
    //     </Button>
    // </div>
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
        <tr key={td.itineraryId}>
          <td>{td.imagePath}</td>
          <td>{td.itineraryDetail}</td>
          
          {/* <td><Button onClick={() => navigate(`/bycostMasterId/${dat.catMasterId}`)}>Show Costs</Button></td> */}
          {/* <td><Button onClick={()=>{navigate(`/bycostMasterId/${dat.departDate}`)}}>Show Costs</Button></td> */}
          {/* <td><Button onClick={() => handleButtonClick(dat)}>View Details</Button></td> */}
        </tr>
    ))}
  </tbody>
</table>
      {/* <button onClick={() => navigate(`/bypassenger/${pkgId}`)}>View Details</button> */}
      {/* <Button variant="primary" onClick={() =>  navigate(`/bypassenger/${catid}`)}>
                            Book My Tour
        </Button> */}
      <Button variant="primary" onClick={() =>   navigate(`/bypassenger/${pkgId}`)} className="submit-button">
                            Book My Tour
      </Button>
    </div>
  );
}

export default PackageMaster;

