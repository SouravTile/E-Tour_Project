import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jsPDF from "jspdf";
import htmlToPdfmake from "html-to-pdfmake";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
//import {setLoading,loading} from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom';
function Booking({ bookingId }) {
 // const [bookingData, setBookingData] = useState({});     
  const [packageData, setPackageData] = useState([]);
  const [departureData, setDepartureData] = useState([]);
  const [customerData, setCustomerData] = useState([]);
  const [paxData, setPaxData] = useState(0);
  const [sumData, setSumData] = useState(0);
  const [paxAllData, setPaxAllData] = useState([]);
  const {pkgId} = useParams();
  const [loading, setLoading] = useState(true)



  // const custId=JSON.parse(localStorage.getItem("uid"))
  const custId = sessionStorage.getItem("uid")
  useEffect(() => {
    async function fetchData() {
      try {
        console.log(custId);
        console.log(pkgId);
        const [packageResponse, departureResponse, customerResponse, paxResponse, sumResponse] = await Promise.all([
         axios.get("http://localhost:8081/api/package_master/"+pkgId),
         axios.get("http://localhost:8081/api/date_master/ById/"+pkgId),
         axios.get("http://localhost:8081/api/customer_master/"+custId),
         axios.get("http://localhost:8081/api/passenger_master/bycust/"+custId),
         axios.get("http://localhost:8081/api/passenger_master/Bysum/"+custId)
        ]);

        setPackageData(packageResponse.data);
        setDepartureData(departureResponse.data[0]);
        setCustomerData(customerResponse.data);
        setPaxData(paxResponse.data);
        setSumData(sumResponse.data);
        //setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  useEffect(() => async function fetchPax() {
    try {
      const response = await fetch("http://localhost:8081/api/passenger_master/ById/"+custId);
      const data = await response.json();

      setPaxAllData(data);
      console.log(data)
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
    // fetchPax();
  }, []);
  //  fetchPax();


  console.log("-----------------" + paxData +"---------------------");

  // Get the current date
  const currentDate = new Date();

  // Format the date as a string
  const formattedDate = currentDate.toDateString();
  const Taxes = 18;


  const printDocument = () => {
    const doc = new jsPDF();

    const pdfTable = document.getElementById('divToPrint');
    const html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = {
      content: [
        { text: "BOOKING DETAILS", fontSize: 18, bold: true },
        { text: `Purchased Date: ${formattedDate}`, fontSize: 12 },
        html,
      ],
    };
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    const pdf = pdfMake.createPdf(documentDefinition);
    sessionStorage.setItem("pid",pdf);
    pdfMake.createPdf(documentDefinition).open();
  };
  const totalamt = sumData + sumData * 0.18;
  const departure = departureData.departureId;
  //const mypaxData = paxData;
  sessionStorage.setItem("mypaxData", paxData)

  const [bookingPost, setBookingPost] = useState();
 

  console.log(bookingPost);
  const PrintData = (async () => {
    setBookingPost({
      "bookingDate": new Date().toISOString().substr(0, 10), // Set current date as the default booking date
      "numberOfPassengers": +sessionStorage.getItem("mypaxData"),
      "tourAmount": sumData, // Removed curly braces here
      "taxes": Taxes, // Removed curly braces here
      "totalAmount": totalamt,
      "pkgId": +pkgId, // Removed curly braces here
      "departureId": departure,
      "custId": +custId // Removed curly braces here
    })
  });
  const PostData = (async () => {
    try {

      let demo = JSON.stringify(bookingPost);
      console.log(demo);
      const response = await fetch("http://localhost:8081/api/booking_header", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: demo
      });

      if (response.ok) {
        console.log("Customer booked their tour successfully!");
      } else {
        console.log("Customer booking failed.");
      }
    } catch (error) {
      console.error("An error occurred while registering the customer:", error);
    }
    alert("Thank You!!! Your Tour is Booked")
  });


  // Call the function to actually post the data


  return (
    <div align="center">
      <div id="divToPrint" style={{ padding: '20px' }}>
        <h3>Package Details</h3>
        <p>Package Name: {packageData.pkgName}</p>
  
        <h3>Departure Details</h3>
        <p>Departure Date: {departureData.departDate}</p>
        <p>End Date: {departureData.endDate}</p>
  
        <h3>Customer Details</h3>
        <p>Customer Name: {customerData.firstName} {customerData.lastName}</p>
        <p>Customer Age: {customerData.age} </p>
        <p>Customer Gender: {customerData.gender} </p>
        <p>Customer Mobile Number: {customerData.mobileNumber} </p>
        <p>Customer Email: {customerData.email} </p>
        <p>Customer Adhar Number: {customerData.adharNumber} </p>
  
        <div>
          <h3>Passenger Details</h3>
          {loading ? (
            <p>Loading passenger data...</p>
          ) : (
            <>
              <p>Number Of Passengers: {paxData}</p>
              <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                  <tr>
                    <th>Passenger Name</th>
                    <th>Passenger Birthdate</th>
                    <th>Passenger Type</th>
                    <th>Passenger Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {paxAllData.map((passenger) => (
                    <tr key={passenger.passengerId}>
                      <td>{passenger.passengerName}</td>
                      <td>{passenger.birthdate}</td>
                      <td>{passenger.passengerType}</td>
                      <td>{passenger.passengerAmount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
  
        <div className="booking-card">
          <h2>Booking Details</h2>
          <table className="booking-table">
            <tbody>
              <tr>
                <td>Booking Date:</td>
                <td>{bookingPost?.bookingDate}</td>
              </tr>
              <tr>
                <td>Number of Passengers:</td>
                <td>{bookingPost?.numberOfPassengers}</td>
              </tr>
              <tr>
                <td>Tour Amount:</td>
                <td>{bookingPost?.tourAmount}</td>
              </tr>
              <tr>
                <td>Taxes:</td>
                <td>{bookingPost?.taxes}</td>
              </tr>
              <tr>
                <td>Total Amount:</td>
                <td>{bookingPost?.totalAmount}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <button
        className="print-button"
        onClick={PrintData}
        style={{ backgroundColor: '#3498db',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        margin: '10px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, transform 0.3s ease', }}
      >
        Get My Booking Details
      </button>
      <button
        className="print-button"
        onClick={PostData}
        style={{backgroundColor: '#3498db',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        margin: '10px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, transform 0.3s ease', }}
      >
        PostToBook
      </button>
      <button
        className="print-button"
        onClick={printDocument}
        style={{ backgroundColor: '#3498db',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        margin: '10px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, transform 0.3s ease', }}
      >
        Print Invoice
      </button>
    </div>
  );
  
  // return (
  //   <div align="center">
  //     {/* <h2>Booking Details</h2>
  //     <p>Booking ID: {bookingData.bookingId}</p>
  //     <p>Booking Date: {bookingData.bookingDate}</p>
  //     Display other booking-related data */}
  //     <div id="divToPrint" className="invoice-content">
  //       <h3>Package Details</h3>
  //       <p>Package Name: {packageData.pkgName}</p>
  //       {/* Display other package-related data */}

  //       <h3>Departure Details</h3>
  //       <p>Departure Date: {departureData.departDate}</p>
  //       <p>End Date: {departureData.endDate}</p>
  //       {/* Display other departure-related data */}

  //       <h3>Customer Details</h3>
  //       <p>Customer Name: {customerData.firstName} {customerData.lastName}</p>
  //       <p>Customer Age: {customerData.age} </p>
  //       <p>Customer Gender: {customerData.gender} </p>
  //       <p>Customer MobileNumber: {customerData.mobileNumber} </p>
  //       <p>Customer Email: {customerData.email} </p>
  //       <p>Customer AdharNumber: {customerData.adharNumber} </p>
  //       {/* Display other customer-related data */}

  //       <div>
  //         <h3>Passenger Details</h3>
  //         {loading ? (
  //           <p>Loading passenger data...</p>
  //         ) : (
  //           <>
  //             {/* <p>Number Of Passengers: {paxAllData.length}</p> */}
  //             <p>Number Of Passengers: {paxData}</p>
  //             {paxAllData.map((passenger) => (
  //               <div key={passenger.passengerId}>
  //                 <p><h5>One by One Details</h5></p>
  //                 <p>Passenger Name: {passenger.passengerName}</p>
  //                 <p>Passenger Birthdate: {passenger.birthdate}</p>
  //                 <p>Passenger Type: {passenger.passengerType}</p>
  //                 <p>Passenger Amount: {passenger.passengerAmount}</p>
  //               </div>
  //             ))}
  //           </>
  //         )}
  //       </div>

  //       <div className="booking-card">
  //         <h2>Booking Details</h2>
  //         <table className="booking-table">
  //           <tbody>
  //             <tr>
  //               <td>Booking Date:</td>
  //               <td>{bookingPost?.bookingDate}</td>
  //             </tr>
  //             <tr>
  //               <td>Number of Passengers:</td>
  //               {/* <td>{paxData}</td> */}
  //               <td>{bookingPost?.numberOfPassengers}</td>
  //             </tr>
  //             <tr>
  //               <td>Tour Amount:</td>
  //               <td>{bookingPost?.tourAmount}</td>
  //             </tr>
  //             <tr>
  //               <td>Taxes:</td>
  //               <td>{bookingPost?.taxes}</td>
  //             </tr>
  //             <tr>
  //               <td>Total Amount:</td>
  //               <td>{bookingPost?.totalAmount}</td>
  //             </tr>
  //           </tbody>
  //         </table>
  //       </div>
  //     </div>
  //     <button className="print-button" onClick={PrintData}>Get My Booking Details</button>
  //     <button className="print-button" onClick={PostData}>PostToBook</button>
  //     <button className="print-button" onClick={printDocument}>Print Invoice</button>
  //   </div>

  // );
}

export default Booking;

