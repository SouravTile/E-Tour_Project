// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import CardComp from './CardComp';
// // import { NavLink } from 'react-bootstrap';
// import { Button } from 'react-bootstrap'; // Make sure to import the Button component
// export function SubCatName() {

//   let navigate = useNavigate();
//   const [posts, setposts] = useState([]); // Change state variable name to 'posts'
//   const { subCatId } = useParams();

//   useEffect(() => {
//     fetch("http://localhost:8081/api/categorymaster/bysubcatId/" + subCatId)
//       .then(res => res.json())
//       .then(result => {
//         setposts(result); // Update state variable
//       });
//   },[]);

//   console.log(posts);

//   return (
//     <div>
//       <div className="d2">
//         {posts.map(card => (
//           <div key={card.catMasterId}>
//             <CardComp title={card.catName} 
//               imgsrc={card.catImagePath} />
            
//             <Button onClick={()=>navigate(`/bypkgId/${card.catMasterId}`)}>View Details</Button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SubCatName;


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CardComp from './CardComp';
// import { NavLink } from 'react-bootstrap';
import { Button } from 'react-bootstrap'; // Make sure to import the Button component
export function SubCatName() {

  let navigate = useNavigate();
  const [posts, setposts] = useState([]); // Change state variable name to 'posts'
  const { subCatId } = useParams();

  useEffect(() => {
    fetch("http://localhost:8081/api/categorymaster/bysubcatId/" + subCatId)
      .then(res => res.json())
      .then(result => {
        setposts(result); // Update state variable
      });
  },[]);

  console.log(posts);

  return (
    <div>
      <div className="d2">
      {posts.map(category => (
        <div className="card text-center" key={category.catId}>
          <div className="card-body">
            <h5 className="card-title">{category.catName}</h5>
            {/* <p className="card-text">{category.catImagePath}</p> */}
              {/*<Button onClick={() => navigate(`/bysubcatId/${category}`)}>View Details</Button>*/}
              { <img src={category.catImagePath} alt="No Image Found" width="250" height="200" /> }
              
          </div>
          <Button onClick={()=>navigate(`/bypkgId/${category.catMasterId}`)}>View Details</Button>
        </div>
      ))}
      </div>
    </div>
  );
}

export default SubCatName;
