import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CardComp from './CardComp';

function PackageMaster() {
  const [post, setPost] = useState([]);
  const { catMasterId } = useParams();
  let navigate = useNavigate();
  sessionStorage.setItem("catid",catMasterId);
  useEffect(() => {
    fetch("http://localhost:8081/api/package_master/catmaster/" + catMasterId)
      .then(res => res.json())
      .then(result => {setPost(result); console.log(result);});
  }, []);

  return (

  //   <div>
  //   <div className="d2">
  //     {post.map(category => (
  //       <div className="card text-center" key={category.pkgName}>
  //         <div className="card-body">
  //           <h5 className="card-title">{category.pkgName}</h5>
  //           {/* <p className="card-text">{category.catImagePath}</p> */}
           
            
  //         </div>
  //         <Button onClick={() => navigate(`/bycostMasterId/${category.pkgId}`)}>View Details</Button>
  //       </div>
  //     ))}
  //   </div>
  // </div>
  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Package Name</th>
      <th scope="col">Departure Date</th>
      <th scope="col">Number of Days</th>
      <th scope="col">Go to Costs</th>
    </tr>
  </thead>
  <tbody>
  {post.map(dat => (
        <tr key={dat.pkgId}>
          <td>{dat.pkgName}</td>
          <td>{dat.dateMaster.map(da=>(
          <ul>
            <li>{da.departDate}</li>
          </ul>
          ))}</td>
          <td>{dat.dateMaster.map(da=>(
          <ul>
            <li>{da.numberOfDays}</li>
          </ul>
          ))}</td>
          <td><Button onClick={() => navigate(`/bycostMasterId/${dat.pkgId}`)}>Show Costs</Button></td>
        </tr>
    ))}
  </tbody>
</table>
   );
}

export default PackageMaster;