import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { json } from 'react-router-dom';


function PackageMaster() {
  const [post, setPost] = useState({});
  const [date, setdate] = useState([]);

  const { catMasterId } = useParams();
  sessionStorage.setItem("catid", catMasterId);
  let navigate = useNavigate();
  useEffect(() => {
    fetch("https://localhost:7003/api/Category/" + catMasterId)
      .then(res => res.json())
      .then(result => {setPost(result); console.log(result);});
  }, []);

  useEffect(() => {
    fetch("https://localhost:7003/date/bycatId/" + catMasterId)
      .then(res => res.json())
      .then(result => {setdate(result); console.log(result);});
  }, []);
  

//   useEffect(() => {
    
//         console.log("please yaar");
//         console.log(post.catMasterId);
//         console.log(date.departureId);
//         fetch(`https://localhost:7003/package/catdat/${post.catMasterId}/${date.departureId}`)
//             .then(res => res.json())
//             .then(result => {
//               setpkg(result);
//               console.log("myMan");
//               console.log(result);
//               console.log(post.catMasterId);
//               console.log(date.departureId);
//               sessionStorage.setItem("getsessionid",pkg.pkgId);
//             })
//             .catch(error => console.error("Error fetching data:", error));
    
// }, []);

// useEffect(() => {
//   if (post && date) {
//     console.log("please yaar");
//       console.log(post);
//       console.log(date[0]);
//     fetch(`https://localhost:7003/package/catdat/${post.catMasterId}/${date[0].departureId}`)
//       .then(res => res.json())
//       .then(result => {
//         setpkg(result);
//         console.log("myMan");
//         console.log(result);
//         sessionStorage.setItem("getsessionid",pkg.pkgId);
//       })
//       .catch(error => console.error("Error fetching data:", error));
//   }
// }, [post.catMasterId, date[0].departureId]);

const handleButtonClick = (dat) => {
  console.log(post);
  console.log(dat);
  sessionStorage.setItem("did",dat.departureId);// storing departureId
  if (post && dat.departureId) {
    fetch(`https://localhost:7003/package/catdat/${post.catMasterId}/${dat.departureId}`)
      .then(res => res.json())
      .then(result => {
        // Store the package ID in session storage
        sessionStorage.setItem("pkgid", result.pkgId);
        // navigate(`/bycostMasterId/${dat.departDate}`);
        
        sessionStorage.setItem("departdate",dat.departDate);
        navigate(`/bycostMasterId/${catMasterId}`);
      })
      .catch(error => console.error("Error fetching data:", error));
    }
};


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
  <div>
  <h1 align="center">Packages</h1>
  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Category Name</th>
      <th scope="col">Departure Date</th>
      <th scope="col">Number of Days</th>
      <th scope="col">Go to Costs</th>
    </tr>
  </thead>
  <tbody>
  {date.map(dat => (
        <tr key={dat.departureId}>
          <td>{post.catName}</td>
          <td>{dat.departDate.split('T')[0]}</td>
          <td>{dat.noOfDays}</td>
          {/* <td><Button onClick={() => navigate(`/bycostMasterId/${dat.catMasterId}`)}>Show Costs</Button></td> */}
          {/* <td><Button onClick={()=>{navigate(`/bycostMasterId/${dat.departDate}`)}}>Show Costs</Button></td> */}
          <td><Button onClick={() => handleButtonClick(dat)}>View Details</Button></td>
        </tr>
    ))}
  </tbody>
</table>
</div>
   );
}

export default PackageMaster;