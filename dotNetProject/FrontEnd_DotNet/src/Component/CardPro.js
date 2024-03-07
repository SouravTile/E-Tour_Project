
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function CardPro() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch category data from the API when the component mounts
    fetch("https://localhost:7003/bycatId/Main")
      .then(res => res.json())
      .then(result => setPosts(result))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const handleButtonClick = async (category) => {
    try {
      // Check the flag value
      console.log(category.flag);
      if (category.flag == "N") {
        // Redirect to /bycatId/:categoryId if flag is 'Y'
        console.log("here ");
        console.log(category.catId);
        navigate(`/bycatId/${category.catId}`);
      } else {
        // Redirect to /bypkgId/:categoryId if flag is not 'Y'
        navigate(`/bypkgId/${category.catMasterId}`);
      }
    } catch (error) {
      console.error("Error fetching flag:", error);
    }
  };

  return (
    <div>
      <div className="d2">
        {posts.map(category => (
          <div className="card text-center" key={category.catMasterId}>
            <div className="card-body">
              <h5 className="card-title">{category.catName}</h5>
              { <img src={category.catImagePath} alt="No Image Found" width="250" height="200" /> }
              {/* If you have a category ID, you can pass it to handleButtonClick */}
              {/* <Button onClick={() => handleButtonClick(category)}>View Details</Button> */}
            </div>
            <Button onClick={() => handleButtonClick(category)}>View Details</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardPro;
