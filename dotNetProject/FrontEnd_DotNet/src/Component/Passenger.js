import React, { useState, useEffect } from 'react';
import { Form, Button, Col, Table } from 'react-bootstrap'; // Import Form.Check component and Col
import './PassengerDetail.css';
import { useNavigate, useParams } from 'react-router-dom';



// function PassengerDetail() {
//   const [inputValue, setInputValue] = useState('');
//   const [datevalue,setdatevalue] = useState('');
//   const [selectedOption, setSelectedOption] = useState();
//   const { pkgId } = useParams();
// //   const custid = localStorage.getItem("uid");
// //   console.log("data: ", JSON.parse(custid));


//   const navigate = useNavigate();

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleDateChange= (event) => {
//     setdatevalue(event.target.value);
//   }

//   const handleRadioChange = (event) => {
//     setSelectedOption(event.target.value);
//   };
//   console.log(selectedOption)
//   // console.log(datevalue,inputValue)

//   const [cost,setCost]=useState([]);

//      const getCost = () => {
//       fetch("http://localhost:8080/api/cost_master/ById/"+ pkgId)
//         .then(response => response.json())
//         .then(data => {
//           setCost(data[0]); // Assuming the fetched data is a single object
//           setSelectedOption(data?.key || (cost.singlePersonCost) ); // Set default selected option
//         })
//         .catch(error => {
//           console.error('Error fetching data:', error);
//         });
//     };

//      useEffect(()=>{
//         getCost();
//         console.log(cost);
//      },[])
//      const x = cost[selectedOption];
//      console.log(x);
//      //posting data into database
//      const url = "http://localhost:8080/api/passenger_master";
//      const data = {
//       passengerName: inputValue,
//       birthdate: datevalue,
//       passengerType:selectedOption,
//       passengerAmount:x,
//       custId:JSON.parse(sessionStorage.getItem("uid"))
//      }; //  POST data

//      const handleSubmit = (event) => {
//       event.preventDefault();
//       fetch(url, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//           // Add other headers if needed
//         },
//         body: JSON.stringify(data) // Convert data to JSON string
//       })
//         .then(response => response.json())
//         .then(result => {
//           console.log("Success:", result);
//           // Handle the success response here
//         })
//         .catch(error => {
//           console.error("Error:", error);
//           // Handle errors here
//         });


//       navigate(`/bypassenger/${pkgId}`)
//     };


//   return (
// 	<div style={{display:'flex', justifyContent:"center"}}>
//     <div className="user-input-container">
//       <h2 className="text-center">Passenger Details 📄</h2>
//       <Form onSubmit={handleSubmit} className="custom-form">
//         <Form.Group controlId="inputValue">
//           <Form.Label className="custom-label">Passenger Name:</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter Name..."
//             value={inputValue}
//             onChange={handleInputChange}
//             className="custom-input"
//           />
//         </Form.Group>
//         <Form.Group controlId="birthdate">
//           <Form.Label className="custom-label">Birth Date:</Form.Label>
//           <Form.Control
//             type="date"
//             placeholder="Enter Birth Date..."
//             value={datevalue}
//             onChange={handleDateChange}
//             className="custom-input"
//           />
//         </Form.Group>
//         <Form.Group controlId="radioGroup">
//           <Form.Label className="custom-label">Passenger Type:</Form.Label>
//           <Col>
//             <Form.Check
//               type="radio"
//               label={`Single Person Cost: $${cost.singlePersonCost}`}
//               name="radioGroup"
//               value="singlePersonCost"
//               checked={selectedOption === 'singlePersonCost'}
//               onChange={handleRadioChange}
//               className="radio-input"
//             />
//             <Form.Check
//               type="radio"
//               label={`Extra Person Cost: $${cost.extraPersonCost}`}
//               name="radioGroup"
//               value="extraPersonCost"
//               checked={selectedOption === 'extraPersonCost'}
//               onChange={handleRadioChange}
//               className="radio-input"
//             />
//             <Form.Check
//               type="radio"
//               label={`Child with Bed: $${cost.childWithBed}`}
//               name="radioGroup"
//               value="childWithBed"
//               checked={selectedOption === 'childWithBed'}
//               onChange={handleRadioChange}
//               className="radio-input"
//             />
//             <Form.Check
//               type="radio"
//               label={`Child without Bed: $${cost.childWithoutBed}`}
//               name="radioGroup"
//               value="childWithoutBed"
//               checked={selectedOption === 'childWithoutBed'}
//               onChange={handleRadioChange}
//               className="radio-input"
//             />
//           </Col>
//         </Form.Group>
//         <Button variant="primary" type="submit" className="submit-button">
//           Submit
//         </Button>

//         <Button variant="primary" onClick={() =>  navigate(`/bybooking/${pkgId}`)}>
//                             Book My Tour
//         </Button>
//       </Form>
//     </div>
// 	</div>
//   );
// }

// export default PassengerDetail
// import { Card, Button,Table } from 'react-bootstrap';
function PassengerDetail() {
  const [inputValue, setInputValue] = useState('');
  const [datevalue, setDateValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [passengers, setPassengers] = useState([]); // State for storing passengers
  const [showTable, setShowTable] = useState(false); // State for toggling the table
  const { catid } = useParams();
  const pkgId = sessionStorage.getItem("pkgid");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    const today = new Date().toISOString().split('T')[0]; // first converting new today date type to string and then performing split method to create a list by splitting on "T" having two values of [taking 1st element of array which is date and second index is time] 
    if (selectedDate > today) {   
      alert("Birth date cannot be greater than today's date.");
    } else {
      setDateValue(selectedDate);
    }
  };

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };


  const custid = sessionStorage.getItem("uid");

  const addPassenger = () => {
    console.log(cost[selectedOption],selectedOption); // here cost of particular selected option is fetched logically using array indexing
    const passenger = {
      passengerName: inputValue, 
      birthdate: datevalue,
      passengerType: selectedOption,
      passengerAmount: cost[selectedOption] // Include the cost in the passenger object
    };

    setPassengers([...passengers, passenger]); // Add the new passenger to the list
    setInputValue('');
    setDateValue('');
    setSelectedOption('');
  };

  console.log(selectedOption)

  // console.log(datevalue,inputValue)
  //  const custid = 2; // we will take it from session storage
  // const id = 4; //will take it from param
  const [cost, setCost] = useState([]);

  const getCost = () => {
    fetch("https://localhost:7003/cost/bycatId/" + catid)
      .then(response => response.json())
      .then(data => {
        setCost(data[0]); // Assuming the fetched data is a single object
        setSelectedOption(data?.key || (cost.singlePersonCost)); // Set default selected option
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    getCost(); // This will fetch cost for particular pkgid -- 21 just when whole form is render for the first time 
    console.log(cost);
  }, [])


  const PostData = (async (passengerData) => {
    try {
      let response;
      let demo = JSON.stringify(passengerData);
      console.log("khali bag");
      console.log(demo);
      //const getresponse =async()=>{
        response  = await fetch("https://localhost:7003/api/Passenger/add", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: demo
      });
      console.log(response.ok);
      if (response.ok) {
        console.log("Customer booked their tour successfully!");
      } else {
        console.log("Customer booking failed.");
      }
    } catch (error) {
      console.error("An error occurred while registering the customer:", error);
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault(); // This will brings the event previous default behaviour

    // Iterate through passengers and send each passenger's data
    passengers.forEach((passenger) => {
      const passengerData = {
        passengerName: passenger.passengerName,
        birthdate: passenger.birthdate,
        passengerType: passenger.passengerType,
        passengerAmount: passenger.passengerAmount,
       // pkgId: pkgId, // Assuming 'id' is defined in the component's scope
        custId: custid // Assuming 'custid' is defined in the component's scope
      };

      // Send the passenger's data to the server
      // callfetch(PostData);
      PostData(passengerData);
    });

    // navigate(`/bybooking/${pkgId}`);
  };
  return (
    <div style={{display:'flex', justifyContent:"center"}}>
    <div className="user-input-container">
      <h2 className="text-center">Passenger Details 📄</h2>
      <Form onSubmit={handleSubmit} className="custom-form">
        <Form.Group controlId="inputValue">
          <Form.Label className="custom-label">Passenger Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name..."
            value={inputValue}
            onChange={handleInputChange}
            className="custom-input"
          />
        </Form.Group>
        <Form.Group controlId="birthdate">
          <Form.Label className="custom-label">Birth Date:</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter Birth Date..."
            value={datevalue}
            onChange={handleDateChange}
            className="custom-input"
          />
        </Form.Group>
        <Form.Group controlId="radioGroup">
          <Form.Label className="custom-label">Passenger Type:</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label={`Single Person Cost: ₹${cost.singlePersonCost}`}
              name="radioGroup"
              value="singlePersonCost"
              checked={selectedOption === 'singlePersonCost'}
              onChange={handleRadioChange}
              className="radio-input"
            />
            <Form.Check
              type="radio"
              label={`Extra Person Cost: ₹${cost.extraPersonCost}`}
              name="radioGroup"
              value="extraPersonCost"
              checked={selectedOption === 'extraPersonCost'}
              onChange={handleRadioChange}
              className="radio-input"
            />
            <Form.Check
              type="radio"
              label={`Child with Bed: ₹${cost.childWithBed}`}
              name="radioGroup"
              value="childWithBed"
              checked={selectedOption === 'childWithBed'}
              onChange={handleRadioChange}
              className="radio-input"
            />
            <Form.Check
              type="radio"
              label={`Child without Bed: ₹${cost.childWithoutBed}`}
              name="radioGroup"
              value="childWithoutBed"
              checked={selectedOption === 'childWithoutBed'}
              onChange={handleRadioChange}
              className="radio-input"
            />
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-button">
          Submit
        </Button>
        <Button
          variant="secondary"
          type="button"
          className="submit-button"
          
          onClick={addPassenger}
          // onClick={() => setShowTable(!showTable)}
        >
          Add Passenger
        </Button>
        <Button
          variant="info"
          type="button"
          className="submit-button"
          onClick={() => setShowTable(!showTable)} // Toggle the table display
        >
          Show Table
        </Button>
      </Form>

      {showTable && (
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>Name</th>
              <th>Birth Date</th>
              <th>Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {passengers.map((passenger, index) => (
              <tr key={index}>
                <td>{passenger.passengerName}</td>
                <td>{passenger.birthdate}</td>
                <td>{passenger.passengerType}</td>
                <td>₹{passenger.passengerAmount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
       <Button variant="primary" onClick={() =>  navigate(`/bybooking/${pkgId}`)} className="submit-button">
                            Book My Tour
      </Button> 
    </div>
    </div>
  );
  // return (
  //   <div style={{display:'flex', justifyContent:"center"}}>
  //   <div className="user-input-container">
  //     <h2 className="text-center">Passenger Details 📄</h2>
  //     <Form onSubmit={handleSubmit} className="custom-form">
  //       <Form.Group controlId="inputValue">
  //         <Form.Label className="custom-label">Passenger Name:</Form.Label>
  //         <Form.Control
  //           type="text"
  //           placeholder="Enter Name..."
  //           value={inputValue}
  //           onChange={handleInputChange}
  //           className="custom-input"
  //         />
  //       </Form.Group>
  //       <Form.Group controlId="birthdate">
  //         <Form.Label className="custom-label">Birth Date:</Form.Label>
  //         <Form.Control
  //           type="date"
  //           placeholder="Enter Birth Date..."
  //           value={datevalue}
  //           onChange={handleDateChange}
  //           className="custom-input"
  //         />
  //       </Form.Group>
  //       <Form.Group controlId="radioGroup">
  //         <Form.Label className="custom-label">Passenger Type:</Form.Label>
  //         <Col>
  //           <Form.Check
  //             type="radio"
  //             label={`Single Person Cost: $${cost.singlePersonCost}`}
  //             name="radioGroup"
  //             value="singlePersonCost"
  //             checked={selectedOption === 'singlePersonCost'}
  //             onChange={handleRadioChange}
  //             className="radio-input"
  //           />
  //           <Form.Check
  //             type="radio"
  //             label={`Extra Person Cost: $${cost.extraPersonCost}`}
  //             name="radioGroup"
  //             value="extraPersonCost"
  //             checked={selectedOption === 'extraPersonCost'}
  //             onChange={handleRadioChange}
  //             className="radio-input"
  //           />
  //           <Form.Check
  //             type="radio"
  //             label={`Child with Bed: $${cost.childWithBed}`}
  //             name="radioGroup"
  //             value="childWithBed"
  //             checked={selectedOption === 'childWithBed'}
  //             onChange={handleRadioChange}
  //             className="radio-input"
  //           />
  //           <Form.Check
  //             type="radio"
  //             label={`Child without Bed: $${cost.childWithoutBed}`}
  //             name="radioGroup"
  //             value="childWithoutBed"
  //             checked={selectedOption === 'childWithoutBed'}
  //             onChange={handleRadioChange}
  //             className="radio-input"
  //           />
  //         </Col>
  //       </Form.Group>
  //       <Button variant="primary" type="submit" className="submit-button">
  //         Submit
  //       </Button>
  //       <Button
  //         variant="secondary"
  //         type="button"
  //         className="submit-button"
  //         onClick={addPassenger}
  //       >
  //         Add Passenger
  //       </Button>
  //       <Button
  //         variant="info"
  //         type="button"
  //         className="submit-button"
  //         onClick={() => setShowTable(!showTable)} // Toggle the table display
  //       >
  //         Show Table
  //       </Button>
  //     </Form>

  //     {showTable && (
  //       <Table striped bordered hover variant="light">
  //         <thead>
  //           <tr>
  //             <th>Name</th>
  //             <th>Birth Date</th>
  //             <th>Type</th>
  //             <th>Amount</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {passengers.map((passenger, index) => (
  //             <tr key={index}>
  //               <td>{passenger.passengerName}</td>
  //               <td>{passenger.birthdate}</td>
  //               <td>{passenger.passengerType}</td>
  //               <td>${passenger.passengerAmount.toFixed(2)}</td>
  //             </tr>
  //           ))}
  //         </tbody>
  //       </Table>
  //     )}
  //     <Button variant="primary" onClick={() =>  navigate(`/bybooking/${pkgId}`)}>
  //                           Book My Tour
  //     </Button>
  //   </div>
  //   </div>
  // );
}
export default PassengerDetail;